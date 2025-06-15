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

    let success = true
    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object
          success = await handleCheckoutSessionCompleted(session)
          break
        }
        case "customer.subscription.deleted": {
          const subscription = event.data.object
          success = await handleSubscriptionDeleted(subscription)
          break
        }
        case "invoice.payment_failed": {
          const invoice = event.data.object
          success = await handlePaymentFailed(invoice)
          break
        }
        case "charge.refunded": {
          const charge = event.data.object
          success = await handleChargeRefunded(charge)
          break
        }
        default:
          console.log(`Unhandled event type: ${event.type}`)
      }
    } catch (err) {
      console.error(`Error processing event ${event.type}:`, err)
      success = false
    }

    if (success) {
      return NextResponse.json({ received: true })
    } else {
      return NextResponse.json({ message: "Webhook handler failed" }, { status: 500 })
    }
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ message: "Webhook handler failed" }, { status: 500 })
  }
}

async function handleCheckoutSessionCompleted(session) {
  try {
    await connectToDatabase()
    const email = session.customer_email || session.metadata?.email
    const planType = session.metadata?.planType
    const discordId = session.metadata?.discordId
    const discordUsername = session.metadata?.discordUsername

    if (!email || !planType) {
      console.error("Missing metadata in checkout session:", session.id)
      return false
    }

    // Idempotency: Check if already processed
    const existingLicense = await LicenseUser.findOne({ stripeSessionId: session.id })
    if (existingLicense) {
      console.log("Session already processed:", session.id)
      return true
    }

    // TODO: Call internal license generation logic directly instead of HTTP
    await fetch(`${process.env.NEXTAUTH_URL}/api/generate-license`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, plan: planType, discordId, discordUsername, stripeSessionId: session.id }),
    })

    console.log("License generated for session:", session.id)
    return true
  } catch (error) {
    console.error("Error handling checkout session completed:", error)
    return false
  }
}

async function handleSubscriptionDeleted(subscription) {
  try {
    await connectToDatabase()
    const licenseUser = await LicenseUser.findOne({ stripeSubscriptionId: subscription.id })
    if (!licenseUser) {
      console.log("No user found with subscription ID:", subscription.id)
      return true
    }
    licenseUser.isActive = false
    await licenseUser.save()
    // TODO: Notify user of subscription cancellation
    console.log("Subscription canceled for user:", licenseUser._id)
    return true
  } catch (error) {
    console.error("Error handling subscription deleted:", error)
    return false
  }
}

async function handlePaymentFailed(invoice) {
  try {
    await connectToDatabase()
    if (!invoice.subscription) {
      console.log("No subscription associated with invoice:", invoice.id)
      return true
    }
    const licenseUser = await LicenseUser.findOne({ stripeSubscriptionId: invoice.subscription })
    if (!licenseUser) {
      console.log("No user found with subscription ID:", invoice.subscription)
      return true
    }
    // TODO: Notify user of failed payment (email, dashboard, etc.)
    console.log("Payment failed for user:", licenseUser._id)
    return true
  } catch (error) {
    console.error("Error handling payment failed:", error)
    return false
  }
}

// Handle refunds
async function handleChargeRefunded(charge) {
  try {
    await connectToDatabase()
    // TODO: Find user by charge or payment intent, mark as refunded, notify user
    console.log("Charge refunded:", charge.id)
    return true
  } catch (error) {
    console.error("Error handling charge refunded:", error)
    return false
  }
}
