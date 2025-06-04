"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { BsQuestionLg } from "react-icons/bs"

export default function LicenseKeyLogin() {
  const [licenseKey, setLicenseKey] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const validateResponse = await fetch("/api/auth/license-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey }),
      })
      const validateData = await validateResponse.json()
      if (!validateResponse.ok) throw new Error(validateData.message || "Invalid license key")
      const result = await signIn("license-key", {
        redirect: false,
        licenseKey,
        callbackUrl: "/dashboard",
      })
      if (result?.error) throw new Error(result.error)
      if (result?.ok) {
        router.push("/dashboard")
        router.refresh()
      }
    } catch (error) {
      setError(error.message || "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] relative">
      <div className="relative w-full max-w-[28%] bg-[#1A1A1A] py-8 px-2 sm:px-10 shadow-[0px_0px_15px_-4px_rgba(0,_0,_0,_0.8)] rounded-2xl border border-[var(--accent-text)]/10 flex flex-col items-center gap-4">
        {/* Help icon positioned at the top-right corner of the card */}
        <div className="absolute -top-3 -right-3 z-10">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[var(--accent-text)] shadow-md">
            <BsQuestionLg size={14} className="text-[var(--background)]" />
          </div>
        </div>
        <h2 className="font-medium text-[var(--primary-text)] text-3xl tracking-tight mb-2 w-full text-left">Log in</h2>
        {error && (
          <div className="mb-4 p-2 bg-red-500/10 border border-red-500 text-red-500 rounded text-sm w-full">
            {error}
          </div>
        )}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <input
              id="licenseKey"
              name="licenseKey"
              type="text"
              required
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              className="block w-full bg-[#1E1E1E] px-6 py-2 border border-zinc-800 rounded-lg text-base text-[var(--primary-text)] placeholder-[var(--secondary-text)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] transition"
              placeholder="License Key (e.g. 1234-ABCD)"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/80 text-black font-medium rounded-md text-sm transition-colors disabled:opacity-70 shadow-md"
          >
            {loading ? "Verifying..." : "Log in"}
          </button>
        </form>
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/"
            className="w-full py-2 rounded-md border border-[var(--primary-text)]/10 text-base text-[var(--primary-text)] text-center hover:border-[var(--accent-text)] transition-all"
          >
            Main Website
          </Link>
          <Link
            href="/store"
            className="w-full py-2 rounded-md border border-[var(--primary-text)]/10 text-base text-[var(--primary-text)] text-center hover:border-[var(--accent-text)] transition-all"
          >
            Buy
          </Link>
          <Link
            href="https://discord.gg/resellora"
            target="_blank"
            className="w-full py-2 rounded-md border border-[var(--primary-text)]/10 text-base text-[var(--primary-text)] text-center hover:border-[var(--accent-text)] transition-all"
          >
            Our Discord
          </Link>
        </div>
      </div>
    </div>
  )
}
