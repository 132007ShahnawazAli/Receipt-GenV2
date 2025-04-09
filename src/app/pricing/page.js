"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function PricingSection() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubscription = async (priceId) => {
    if (status !== "authenticated") {
      router.push("/login")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        window.location.href = data.url
      } else {
        throw new Error(data.message || "Failed to create checkout session")
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const pricingPlans = [
    {
      title: "1 Month",
      price: "$24.99",
      originalPrice: "$34.99",
      features: ["Unlimited Receipts", "70+ Stores", "Physical Receipts", "App Emulators", "View Bots"],
      cta: "Get 1 Month",
      featured: true,
      priceId: process.env.NEXT_PUBLIC_MONTHLY_PLAN_ID,
    },
    {
      title: "Lifetime",
      price: "$39.99",
      originalPrice: "$59.99",
      features: ["Unlimited Receipts", "70+ Stores", "Physical Receipts", "App Emulators", "View Bots"],
      cta: "Get Lifetime",
      featured: false,
      priceId: process.env.NEXT_PUBLIC_LIFETIME_PLAN_ID,
    },
  ]

  return (
    <div className="px-8 sm:px-14 bg-[var(--background)] flex flex-col items-center gap-20 tablet:py-10">
      <div className="flex flex-col gap-7 items-center">
        <h1 className="tablet:font-bold font-semibold text-[var(--primary-text)] tablet:w-full text-5xl tablet:text-7xl tracking-tighter">
          Choose Your Plan
        </h1>
        <p className="tablet:text-2xl text-lg font-light tracking-tight text-center text-[var(--primary-text)] tablet:w-xl w-full">
          Access all premium features with flexible pricing options
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] border-[1px] border-[var(--secondary-text)] relative bg-gradient-to-br from-neutral-950 to-[var(--background)] rounded-lg p-8 flex flex-col"
          >
            {plan.featured && (
              <div className="absolute -top-4 right-8 bg-[var(--accent-text)] text-black font-semibold px-4 py-1 rounded-full">
                Featured
              </div>
            )}

            <h2 className="tablet:text-3xl text-xl font-semibold tracking-tight text-[var(--primary-text)] tablet:w-xl w-full">
              {plan.title}
            </h2>

            <div className="mb-4">
              <span className="text-[var(--primary-text)] text-6xl font-bold">{plan.price}</span>
              <span className="text-[var(--secondary-text)] ml-2 line-through">{plan.originalPrice}</span>
            </div>

            <p className="text-[var(--secondary-text)] mb-8">
              {plan.title === "Lifetime" ? "One time payment" : "Monthly payment"}
            </p>

            <div className="flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[var(--primary-text)]">
                    <Check className="mr-2 h-5 w-5 text-[var(--accent-text)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="mt-8 w-full bg-[#111] border border-gray-700 text-[var(--primary-text)] py-3 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-70"
              onClick={() => handleSubscription(plan.priceId)}
              disabled={loading}
            >
              {loading ? "Processing..." : plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
