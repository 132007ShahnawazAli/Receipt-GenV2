import { NextResponse } from "next/server"
import Stripe from "stripe"
import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"

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
      return NextResponse.json({ message: "Webhook signature verification failed" }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        await handleCheckoutSessionCompleted(session)
        break
      }
      case "invoice.paid": {
        const invoice = event.data.object
        await handleInvoicePaid(invoice)
        break
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object
        await handleSubscriptionDeleted(subscription)
        break
      }
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
  const { userId, subscriptionType } = session.metadata

  if (!userId) {
    console.error("No userId in session metadata")
    return
  }

  await connectToDatabase()

  // For lifetime subscriptions
  if (subscriptionType === "lifetime") {
    await User.findByIdAndUpdate(userId, {
      hasActiveSubscription: true,
      subscriptionType: "lifetime",
      subscriptionEndDate: null, // No end date for lifetime
    })
    console.log(`Updated user ${userId} with lifetime subscription`)
    return
  }

  // For monthly subscriptions, we'll update when the invoice is paid
  // But we should also mark the user as having an active subscription here
  await User.findByIdAndUpdate(userId, {
    hasActiveSubscription: true,
    subscriptionType: "monthly",
    checkoutCompleted: true,
    // Set subscription end date to 30 days from now
    subscriptionEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  })
  console.log(`Updated user ${userId} with monthly subscription`)
}

async function handleInvoicePaid(invoice) {
  try {
    const subscription = await stripe.subscriptions.retrieve(invoice.subscription)

    const customerId = invoice.customer
    const customer = await stripe.customers.retrieve(customerId)
    const userEmail = customer.email

    await connectToDatabase()

    const user = await User.findOne({ email: userEmail })

    if (!user) {
      console.error(`No user found with email: ${userEmail}`)
      return
    }

    // Calculate subscription end date (30 days from now for monthly)
    const subscriptionEndDate = new Date()
    subscriptionEndDate.setDate(subscriptionEndDate.getDate() + 30)

    await User.findByIdAndUpdate(user._id, {
      hasActiveSubscription: true,
      subscriptionType: "monthly",
      subscriptionEndDate,
      stripeSubscriptionId: subscription.id,
    })

    console.log(`Updated user ${user._id} subscription after invoice payment`)
  } catch (error) {
    console.error("Error in handleInvoicePaid:", error)
  }
}

async function handleSubscriptionDeleted(subscription) {
  const customerId = subscription.customer
  const customer = await stripe.customers.retrieve(customerId)
  const userEmail = customer.email

  await connectToDatabase()

  const user = await User.findOne({ email: userEmail })

  if (!user) {
    console.error(`No user found with email: ${userEmail}`)
    return
  }

  // Only update if it's not a lifetime subscription
  if (user.subscriptionType !== "lifetime") {
    await User.findByIdAndUpdate(user._id, {
      hasActiveSubscription: false,
      subscriptionEndDate: new Date(), // Set to current date to indicate it's expired
    })
  }
}
