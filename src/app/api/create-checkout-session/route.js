import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const { priceId, email, discordUsername, discordId, planType } = await request.json()

    if (!priceId || !email) {
      return NextResponse.json({ message: "Price ID and email are required" }, { status: 400 })
    }

    // Map the frontend price IDs to the actual Stripe price IDs
    const priceIdMap = {
      price_monthly: process.env.MONTHLY_PLAN_ID,
      price_lifetime: process.env.LIFETIME_PLAN_ID,
      price_7day: process.env.SEVEN_DAY_PLAN_ID,
      price_14day: process.env.FOURTEEN_DAY_PLAN_ID,
    }

    const actualPriceId = priceIdMap[priceId] || priceId
    const isLifetime = priceId === "price_lifetime"
    const isNonRecurring = priceId === "price_7day" || priceId === "price_14day" || priceId === "price_monthly"

    // Create Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: actualPriceId,
          quantity: 1,
        },
      ],
      mode: isLifetime || isNonRecurring ? "payment" : "subscription",
      success_url: `${process.env.NEXTAUTH_URL}/api/payment-success?email=${encodeURIComponent(email)}&type=${isLifetime ? "lifetime" : isNonRecurring ? priceId.replace("price_", "") : "monthly"}&discordId=${discordId || ""}&discordUsername=${encodeURIComponent(discordUsername || "")}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/store?payment=cancelled`,
      customer_email: email,
      metadata: {
        email,
        planType: isLifetime ? "lifetime" : isNonRecurring ? priceId.replace("price_", "") : "monthly",
        discordId: discordId || "",
        discordUsername: discordUsername || "",
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ message: `Error creating checkout session: ${error.message}` }, { status: 500 })
  }
}
