"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import React from 'react'

export const metadata = {
  title: "RESELLORA - Create Account",
  description: "Join now and launch your reselling journey with us!",
};

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get the callback URL from the URL parameters
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      // Auto login after successful registration with better error handling
      try {
        const signInResult = await signIn("credentials", {
          redirect: false,
          email,
          password,
          callbackUrl,
        })

        if (signInResult?.error) {
          console.error("Auto-login failed:", signInResult.error)
          router.push("/login?registered=true")
        } else {
          // If login was successful, manually redirect
          if (signInResult?.ok) {
            console.log("Auto-login successful, redirecting to:", callbackUrl)
            // Use window.location.href for a hard redirect
            window.location.href = callbackUrl
          }
        }
      } catch (signInError) {
        console.error("Sign-in error:", signInError)
        router.push("/login?registered=true")
      }
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="bg-[var(--background)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full flex flex-col items-center w-full">
        <h2 className="tablet:font-medium font-semibold text-[var(--primary-text)] tablet:w-full text-5xl tablet:text-5xl tracking-tighter text-center">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--secondary-text)] max-w">
          Or{" "}
          <Link href="/login" className="font-medium text-[var(--accent-text)] hover:text-[var(--accent-text)]/80">
            sign in to your account
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[var(--background)] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-2 bg-red-500/10 border border-red-500 text-red-500 rounded text-sm">{error}</div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--secondary-text)]">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[var(--secondary-text)]/70 placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[var(--background)]"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--secondary-text)]">
                Email address
              </label>
              <div className="mt-1">
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
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--secondary-text)]">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[var(--secondary-text)]/70 placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[var(--background)]"
                  placeholder="Create a password"
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-[var(--secondary-text)]">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[var(--secondary-text)]/70 placeholder-[var(--secondary-text)]/70 text-[var(--primary-text)] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[var(--background)]"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
              >
                {loading ? "Creating account..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
