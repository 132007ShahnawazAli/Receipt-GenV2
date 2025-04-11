import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("session_id")
    const userId = searchParams.get("userId")
    const type = searchParams.get("type")
    const priceId = searchParams.get("priceId")

    if (!sessionId || !userId || !type || !priceId) {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=missing_params`)
    }

    // Verify the payment was successful
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId)

    // For one-time payments, check payment status
    // For subscriptions, check subscription status
    const isPaymentSuccessful =
      type === "lifetime" ? checkoutSession.payment_status === "paid" : checkoutSession.subscription !== null

    if (!isPaymentSuccessful) {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=payment_failed`)
    }

    // Connect to database
    await connectToDatabase()

    // Calculate subscription end date for monthly subscriptions
    let subscriptionEndDate = null
    if (type === "monthly") {
      subscriptionEndDate = new Date()
      subscriptionEndDate.setDate(subscriptionEndDate.getDate() + 30)
    }

    // Update user subscription status
    await User.findByIdAndUpdate(userId, {
      hasActiveSubscription: true,
      subscriptionType: type,
      subscriptionEndDate,
      ...(type === "monthly" && checkoutSession.subscription
        ? { stripeSubscriptionId: checkoutSession.subscription }
        : {}),
    })

    // Redirect to dashboard with success parameter
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard?payment=success`)
  } catch (error) {
    console.error("Error processing payment success:", error)
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=server_error`)
  }
}
