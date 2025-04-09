"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { Home, Mail, RefreshCw, LogOut } from "lucide-react"
import { MdEditCalendar } from "react-icons/md";
import { LuMailCheck } from "react-icons/lu";
import { IoTimerOutline } from "react-icons/io5";
import { PiPulse } from "react-icons/pi";
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
  const [dataFetchAttempted, setDataFetchAttempted] = useState(false)

  // Handle authentication and data fetching
  useEffect(() => {
    // If authentication is still loading, wait
    if (status === "loading") return

    // If not authenticated, let middleware handle the redirect
    if (status === "unauthenticated") {
      return
    }

    // If authenticated and we haven't tried to fetch data yet
    if (status === "authenticated" && !dataFetchAttempted) {
      setDataFetchAttempted(true)

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
    }
  }, [status, session, dataFetchAttempted])

  const refreshSession = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/auth/session?update=true")

      if (!response.ok) {
        throw new Error(`Failed to refresh session: ${response.status}`)
      }

      const data = await response.json()

      if (data.user) {
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

      if (!response.ok) {
        throw new Error(`Failed to fetch user stats: ${response.status}`)
      }

      const data = await response.json()

      setUserStats({
        receiptsGenerated: data.receiptsGenerated || 0,
        subscriptionStatus: data.subscriptionStatus || "Not subscribed",
        daysLeft: data.daysLeft || 0,
      })

      // Update subscription status based on user stats
      if (data.subscriptionStatus === "lifetime" || data.subscriptionStatus === "monthly") {
        setIsSubscribed(true)
      } else {
        setIsSubscribed(false)
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
    { id: 21, name: "vivienne", logo: "vivienne.png" },
    { id: 22, name: "balenciaga", logo: "balenciaga.png" },
    { id: 23, name: "dior", logo: "dior.png" },
    { id: 24, name: "farfetch", logo: "farfetch.png" },
    { id: 25, name: "lvr", logo: "lvr.png" },
    { id: 26, name: "rick_owens", logo: "rick_owens.png" },
    { id: 27, name: "supreme", logo: "supreme.png" },
    { id: 28, name: "syna", logo: "syna.png" },
    { id: 29, name: "grailed", logo: "grailed.png" },
    { id: 30, name: "denim_tear", logo: "denim_tears.png" },
    { id: 31, name: "dsm", logo: "dsm.png" },
    { id: 32, name: "end", logo: "end.png" },
    { id: 33, name: "flight_club", logo: "flight_club.png" },
    { id: 34, name: "frasers", logo: "frasers.png" },
    { id: 35, name: "selfridges", logo: "selfridges.png" },
    { id: 36, name: "stadium", logo: "stadium.png" },
    { id: 37, name: "mrporter", logo: "mrporter.png" },
    { id: 38, name: "harrods", logo: "harrods.png" },
    { id: 39, name: "farfetchtwo", logo: "farfetchtwo.png" },
    { id: 40, name: "gallerydept", logo: "gallerydept.png" },
    { id: 41, name: "de_bijenkorf", logo: "de_bijenkorf.png" },
    { id: 42, name: "goat", logo: "goat.png" },
    { id: 43, name: "icon", logo: "icon.png" },
    { id: 44, name: "jd", logo: "jd.png" },
    { id: 45, name: "johnlewis", logo: "johnlewis.png" },
    { id: 46, name: "pacsun", logo: "pacsun.png" },
    { id: 47, name: "sns", logo: "sns.png" },
    { id: 48, name: "spoder", logo: "sp5der.png" },
    { id: 49, name: "ssense", logo: "ssense.png" },
    { id: 50, name: "zalando", logo: "zalando.png" },
    { id: 51, name: "goyard", logo: "goyard.png" },
    { id: 52, name: "nordstrom", logo: "nordstrom.png" },
    { id: 53, name: "snkrs", logo: "snkrs.png" },
  ]


  // Show loading state while checking authentication
  if (status === "loading" || (status === "authenticated" && isLoading && !dataFetchAttempted)) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
      </div>
    )
  }

  // If not authenticated, don't render anything (middleware will redirect)
  if (status === "unauthenticated") {
    return null
  }

  return (
    <div className="flex text-white min-h-screen">
      {/* Sidebar - hidden on mobile, visible on md and up */}
      <div className="hidden md:flex w-16 flex-col items-center py-6 border-r border-zinc-800">
        <div className="flex flex-col items-center h-full">
          <Link href="/dashboard" className="p-3 rounded-xl hover:bg-[var(--accent-text)]/10 transition-colors">
            <Home className="w-5 h-5 text-[var(--accent-text)]" />
          </Link>
          
          {/* Spacer */}
          <div className="flex-grow"></div>
          
          {/* Logout Button */}
          <button 
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="p-3 rounded-xl hover:bg-[var(--accent-text)]/10 transition-colors mt-auto"
          >
            <LogOut className="w-5 h-5 text-[var(--accent-text)]" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 ">
        {/* Header */}
        <div className="p-6">
          <div className="relative flex justify-between items-center pb-6">
            <h1 className="text-4xl font-semibold">Overview</h1>
            <div className="flex items-center">
              <RefreshCw
                className="w-5 h-5 text-[var(--accent-text)] cursor-pointer hover:rotate-180 transition-transform duration-300"
                onClick={() => fetchUserStats()}
              />
            </div>
            <hr className="absolute bottom-0 left-0 right-0 text-(--accent-text)" />
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className=" p-5 rounded-xl shadow-[0px_0px_10px_-1px_#000000] border border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-normal">Available templates</span>
              <div className="w-8 h-8 flex items-center justify-center text-[var(--accent-text)]">
                <MdEditCalendar className=" w-6 h-6" />
              </div>
            </div>
            <div className="text-6xl font-bold text-[var(--accent-text)]">{brands.length}</div>
          </div>

          <div className=" p-5 rounded-xl shadow-[0px_0px_10px_-1px_#000000] border border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-normal">Generated receipts</span>
              <div className="w-8 h-8 flex items-center justify-center text-[var(--accent-text)]">
                <LuMailCheck className=" w-6 h-6" />

              </div>
            </div>
            <div className="text-6xl font-bold text-[var(--accent-text)]">{userStats.receiptsGenerated}</div>
          </div>

          <div className=" p-5 rounded-xl shadow-[0px_0px_10px_-1px_#000000] border border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-normal">Days left</span>
              <div className="w-8 h-8 flex items-center justify-center text-[var(--accent-text)]">
                <IoTimerOutline className=" w-6 h-6" />

              </div>
            </div>
            <div className="text-6xl font-bold text-[var(--accent-text)]">
              {userStats.subscriptionStatus === "lifetime" ? "∞" : userStats.daysLeft || "0"}
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="px-6 mb-6">
          <div className="relative flex justify-between items-center pb-6">
            <h2 className="text-4xl font-semibold">Status</h2>
            <div className="flex items-center text-[var(--accent-text)]">
              <PiPulse className="w-6 h-6" />
            </div>
            <hr className="absolute bottom-0 w-full text-zinc-800" />
          </div>
        </div>

        {/* Subscription Notice */}
        {!isSubscribed && (
          <div className="mx-6 mb-6 p-4 bg-zinc-900/80 rounded-xl border border-[var(--accent-text)]/30">
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

        {/* Email Receipts Section */}
        <div className="px-6 mb-6">
          <div className="relative flex justify-between items-center pb-6">
            <h2 className="text-4xl font-semibold">Email Receipts</h2>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-[var(--accent-text)]" />
            </div>
            <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-md font-normal text-[var(--accent-text)]">Some receipts may arrive in the spam folder</p>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8  xl:grid-cols-9 gap-3">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className={`aspect-square bg-[var(--accent-text)] rounded-xl flex items-center justify-center p-3 cursor-pointer hover:bg-[var(--accent-text)]/80 transition-colors`}
                onClick={() => handleBrandClick(brand)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={`https://res.cloudinary.com/drbew77vx/image/upload/v1743604967/resolora-receipt-logos/${brand.logo}`}
                    className="h-12 max-w-full object-contain"
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

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center p-4 z-50">
          <OrderForm brand={selectedBrand} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  )
}
