"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Typewriter } from "react-simple-typewriter"
import React from 'react'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  const [debugMode, setDebugMode] = useState(false)
  const [debugInfo, setDebugInfo] = useState({})

  // Get the callback URL from the URL parameters
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  useEffect(() => {
    console.log("Login page - Session status:", status)
    console.log("Login page - Session data:", session)
    
    // If user is already authenticated, redirect to dashboard or callback URL
    if (status === "authenticated" && session?.user) {
      console.log("User is authenticated, redirecting to:", callbackUrl)
      router.replace(callbackUrl)
    }

    // Check for registration success message
    const registered = searchParams.get("registered")
    if (registered === "true") {
      setMessage("Registration successful! Please log in.")
    }

    if (debugMode) {
      setDebugInfo({
        sessionStatus: status,
        sessionData: session,
        callbackUrl,
        timestamp: new Date().toISOString()
      })
    }
  }, [status, session, callbackUrl, searchParams, debugMode, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setDebugInfo(prev => ({ ...prev, loginAttempt: new Date().toISOString() }))

    try {
      console.log("Attempting to sign in with:", email)
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/dashboard"
      })

      console.log("Sign in result:", result)
      setDebugInfo(prev => ({ ...prev, signInResult: result }))

      if (result?.error) {
        console.error("Sign in error:", result.error)
        // More detailed error messages
        if (result.error.includes("No user found")) {
          setError("No account found with this email address. Please check your email or sign up.")
        } else if (result.error.includes("Invalid password")) {
          setError("Incorrect password. Please try again or reset your password.")
        } else {
          setError("Invalid email or password. Please check your credentials and try again.")
        }
        setLoading(false)
        return
      }

      // If login was successful, wait for session to update
      if (result?.ok) {
        // Wait for session to be updated
        const session = await useSession()
        if (session?.status === "authenticated") {
          console.log("Sign in successful, redirecting to dashboard")
          window.location.href = "/dashboard"
        }
      }
    } catch (error) {
      console.error("Login error:", error)
      setDebugInfo(prev => ({ ...prev, error: error.message }))
      setError("An unexpected error occurred. Please try again later.")
      setLoading(false)
    }
  }

  // If already authenticated, show loading state
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
      </div>
    )
  }

  return (
    <div className="px-8 sm:px-14 w-full bg-[var(--background)] font-[family-name:var(--font-dm-sans)] flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-2/3 py-8 md:py-16 flex items-center">
        <div className="relative w-full flex flex-col pt-10 md:py-20 gap-10 md:gap-14">
          <div className="w-fit md:max-w-2xl">
            <h1 className="font-medium md:font-semibold text-[var(--primary-text)] tablet:w-[50vw] text-5xl md:text-6xl lg:text-7xl tracking-tighter">
              Step up your{" "}
              <span className="text-[var(--accent-text)] drop-shadow-[0px_0px_10px_var(--accent-text)] inline-block min-w-[120px] h-[1.2em]">
                <Typewriter
                  words={["receipt", "resell", "business"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={95}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>{" "}
              game!
            </h1>
            <p className="mt-6 text-[var(--primary-text)] text-lg md:text-xl tablet:w-[36vw] md:max-w-xl">
              You can access the generator by purchasing a license key through one of the links below.
            </p>
          </div>

          <div className="flex flex-col tablet:w-fit md:flex-row gap-4 tablet:gap-9 border-y-2 border-[var(--primary-text)]/10 py-4">
            <Link
              href="/"
              className="tablet:px-14 px-6 py-4 border border-[var(--primary-text)]/10 rounded-md text-xl text-center text-[var(--primary-text)] hover:bg-[var(--accent-text)]/10 transition-all shadow-[0px_0px_10px_-1px_#000000]"
            >
              Main website
            </Link>
            <Link
              href="/store"
              className="tablet:px-14 px-6 py-4 border border-[var(--primary-text)]/10 rounded-md text-xl text-center text-[var(--primary-text)] hover:bg-[var(--accent-text)]/10 transition-all shadow-[0px_0px_10px_-1px_#000000]"
            >
              Instant access
            </Link>
          </div>

          <div className="relative flex md:flex-row flex-col md:gap-7 gap-4 text-2xl md:text-3xl lg:text-4xl font-light text-[var(--primary-text)] py-4 border-b-2 border-(--accent-text) w-fit">
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
        <div className="w-full max-w-md bg-[var(--background)] py-8 px-4 sm:px-6 shadow-[inset_0px_0px_15px_2px_rgba(71,_85,_105,_0.08)] rounded-lg border border-[var(--accent-text)]/10">
          <div className="flex flex-col items-center w-full mb-8">
            <h2 className="font-semibold text-[var(--primary-text)] text-4xl md:text-5xl tracking-tighter text-center">
              Log in
            </h2>
            <p className="mt-2 text-center text-sm text-[var(--secondary-text)]">
              Or{" "}
              <Link href="/signup" className="font-medium text-[var(--accent-text)] hover:text-[var(--accent-text)]/80">
                create an account
              </Link>
            </p>
          </div>

          {message && (
            <div className="mb-4 p-2 bg-green-500/10 border border-green-500 text-green-500 rounded text-sm">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 p-2 bg-red-500/10 border border-red-500 text-red-500 rounded text-sm">{error}</div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--secondary-text)]">
                Email address
              </label>
              <div className="relative w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[var(--secondary-text)]/70 placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[var(--background)]"

                  placeholder="Enter your email address"
                />
                {email && (
                  <button 
                    onClick={() => setEmail("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--accent-text)] hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--secondary-text)]">
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[var(--secondary-text)]/70 placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[var(--background)]"

                  placeholder="Enter your password"
                />
                {password && (
                  <button 
                    onClick={() => setPassword("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--accent-text)] hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-[var(--secondary-text)]/80">
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
