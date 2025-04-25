import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import LicenseUser from "@/models/LicenseUser"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")

    let event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error(`Webhook signature verification failed: ${err.message}`)
      return NextResponse.json({ message: `Webhook Error: ${err.message}` }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        await handleCheckoutSessionCompleted(session)
        break

      case "customer.subscription.deleted":
        const subscription = event.data.object
        await handleSubscriptionDeleted(subscription)
        break

      case "invoice.payment_failed":
        const invoice = event.data.object
        await handlePaymentFailed(invoice)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ message: "Webhook handler failed" }, { status: 500 })
  }
}

async function handleCheckoutSessionCompleted(session) {
  try {
    await connectToDatabase()

    // Extract metadata
    const email = session.customer_email || session.metadata?.email
    const subscriptionType = session.metadata?.subscriptionType
    const discordId = session.metadata?.discordId
    const discordUsername = session.metadata?.discordUsername

    if (!email || !subscriptionType) {
      console.error("Missing metadata in checkout session:", session.id)
      return
    }

    // Check if we already processed this session
    const existingLicense = await LicenseUser.findOne({ stripeSessionId: session.id })
    if (existingLicense) {
      console.log("Session already processed:", session.id)
      return
    }

    // Generate license key if not already done
    await fetch(`${process.env.NEXTAUTH_URL}/api/generate-license`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        plan: subscriptionType,
        discordId,
        discordUsername,
        stripeSessionId: session.id,
      }),
    })

    console.log("License generated for session:", session.id)
  } catch (error) {
    console.error("Error handling checkout session completed:", error)
  }
}

async function handleSubscriptionDeleted(subscription) {
  try {
    await connectToDatabase()

    // Find user with this subscription ID
    const licenseUser = await LicenseUser.findOne({ stripeSubscriptionId: subscription.id })

    if (!licenseUser) {
      console.log("No user found with subscription ID:", subscription.id)
      return
    }

    // Update user subscription status
    licenseUser.isActive = false
    await licenseUser.save()

    console.log("Subscription canceled for user:", licenseUser._id)
  } catch (error) {
    console.error("Error handling subscription deleted:", error)
  }
}

async function handlePaymentFailed(invoice) {
  try {
    await connectToDatabase()

    if (!invoice.subscription) {
      console.log("No subscription associated with invoice:", invoice.id)
      return
    }

    // Find user with this subscription ID
    const licenseUser = await LicenseUser.findOne({ stripeSubscriptionId: invoice.subscription })

    if (!licenseUser) {
      console.log("No user found with subscription ID:", invoice.subscription)
      return
    }

    // Mark the user's subscription as at risk
    // You might want to notify the user or take other actions
    console.log("Payment failed for user:", licenseUser._id)
  } catch (error) {
    console.error("Error handling payment failed:", error)
  }
}
