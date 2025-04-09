"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Home, Mail, RefreshCw } from "lucide-react"
import OrderForm from "@/components/OrderForm"
import Link from "next/link"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [userStats, setUserStats] = useState({
    receiptsGenerated: 0,
    subscriptionStatus: "Not subscribed",
    daysLeft: 0,
  })
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    } else if (status === "authenticated") {
      // Check if user has active subscription from session
      if (session?.user?.hasActiveSubscription) {
        setIsSubscribed(true)
      }

      fetchUserStats()

      // Check URL parameters for payment success
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get("payment") === "success") {
        // Force refresh user session to get updated subscription status
        refreshSession()
      }
    } else {
      setIsLoading(false)
    }
  }, [status, router, session])

  const refreshSession = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/auth/session?update=true")
      const data = await response.json()

      if (response.ok && data.user) {
        setIsSubscribed(data.user.hasActiveSubscription)
        // Refresh the page stats without full reload
        fetchUserStats()

        // Remove the query parameter without page reload
        const url = new URL(window.location.href)
        url.searchParams.delete("payment")
        window.history.replaceState({}, document.title, url.toString())
      }
    } catch (error) {
      console.error("Failed to refresh session:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchUserStats = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/user/stats")
      const data = await response.json()

      if (response.ok) {
        setUserStats({
          receiptsGenerated: data.receiptsGenerated || 0,
          subscriptionStatus: data.subscriptionStatus || "Not subscribed",
          daysLeft: data.daysLeft || 0,
        })

        // Update subscription status based on user stats
        if (data.subscriptionStatus === "lifetime" || data.subscriptionStatus === "monthly") {
          setIsSubscribed(true)
        }
      }
    } catch (error) {
      console.error("Failed to fetch user stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBrandClick = (brand) => {
    if (!isSubscribed) {
      router.push("/pricing")
      return
    }

    setSelectedBrand(brand)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  const brands = [
    { id: 1, name: "apple", logo: "apple.png" },
    { id: 2, name: "argos", logo: "argos.png" },
    { id: 3, name: "bpm", logo: "bpm.png" },
    { id: 4, name: "dyson", logo: "dyson.png" },
    { id: 5, name: "gap", logo: "gap.png" },
    { id: 6, name: "lv", logo: "lv.png" },
    { id: 7, name: "nike", logo: "nike.png" },
    { id: 8, name: "sephora", logo: "sephora.png" },
    { id: 9, name: "stanley", logo: "stanley.png" },
    { id: 10, name: "ysl", logo: "ysl.png" },
    { id: 11, name: "currys", logo: "currys.png" },
    { id: 12, name: "ebay", logo: "ebay.png" },
    { id: 13, name: "moncler", logo: "moncler.png" },
    { id: 14, name: "flannels", logo: "flannels.png" },
    { id: 15, name: "hermes", logo: "hermes.png" },
    { id: 16, name: "prada", logo: "prada.png" },
    { id: 17, name: "arcteryx", logo: "arcteryx.png" },
    { id: 18, name: "bestbuy", logo: "bestbuy.png" },
    { id: 19, name: "canada_go", logo: "canada_goose.png" },
    { id: 20, name: "corteiz", logo: "corteiz.png" },
  ]

  if (status === "loading" || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
      </div>
    )
  }

  return (
    <div className="flex bg-[var(--background)] text-white">
      <div className="w-16 flex flex-col items-center py-6 border-r border-zinc-800">
        <div className="flex flex-col items-center space-y-8">
          <Link href="/dashboard">
            <Home className="w-5 h-5 text-[var(--accent-text)]" />
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-6 border-b border-zinc-800">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <RefreshCw
              className="w-5 h-5 text-[var(--accent-text)] cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() => fetchUserStats()}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Available templates</span>
            </div>
            <div className="text-6xl font-bold text-[var(--accent-text)]">{brands.length}</div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Generated receipts</span>
            </div>
            <div className="text-6xl font-bold text-[var(--accent-text)]">{userStats.receiptsGenerated}</div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Days left</span>
            </div>
            <div className="text-6xl font-bold text-[var(--accent-text)]">
              {userStats.subscriptionStatus === "lifetime" ? "∞" : userStats.daysLeft || "0"}
            </div>
          </div>
        </div>

        {!isSubscribed && (
          <div className="mx-6 mb-6 p-4 bg-zinc-900 rounded-lg border border-[var(--accent-text)]/30">
            <h3 className="text-xl font-semibold mb-2">Subscription Required</h3>
            <p className="mb-4">You need an active subscription to generate receipts. Choose a plan to continue.</p>
            <Link
              href="/pricing"
              className="inline-block px-4 py-2 bg-[var(--accent-text)] text-black rounded-md hover:bg-[var(--accent-text)]/80 transition-colors"
            >
              View Plans
            </Link>
          </div>
        )}

        <div className="p-6">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl">Email Receipts</h3>
              <Mail className="w-5 h-5 text-[var(--accent-text)]" />
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-[var(--accent-text)]">Some receipts may arrive in the spam folder</p>
              <p className="text-sm">StockX R</p>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className={`aspect-square ${
                  isSubscribed ? "bg-[var(--accent-text)]" : "bg-[var(--accent-text)]/50"
                } rounded-lg flex items-center justify-center p-3 cursor-pointer hover:bg-[var(--accent-text)]/80 transition-colors`}
                onClick={() => handleBrandClick(brand)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={`https://res.cloudinary.com/drbew77vx/image/upload/v1743604967/resolora-receipt-logos/${brand.logo}`}
                    className="h-8 max-w-full object-contain"
                    alt={brand.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "/placeholder.svg?height=32&width=32"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center p-4 z-50">
          <OrderForm brand={selectedBrand} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  )
}
