"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CheckoutModal({ isOpen, onClose, initialPlan = null }) {
  const [step, setStep] = useState("plans")
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [email, setEmail] = useState("")
  const [discordConnected, setDiscordConnected] = useState(false)
  const [discordUsername, setDiscordUsername] = useState("")
  const [discordId, setDiscordId] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Set initial plan if provided
  useEffect(() => {
    if (initialPlan) {
      const plan = plans.find((p) => p.id === initialPlan)
      if (plan) {
        setSelectedPlan(plan)
        setStep("email")
      }
    }
  }, [initialPlan])

  // Plans data
  const plans = [
    {
      id: "price_monthly",
      name: "Monthly",
      price: "$29.99",
      period: "per month",
      features: ["Access to all receipt templates", "Email support", "Regular updates"],
    },
    {
      id: "price_lifetime",
      name: "Lifetime",
      price: "$99.99",
      period: "one-time payment",
      features: ["Lifetime access to all templates", "Priority support", "All future updates"],
    },
  ]

  useEffect(() => {
    // Listen for Discord OAuth redirect
    const handleDiscordCallback = (event) => {
      if (event.origin !== window.location.origin) return

      if (event.data.type === "discord_auth_success") {
        setDiscordConnected(true)
        setDiscordUsername(event.data.username)
        setDiscordId(event.data.id)
      }
    }

    window.addEventListener("message", handleDiscordCallback)
    return () => window.removeEventListener("message", handleDiscordCallback)
  }, [])

  // Handle Discord connection
  const connectDiscord = () => {
    // Open Discord OAuth in a popup
    const width = 600
    const height = 800
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2

    const popup = window.open(
      `/api/auth/discord?email=${encodeURIComponent(email)}`,
      "Connect Discord",
      `width=${width},height=${height},left=${left},top=${top}`,
    )

    // Check if popup was blocked
    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      alert("Please allow popups for this website to connect your Discord account.")
    }
  }

  // Handle plan selection
  const selectPlan = (plan) => {
    setSelectedPlan(plan)
    setStep("email")
  }

  // Handle email submission
  const submitEmail = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address")
      return
    }
    setStep("discord")
  }

  // Handle payment
  const proceedToPayment = async () => {
    if (!selectedPlan || !email) return

    setLoading(true)
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: selectedPlan.id,
          email: email,
          discordUsername: discordUsername,
          discordId: discordId,
          planType: selectedPlan.id === "price_lifetime" ? "lifetime" : "monthly",
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

  // Go back to previous step
  const goBack = () => {
    if (step === "email") setStep("plans")
    else if (step === "discord") setStep("email")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div
        className="bg-[var(--background)] rounded-xl w-full max-w-md mx-4 overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-800">
          <h2 className="text-2xl font-semibold text-[var(--primary-text)]">
            {step === "plans" && "Choose a Plan"}
            {step === "email" && "Your Email"}
            {step === "discord" && "Connect Discord"}
          </h2>
          <button onClick={onClose} className="text-[var(--accent-text)] hover:text-[var(--accent-text)]/80">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Plan Selection */}
          {step === "plans" && (
            <div className="space-y-4">
              <p className="text-[var(--secondary-text)] mb-4">Select a plan to access our receipt generator:</p>

              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="border border-zinc-800 rounded-lg p-4 hover:border-[var(--accent-text)] cursor-pointer transition-colors"
                  onClick={() => selectPlan(plan)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-medium">{plan.name}</h3>
                    <div className="text-[var(--accent-text)] font-bold">
                      {plan.price}{" "}
                      <span className="text-sm font-normal text-[var(--secondary-text)]">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-sm text-[var(--secondary-text)] flex items-center">
                        <span className="mr-2 text-[var(--accent-text)]">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Email */}
          {step === "email" && (
            <form onSubmit={submitEmail} className="space-y-4">
              <p className="text-[var(--secondary-text)] mb-4">Please enter your email address to continue:</p>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--secondary-text)] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-transparent border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent-text)] text-[var(--primary-text)]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[var(--accent-text)] text-black rounded-md hover:bg-[var(--accent-text)]/80 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Discord Connection */}
          {step === "discord" && (
            <div className="space-y-4">
              <p className="text-[var(--secondary-text)] mb-4">
                Connect your Discord account to access exclusive channels:
              </p>

              <div className="flex flex-col items-center justify-center py-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Discord Logo"
                  width={80}
                  height={80}
                  className="mb-4"
                />

                {!discordConnected ? (
                  <button
                    onClick={connectDiscord}
                    className="w-full py-3 bg-[#5865F2] text-white rounded-md hover:bg-[#4752C4] transition-colors flex items-center justify-center"
                  >
                    <span className="mr-2">Connect Discord</span>
                  </button>
                ) : (
                  <div className="text-center">
                    <div className="text-green-500 mb-2">✓ Connected</div>
                    <div className="bg-zinc-800 rounded-md px-4 py-2 mb-4">{discordUsername}</div>
                    <button
                      onClick={proceedToPayment}
                      className="w-full py-3 bg-[var(--accent-text)] text-black rounded-md hover:bg-[var(--accent-text)]/80 transition-colors"
                    >
                      {loading ? "Processing..." : "Proceed to Payment"}
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={goBack}
                  className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    // Skip Discord connection if needed
                    proceedToPayment()
                  }}
                  className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-[var(--secondary-text)]"
                >
                  Skip Discord
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
