"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { AnimatedText } from "@/components/ScrollProvider"
import { Check, Copy, ArrowRight } from "lucide-react"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const licenseKey = searchParams.get("licenseKey")
  const type = searchParams.get("type")

  useEffect(() => {
    if (!licenseKey) {
      router.push("/store")
    }
  }, [licenseKey, router])

  const copyToClipboard = () => {
    if (licenseKey) {
      navigator.clipboard.writeText(licenseKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!licenseKey) {
    return null
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--primary-text)] flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-zinc-900/50 rounded-xl p-8 border border-[var(--accent-text)]/20">
        <AnimatedText>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Payment Successful!</h1>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-center text-[var(--secondary-text)] mb-8">
            Thank you for your purchase. Your {type === "lifetime" ? "lifetime" : "monthly"} license has been activated.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <div className="mb-8">
            <p className="text-sm text-[var(--secondary-text)] mb-2">Your License Key:</p>
            <div className="flex items-center">
              <div className="bg-zinc-800 rounded-l-md p-3 flex-1 font-mono text-[var(--accent-text)] overflow-x-auto">
                {licenseKey}
              </div>
              <button
                onClick={copyToClipboard}
                className="bg-zinc-700 hover:bg-zinc-600 rounded-r-md p-3 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="bg-zinc-800/50 rounded-md p-4 mb-8 border border-[var(--accent-text)]/10">
            <h2 className="font-semibold mb-2">Important Information:</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-[var(--secondary-text)]">
              <li>Save your license key in a secure location.</li>
              <li>You can use this key to log in to the dashboard.</li>
              <li>Your Discord account has been granted access to exclusive channels.</li>
              {type === "monthly" && <li>Your subscription will automatically renew every month.</li>}
            </ul>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard-login"
              className="flex items-center justify-center gap-2 bg-[var(--accent-text)] text-black py-3 px-6 rounded-md hover:bg-[var(--accent-text)]/80 transition-colors"
            >
              Access Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 border border-[var(--accent-text)]/30 py-3 px-6 rounded-md hover:bg-[var(--accent-text)]/10 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </AnimatedText>
      </div>
    </div>
  )
}
