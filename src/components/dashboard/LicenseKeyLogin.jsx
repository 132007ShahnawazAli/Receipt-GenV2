"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { Typewriter } from "react-simple-typewriter"
import CheckoutModal from "@/components/checkout/CheckoutModal"
import { RiKey2Line } from "react-icons/ri";

export default function LicenseKeyLogin() {
  const [licenseKey, setLicenseKey] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // First validate the license key with our API
      const validateResponse = await fetch("/api/auth/license-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ licenseKey }),
      })

      const validateData = await validateResponse.json()

      if (!validateResponse.ok) {
        throw new Error(validateData.message || "Invalid license key")
      }

      // If validation is successful, sign in with NextAuth
      const result = await signIn("license-key", {
        redirect: false,
        licenseKey,
        callbackUrl: "/dashboard",
      })

      if (result?.error) {
        throw new Error(result.error)
      }

      // If login was successful, redirect to dashboard
      if (result?.ok) {
        router.push("/dashboard")
        router.refresh() // Force a refresh to ensure the session is updated
      }
    } catch (error) {
      console.error("License login error:", error)
      setError(error.message || "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-8 sm:px-14 w-full bg-[var(--background)] font-[family-name:var(--font-dm-sans)] flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-2/3 py-8 md:py-16 flex items-center">
        <div className="relative w-full flex flex-col pt-10 md:py-20 gap-10 md:gap-14">
          <div className="w-fit md:max-w-2xl">
            <h1 className="font-medium md:font-semibold text-[var(--primary-text)] tablet:w-[50vw] text-5xl md:text-6xl lg:text-7xl tracking-tighter">
              Access your{" "} <br />
              <span className="text-[var(--accent-text)] drop-shadow-[0px_0px_10px_var(--accent-text)] inline-block min-w-[120px] h-[1.2em]">
                <Typewriter
                  words={["dashboard", "templates", "receipts"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={95}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>{" "}
              now!
            </h1>
            <p className="mt-6 text-[var(--primary-text)] text-lg md:text-xl tablet:w-[36vw] md:max-w-xl">
              Enter your license key to access the receipt generator dashboard.
            </p>
          </div>

          <div className="flex flex-col tablet:w-fit md:flex-row gap-4 tablet:gap-9 border-y-2 border-[var(--primary-text)]/10 py-4">
            <Link
              href="/"
              className="tablet:px-14 px-6 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl text-center text-[var(--primary-text)] hover:border-[var(--accent-text)] transition-all shadow-[0px_0px_10px_-1px_#000000]"
            >
              Main website
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="tablet:px-14 px-6 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl text-center text-[var(--primary-text)] hover:border-[var(--accent-text)] transition-all shadow-[0px_0px_10px_-1px_#000000] cursor-pointer"
            >
              Instant access
            </button>
          </div>

          <div className="relative flex md:flex-row flex-col md:gap-14 gap-6 text-lg md:text-xl lg:text-2xl font-light text-[var(--primary-text)] py-4 border-b-2 border-(--accent-text) w-fit">
            <div>
              <p>
                <span className="font-bold text-[var(--accent-text)]">75+</span> templates
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-[var(--accent-text)]">1,000+</span> users
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-[var(--accent-text)]">#1</span> on the market
              </p>
            </div>
            <hr className="absolute bottom-0 left-0 w-full border-t-[1px] border-[var(--accent-text)] -z-10" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex items-center justify-center">
        <div className="w-full max-w-sm bg-[var(--background)] py-8 px-6 sm:px-7 shadow-[inset_0px_0px_15px_2px_rgba(71,_85,_105,_0.08)] rounded-lg border border-[var(--accent-text)]/10">
          <div className="flex flex-col  w-full mb-8">
            <h2 className="font-semibold text-[var(--primary-text)] text-4xl md:text-5xl tracking-tighter text-left">
              Log in
            </h2>
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-500/10 border border-red-500 text-red-500 rounded text-sm">{error}</div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="licenseKey" className="flex w-full justify-between text-2xl mb-3 font-medium text-[var(--primary-text)]">
                <span>License Key</span> <RiKey2Line className="text-(--accent-text)"/>
              </label>
              <div className="relative w-full">
                <input
                  id="licenseKey"
                  name="licenseKey"
                  type="text"
                  required
                  value={licenseKey}
                  onChange={(e) => setLicenseKey(e.target.value)}
                  className="appearance-none relative block w-full placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-(--accent-text) focus:border-(--accent-text) focus:z-10 bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl shadow-[0px_0px_10px_-1px_#000000]"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                />
                {licenseKey && (
                  <button
                    type="button"
                    onClick={() => setLicenseKey("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--accent-text)] hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="appearance-none relative block w-full placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-(--accent-text) focus:border-(--accent-text) hover:border-(--accent-text) focus:z-10 bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl shadow-[0px_0px_10px_-1px_#000000] transition-all duration-300"
              >
                {loading ? "Verifying..." : "Access Dashboard"}
              </button>
            </div>

            <div>
              <Link
                href={"/store"}
                disabled={loading}
                className="appearance-none relative block w-full placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-(--accent-text) focus:border-(--accent-text) hover:border-(--accent-text) focus:z-10 bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl shadow-[0px_0px_10px_-1px_#000000] text-center transition-all duration-300"
              >
                Buy
              </Link>
            </div>
            <div>
              <Link
                href={"https://t.me/resellora"}
                disabled={loading}
                className="appearance-none relative block w-full placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-(--accent-text) focus:border-(--accent-text) hover:border-(--accent-text) focus:z-10 bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl shadow-[0px_0px_10px_-1px_#000000] text-center transition-all duration-300"
              >
                Our telegram
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
