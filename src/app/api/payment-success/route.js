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

    console.log("Payment success parameters:", { sessionId, userId, type, priceId })

    if (!sessionId || !userId || !type || !priceId) {
      console.error("Missing required parameters:", { sessionId, userId, type, priceId })
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=missing_params`)
    }

    // Verify the payment was successful
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId)
    console.log("Checkout session:", checkoutSession)

    if (checkoutSession.payment_status !== "paid") {
      console.error("Payment not successful:", checkoutSession.payment_status)
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=payment_failed`)
    }

    // Connect to database
    await connectToDatabase()

    // Calculate subscription end date
    let subscriptionEndDate = null
    if (type === "monthly") {
      subscriptionEndDate = new Date()
      subscriptionEndDate.setDate(subscriptionEndDate.getDate() + 30)
    }

    // Update user subscription status
    const updateResult = await User.findByIdAndUpdate(
      userId,
      {
        hasActiveSubscription: true,
        subscriptionType: type,
        subscriptionEndDate,
        stripeCustomerId: checkoutSession.customer,
        ...(type === "monthly" && checkoutSession.subscription
          ? { stripeSubscriptionId: checkoutSession.subscription }
          : {}),
      },
      { new: true }
    )

    if (!updateResult) {
      console.error("Failed to update user subscription:", userId)
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=update_failed`)
    }

    console.log("Successfully updated user subscription:", {
      userId,
      type,
      subscriptionEndDate,
      hasActiveSubscription: updateResult.hasActiveSubscription,
      stripeCustomerId: updateResult.stripeCustomerId,
      stripeSubscriptionId: updateResult.stripeSubscriptionId
    })

    // Redirect to dashboard with success parameter
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard?payment=success`)
  } catch (error) {
    console.error("Error processing payment success:", error)
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=server_error`)
  }
}
