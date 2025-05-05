"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { MdEditCalendar } from "react-icons/md"
import { LuMailCheck } from "react-icons/lu"
import { IoTimerOutline } from "react-icons/io5"
import { BiBarChartAlt } from "react-icons/bi"
import OrderForm from "@/components/OrderForm"
import Link from "next/link"
import { useAvailableBrands } from "@/components/dashboard-brands"
import ReceiptHistory from "@/components/dashboard/ReceiptHistory"
import OrderNumberGenerator from "@/components/dashboard/OrderNumberGenerator"
import EmailReceipt from "@/components/dashboard/EmailReceipt"

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
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [currentPlaceholder, setCurrentPlaceholder] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(true)
  const [overlayOpacity, setOverlayOpacity] = useState(1)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const loadingAnimationRef = useRef(null)

  // Get available brands with templates from our template system
  const availableBrands = useAvailableBrands()

  // Placeholder texts for typewriter effect
  const placeholderTexts = [
    "Nike Receipt",
    "Apple Receipt",
    "Acne Studios Receipt",
    "Ebay Receipt",
    "Argos Receipt",
    "GAP Receipt",
    "Stanley Receipt",
  ]

  // Debounce search query to prevent glitchy filtering
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Typewriter effect for placeholder
  useEffect(() => {
    if (!searchQuery) {
      let timeout

      if (isTyping) {
        // Typing effect
        if (currentPlaceholder.length < placeholderTexts[placeholderIndex].length) {
          timeout = setTimeout(() => {
            setCurrentPlaceholder(placeholderTexts[placeholderIndex].substring(0, currentPlaceholder.length + 1))
          }, 100)
        } else {
          // Pause at the end of typing
          timeout = setTimeout(() => {
            setIsTyping(false)
          }, 1000)
        }
      } else {
        // Deleting effect
        if (currentPlaceholder.length > 0) {
          timeout = setTimeout(() => {
            setCurrentPlaceholder(currentPlaceholder.substring(0, currentPlaceholder.length - 1))
          }, 50)
        } else {
          // Move to next placeholder
          setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length)
          setIsTyping(true)
        }
      }

      return () => clearTimeout(timeout)
    }
  }, [currentPlaceholder, isTyping, placeholderIndex, searchQuery])

  // Custom search function
  const getFilteredBrands = () => {
    if (!debouncedSearchQuery) return availableBrands

    // Process the search query to make it more user-friendly
    let processedQuery = debouncedSearchQuery.toLowerCase().trim()

    // Handle common search patterns
    if (processedQuery.includes("receipt")) {
      processedQuery = processedQuery.replace("receipt", "").trim()
    }

    if (processedQuery.includes("for")) {
      processedQuery = processedQuery.replace("for", "").trim()
    }

    // Split query into words for multi-word matching
    const queryWords = processedQuery.split(/\s+/)

    // Filter brands based on what the user is actually typing
    return availableBrands.filter((brand) => {
      const brandName = (brand.displayName || brand.name).toLowerCase()

      // Direct match - if brand name contains the entire query
      if (brandName.includes(processedQuery)) return true

      // Word-by-word matching - if brand name contains any of the query words
      const hasMatchingWord = queryWords.some((word) => word.length > 2 && brandName.includes(word))

      if (hasMatchingWord) return true

      // Simple partial matching - if any part of the brand name matches any part of the query
      // This helps with partial typing and typos
      const brandParts = brandName.split(/[\s-_]+/)
      const queryParts = processedQuery.split(/[\s-_]+/)

      // Check if any brand part matches any query part
      return brandParts.some((brandPart) =>
        queryParts.some((queryPart) => brandPart.includes(queryPart) || queryPart.includes(brandPart)),
      )
    })
  }

  // Filter brands based on debounced search query
  const filteredBrands = getFilteredBrands()

  // Handle authentication and data fetching
  useEffect(() => {
    // If authentication is still loading, wait
    if (status === "loading") return

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
  }, [status, session, dataFetchAttempted, router])

  // Always show loading animation on dashboard load
  useEffect(() => {
    // Reset loading state
    setShowLoadingOverlay(true)
    setOverlayOpacity(1)

    // Always show the loading animation for at least 2.5 seconds
    const animationTimer = setTimeout(() => {
      // Start fading out the overlay
      const fadeOutAnimation = () => {
        setOverlayOpacity((prevOpacity) => {
          const newOpacity = prevOpacity - 0.05
          if (newOpacity <= 0) {
            // When fully transparent, remove the overlay
            setShowLoadingOverlay(false)
            return 0
          }
          return newOpacity
        })
      }

      // Create a smooth fade-out effect
      const fadeInterval = setInterval(fadeOutAnimation, 30)

      // Clean up the interval when component unmounts
      return () => clearInterval(fadeInterval)
    }, 2500)

    return () => clearTimeout(animationTimer)
  }, [])

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
      router.push("/store")
      return
    }

    setSelectedBrand(brand)
    setShowForm(true)
    // Add modal-open class to body
    document.body.classList.add("modal-open")
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setSelectedBrand(null)
    // Remove modal-open class from body
    document.body.classList.remove("modal-open")
  }

  // Function to handle receipt generation
  const handleReceiptGenerated = () => {
    // Show loading overlay
    setShowLoadingOverlay(true)
    setOverlayOpacity(1)

    // Refresh user stats
    fetchUserStats()

    // Show success notification
    setShowSuccessNotification(true)

    // Hide success notification after 5 seconds
    setTimeout(() => {
      setShowSuccessNotification(false)
    }, 5000)

    // Hide loading overlay after animation
    setTimeout(() => {
      // Start fading out the overlay
      const fadeOutAnimation = () => {
        setOverlayOpacity((prevOpacity) => {
          const newOpacity = prevOpacity - 0.05
          if (newOpacity <= 0) {
            // When fully transparent, remove the overlay
            setShowLoadingOverlay(false)
            return 0
          }
          return newOpacity
        })
      }

      // Create a smooth fade-out effect
      const fadeInterval = setInterval(fadeOutAnimation, 30)

      // Clean up the interval after animation completes
      setTimeout(() => {
        clearInterval(fadeInterval)
      }, 1500)
    }, 1000)
  }

  return (
    <>
      <div className="p-6 pb-24">
        {/* Header */}
        <div className="flex flex-col items-start w-full pb-6 gap-5 ">
          <h1 className="tablet:text-4xl text-3xl font-semibold tracking-tight">Receipt Generator</h1>
          <hr className=" w-full text-(--accent-text) " />
        </div>

        {/* Success Notification */}
        {showSuccessNotification && (
          <div className="fixed top-6 right-6 z-50 bg-green-500/90 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-medium">Receipt Generated Successfully!</p>
              <p className="text-sm">Check your email for the receipt.</p>
            </div>
          </div>
        )}

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-xl shadow-[0px_0px_10px_-1px_#000000] overflow-hidden border border-zinc-800">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl tracking-tighter">Available templates</span>
              <div className="w-8 h-8 flex items-center justify-center text-[var(--accent-text)]">
                <MdEditCalendar className="w-6 h-6" />
              </div>
            </div>
            <div className="text-7xl font-bold text-[var(--accent-text)] drop-shadow-[0px_0px_39px_var(--accent-text)]">
              {availableBrands.length}
            </div>
          </div>

          <div className="p-5 rounded-xl shadow-[0px_0px_10px_-1px_#000000] overflow-hidden border border-zinc-800">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl tracking-tighter">Generated receipts</span>
              <div className="w-8 h-8 flex items-center justify-center text-[var(--accent-text)]">
                <LuMailCheck className="w-6 h-6" />
              </div>
            </div>
            <div className="text-7xl font-bold text-[var(--accent-text)] drop-shadow-[0px_0px_39px_var(--accent-text)]">
              {userStats.receiptsGenerated}
            </div>
          </div>

          <div className="p-5 rounded-xl shadow-[0px_0px_10px_-1px_#000000] overflow-hidden border border-zinc-800">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl tracking-tighter">Days left</span>
              <div className="w-8 h-8 flex items-center justify-center text-[var(--accent-text)]">
                <IoTimerOutline className="w-6 h-6" />
              </div>
            </div>
            <div className="text-7xl font-bold text-[var(--accent-text)] drop-shadow-[0px_0px_39px_var(--accent-text)]">
              {userStats.subscriptionStatus === "lifetime" ? "∞" : userStats.daysLeft || "0"}
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="mb-6">
          <div className="relative flex justify-between items-center pb-6">
            <h2 className="tablet:text-4xl text-3xl font-semibold tracking-tight">Status</h2>
            <div className="flex items-center text-[var(--accent-text)]">
              <BiBarChartAlt className="w-6 h-6" />
            </div>
            <hr className="absolute bottom-0 w-full text-zinc-800" />
          </div>
        </div>

        {/* Subscription Notice */}
        {!isSubscribed && (
          <div className="mb-6 p-4 bg-zinc-900/80 rounded-xl border border-[var(--accent-text)]/30">
            <h3 className="text-xl font-semibold mb-2">Subscription Required</h3>
            <p className="mb-4">You need an active subscription to generate receipts. Choose a plan to continue.</p>
            <Link
              href="/store"
              className="inline-block px-4 py-2 bg-[var(--accent-text)] text-black rounded-md hover:bg-[var(--accent-text)]/80 transition-colors"
            >
              View Plans
            </Link>
          </div>
        )}

        {/* Email Receipts Section */}
        <div className="mb-6">
          <EmailReceipt />

          <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 py-9">
            <p className="text-2xl tracking-tighter text-[var(--accent-text)] mb-4 sm:mb-0">
              Some receipts may arrive in the spam folder
            </p>
            <div className="flex items-center w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder={currentPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-60 px-2 py-1 bg-transparent border-b-1 border-[var(--accent-text)] text-[var(--primary-text)] placeholder-[var(--secondary-text)] placeholder:text-2xl focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--accent-text)] hover:text-white transition-colors"
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
            <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
          </div>
        </div>

        {/* Brand Grid */}
        <div className="pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className={`aspect-square bg-[var(--accent-text)] rounded-xl flex items-center justify-center p-3 cursor-pointer hover:scale-95 transition-transform duration-300`}
                onClick={() => handleBrandClick(brand)}
              >
                <div className="w-full h-full flex items-center justify-center flex-row">
                  <img
                    src={`https://res.cloudinary.com/drbew77vx/image/upload/resolora-receipt-logos/${brand.logo}`}
                    className="h-12 max-w-full object-contain"
                    alt={brand.displayName || brand.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `/assets/brand-logos/${brand.logo}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Number Generator */}
        <OrderNumberGenerator />

        {/* Receipt History Section */}
        <ReceiptHistory />
      </div>

      {/* Order Form Modal */}
      {showForm && (
        <OrderForm brand={selectedBrand} onClose={handleCloseForm} onReceiptGenerated={handleReceiptGenerated} />
      )}

      {/* Loading Overlay - positioned above the dashboard */}
      {showLoadingOverlay && (
        <div
          className="fixed inset-0 bg-[var(--background)] flex justify-center items-center z-50"
          style={{ opacity: overlayOpacity, transition: "opacity 0.5s ease-out" }}
          ref={loadingAnimationRef}
        >
          <div className="animate-logo-grow">
            <img
              src="/assets/Logo_1.png"
              alt="Resolora Logo"
              className="w-15 h-15 object-contain"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "/placeholder.svg?height=60&width=60"
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
