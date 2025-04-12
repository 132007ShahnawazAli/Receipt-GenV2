import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    const { priceId } = await request.json()

    if (!priceId) {
      return NextResponse.json({ message: "Price ID is required" }, { status: 400 })
    }

    // Map the frontend price IDs to the actual Stripe price IDs
    const priceIdMap = {
      price_monthly: process.env.MONTHLY_PLAN_ID,
      price_lifetime: process.env.LIFETIME_PLAN_ID,
    }

    const actualPriceId = priceIdMap[priceId] || priceId
    const isLifetime = priceId === "price_lifetime"

    // Create Stripe checkout session with different modes based on subscription type
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: actualPriceId,
          quantity: 1,
        },
      ],
      mode: isLifetime ? "payment" : "subscription",
      success_url: `${process.env.NEXTAUTH_URL}/api/payment-success?session_id={CHECKOUT_SESSION_ID}&userId=${session.user.id}&type=${isLifetime ? "lifetime" : "monthly"}&priceId=${priceId}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/store?payment=cancelled`,
      customer_email: session.user.email,
      metadata: {
        userId: session.user.id,
        subscriptionType: isLifetime ? "lifetime" : "monthly",
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ message: `Error creating checkout session: ${error.message}` }, { status: 500 })
  }
}
