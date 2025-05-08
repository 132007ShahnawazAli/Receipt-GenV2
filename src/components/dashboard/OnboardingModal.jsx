"use client"

import { useState, useRef } from "react"
import { useSession } from "next-auth/react"
import { ChevronRight, CheckCircle } from "lucide-react"

export default function OnboardingModal({ onComplete }) {
  const { data: session } = useSession()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    username: "",
    productInterests: "",
    experience: "",
    sellingPlatforms: "",
    goal: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const videoRef = useRef(null)

  const questions = [
    {
      id: "username",
      question: "What name would you like to be recognised as?",
      placeholder: "Enter your name",
      type: "text",
    },
    {
      id: "productInterests",
      question: "What type of products are you most interested in selling?",
      placeholder: "e.g. Clothing, Electronics, Collectibles",
      type: "text",
    },
    {
      id: "experience",
      question: "How much experience do you have with reselling?",
      placeholder: "e.g. Beginner, Intermediate, Expert",
      type: "text",
    },
    {
      id: "sellingPlatforms",
      question: "Where do you plan to sell your products?",
      placeholder: "e.g. eBay, Amazon, Instagram",
      type: "text",
    },
    {
      id: "goal",
      question: "What's your main goal as a reseller?",
      placeholder: "e.g. Side income, Full-time business",
      type: "text",
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user types
    if (error) setError("")
  }

  const handleNext = () => {
    const currentField = questions[step - 1]?.id

    if (step > 0 && currentField && !formData[currentField].trim()) {
      setError("This field is required")
      return
    }

    setError("")
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      handleSubmit()
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNext()
    }
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      setError("")

      const response = await fetch("/api/user/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Something went wrong")
      }

      // Call the onComplete callback to refresh the session
      if (onComplete) {
        onComplete()
      }
    } catch (err) {
      console.error("Onboarding error:", err)
      setError(err.message || "Failed to save your information. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const skipVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-lg bg-[var(--background)] rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[var(--accent-text)]">Welcome to Receipt Generator</h2>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="text-gray-400 hover:text-white transition-colors">
              Back
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 0 ? (
            <div className="flex flex-col items-center">
              <div className="w-full aspect-video bg-zinc-900 rounded-lg mb-4 flex items-center justify-center">
                <video ref={videoRef} className="w-full h-full rounded-lg" controls poster="/assets/Logo_1.png">
                  <source src="https://res.cloudinary.com/dslijz8pw/video/upload/v1745825163/8_w8sdks.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center mb-4">
                Welcome to Receipt Generator! Watch this quick intro video to get started.
              </p>
              <button
                onClick={() => {
                  skipVideo()
                  setStep(1)
                }}
                className="w-full px-4 py-3 bg-[var(--accent-text)] text-zinc-900 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Continue to Setup</span>
                <ChevronRight size={16} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">{questions[step - 1].question}</h3>
                <input
                  type={questions[step - 1].type}
                  name={questions[step - 1].id}
                  value={formData[questions[step - 1].id]}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder={questions[step - 1].placeholder}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-[var(--accent-text)] transition-colors"
                  autoFocus
                />
                {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index + 1 < step
                          ? "bg-[var(--accent-text)]"
                          : index + 1 === step
                            ? "bg-[var(--accent-text)]"
                            : "bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-[var(--accent-text)] text-zinc-900 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {step < questions.length ? (
                    <>
                      <span>Next</span>
                      <ChevronRight size={16} />
                    </>
                  ) : (
                    <>
                      <span>Complete</span>
                      <CheckCircle size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
