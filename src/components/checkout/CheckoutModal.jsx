"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
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
      price: "$19.95",
      period: "per month",
      features: ["Access to all receipt templates", "Email support", "Regular updates"],
    },
    {
      id: "price_lifetime",
      name: "Lifetime",
      price: "$69.95",
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
        className="bg-[#121212] rounded-xl w-full max-w-md mx-4 overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-800">
          <h2 className="text-2xl font-semibold text-[#EDEDED]">
            {step === "plans" && "Choose a Plan"}
            {step === "email" && "Your Email"}
            {step === "discord" && "Connect Discord"}
          </h2>
          <button onClick={onClose} className="text-[#a2bef7] hover:text-[#a2bef7]/80">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Plan Selection */}
          {step === "plans" && (
            <div className="space-y-4">
              <p className="text-[#ededed80] mb-4">Select a plan to access our receipt generator:</p>

              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="border border-zinc-800 rounded-lg p-4 hover:border-[#a2bef7] cursor-pointer transition-colors"
                  onClick={() => selectPlan(plan)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-medium text-[#EDEDED]">{plan.name}</h3>
                    <div className="text-[#a2bef7] font-bold">
                      {plan.price} <span className="text-sm font-normal text-[#ededed80]">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-sm text-[#ededed80] flex items-center">
                        <span className="mr-2 text-[#a2bef7]">✓</span> {feature}
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
              <p className="text-[#ededed80] mb-4">Please enter your email address to continue:</p>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#ededed80] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-[#1a1a1a] border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a2bef7] text-[#EDEDED]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-[#EDEDED]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#a2bef7] text-[#121212] rounded-md hover:bg-[#a2bef7]/80 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Discord Connection */}
          {step === "discord" && (
            <div className="space-y-4">
              <p className="text-[#ededed80] mb-4">Connect your Discord account to access exclusive channels:</p>

              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-20 h-20 bg-[#5865F2] rounded-full flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {!discordConnected ? (
                  <button
                    onClick={connectDiscord}
                    className="w-full py-3 bg-[#5865F2] text-white rounded-md hover:bg-[#4752C4] transition-colors flex items-center justify-center"
                  >
                    <span className="mr-2">Connect Discord</span>
                  </button>
                ) : (
                  <div className="text-center">
                    <div className="text-green-500 mb-2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Connected
                    </div>
                    <div className="bg-[#1a1a1a] rounded-md px-4 py-2 mb-4 font-mono text-sm overflow-hidden text-ellipsis text-[#EDEDED]">
                      {discordUsername}
                    </div>
                    <button
                      onClick={proceedToPayment}
                      className="w-full py-3 bg-[#a2bef7] text-[#121212] rounded-md hover:bg-[#a2bef7]/80 transition-colors font-medium"
                    >
                      {loading ? "Processing..." : "Proceed to Payment"}
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={goBack}
                  className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-[#EDEDED]"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    // Skip Discord connection if needed
                    proceedToPayment()
                  }}
                  className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-[#ededed80]"
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
