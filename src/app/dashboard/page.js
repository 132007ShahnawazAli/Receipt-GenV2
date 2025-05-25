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
import ReceiptCategories from "@/components/dashboard/ReceiptCategories"
import Modal from '@/components/Modal';
import { toast } from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { Hourglass, LogOut } from "lucide-react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showForm, setShowForm] = useState(false)
  const [showTemplateSelect, setShowTemplateSelect] = useState(false);
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
  const [showLogoAnimation, setShowLogoAnimation] = useState(false)
  const loadingAnimationRef = useRef(null)
  const [allDataLoaded, setAllDataLoaded] = useState(false)
  const [showNotice, setShowNotice] = useState(true);

  // Get available brands with templates from our template system
  const { brands: availableBrands, isLoading: brandsLoading, error: brandsError } = useAvailableBrands();

  // Handle brand click: check subscription, then open form with selected template
  const handleBrandClick = async (brand) => {
    if (!isSubscribed) {
      router.push("/store");
      return;
    }

    try {
      // Fetch the full template data
      const response = await fetch(`/api/templates/${brand._id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch template');
      }
      const templateData = await response.json();

      setSelectedBrand(brand);
      setSelectedTemplate(templateData);
      setShowForm(true);
    } catch (error) {
      console.error('Error fetching template:', error);
      toast.error('Failed to load template. Please try again.');
    }
  };

  // Handle template selection from modal
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setShowTemplateSelect(false);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedTemplate(null);
    setSelectedBrand(null);
    document.body.classList.remove("modal-open");
  };

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
    // Defensive: always return an array
    if (!Array.isArray(availableBrands)) return []
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
      const hasMatchingWord = queryWords.some(
        (word) => word.length > 2 && brandName.includes(word)
      )

      if (hasMatchingWord) return true

      // Simple partial matching - if any part of the brand name matches any part of the query
      // This helps with partial typing and typos
      const brandParts = brandName.split(/[\s-_]+/)
      const queryParts = processedQuery.split(/[\s-_]+/)

      // Check if any brand part matches any query part
      return brandParts.some((brandPart) =>
        queryParts.some(
          (queryPart) =>
            brandPart.includes(queryPart) || queryPart.includes(brandPart)
        )
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

      // Fetch all required data
      Promise.all([
        fetchUserStats(),
        // Add any other API calls here that need to complete before showing dashboard
      ]).then(() => {
        setAllDataLoaded(true)
        // Show logo animation after data is loaded
        setShowLogoAnimation(true)
      }).catch((error) => {
        console.error("Error loading dashboard data:", error)
        toast.error("Failed to load some dashboard data")
      })
    }
  }, [status, session, dataFetchAttempted, router])

  // Handle loading overlay and animations
  useEffect(() => {
    // Reset loading state
    setShowLoadingOverlay(true)
    setOverlayOpacity(1)
    setShowLogoAnimation(false)

    // Only start fade out when all data is loaded and logo animation is shown
    if (allDataLoaded && !brandsLoading) {
      // Show logo animation first
      setShowLogoAnimation(true)

      // After logo animation completes, start fading out
      const timer = setTimeout(() => {
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
      }, 1200) // Wait for logo animation to complete

      return () => clearTimeout(timer)
    }
  }, [allDataLoaded, brandsLoading])

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
      throw error // Propagate error to Promise.all
    } finally {
      setIsLoading(false)
    }
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

  // Add sign out handler
  const handleSignOut = async () => {
    try {
      const { signOut } = await import("next-auth/react");
      await signOut({ redirect: false });
      router.push("/dashboard-login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <div className="p-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between w-full pb-3 ">
          <h1 className="tablet:text-3xl text-2xl font-normal tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-3">
            {userStats.subscriptionStatus === "monthly" && userStats.daysLeft && userStats.daysLeft !== "∞" && (
              <span className="px-4 py-1 rounded bg-yellow-400 text-(--background) text-sm font-semibold flex items-center gap-2"> License key expires in {userStats.daysLeft} days!
              </span>
            )}
            <button
              onClick={handleSignOut}
              className="px-2 py-1 rounded bg-(--accent-text) text-(--background) text-sm font-semibold flex items-center gap-2 hover:scale-95 transition-transform cursor-pointer"
            >
              Log out
            </button>
          </div>
        </div>

        {/* Notice Bar */}
        {showNotice && (
          <div className="flex items-center justify-between bg-(--background-secondary) border border-zinc-800 rounded-xl px-6 py-3 mb-6">
            <span className="text-base font-semibold text-[var(--primary-text)]">Some receipts may arrive in the spam folder</span>
            <button
              className="ml-4 text-[var(--accent-text)] text-xl hover:scale-125 transition-transform"
              onClick={() => setShowNotice(false)}
              aria-label="Dismiss notice"
            >
              < IoClose />

            </button>
          </div>
        )}

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
          <div className="p-4 rounded-xl overflow-hidden border border-zinc-800 bg-[#1A1A1A]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-md font-medium tracking-tight text-(--secondary-text)">Available templates</span>
            </div>
            <div className="text-2xl font-medium text-[var(--primary-text)]">
              {brandsLoading ? '0' : availableBrands.length}
            </div>
          </div>

          <div className="p-4 rounded-xl overflow-hidden border border-zinc-800 bg-[#1A1A1A]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-md font-medium tracking-tight text-(--secondary-text)">Generated receipts</span>
            </div>
            <div className="text-2xl font-medium text-[var(--primary-text)]">
              {userStats.receiptsGenerated}
            </div>
          </div>

          <div className="p-4 rounded-xl overflow-hidden border border-zinc-800 bg-[#1A1A1A]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-md font-medium tracking-tight text-(--secondary-text)">Days left</span>
            </div>
            <div className="text-2xl font-medium text-[var(--primary-text)]">
              {userStats.subscriptionStatus === "lifetime" ? "∞" : userStats.daysLeft || "0"}
            </div>
          </div>
        </div>

        {/* Status Section */}

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

        {/* Receipt History Section */}
        <ReceiptHistory />

        {/* Email Receipts Section */}
        <div className="mb-6">
          <EmailReceipt onBrandClick={handleBrandClick} />
        </div>

        {/* Template Select Modal */}
        <Modal isOpen={showTemplateSelect} onClose={() => setShowTemplateSelect(false)} title={selectedBrand ? `Select Template for ${selectedBrand.displayName || selectedBrand.name}` : 'Select Template'}>
          <div className="space-y-4">
            {selectedBrand && selectedBrand.templates && selectedBrand.templates.map((template) => (
              <button
                key={template._id || template.id}
                className="w-full px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center justify-between text-left"
                onClick={() => handleTemplateSelect(template)}
              >
                <span className="font-medium text-gray-900">{template.name}</span>
                <span className="text-xs text-gray-500">/{template.slug}</span>
              </button>
            ))}
          </div>
        </Modal>

        {/* Order Number Generator */}
        <OrderNumberGenerator />

      </div>

      {/* Order Form Modal */}
      {showForm && selectedTemplate && (
        <OrderForm template={selectedTemplate} brand={selectedBrand} onClose={handleCloseForm} onReceiptGenerated={handleReceiptGenerated} />
      )}

      {/* Loading Overlay - positioned above the dashboard */}
      {showLoadingOverlay && (
        <div
          className="fixed inset-0 bg-[var(--background)] flex justify-center items-center z-50"
          style={{ opacity: overlayOpacity, transition: "opacity 0.3s ease-out" }}
          ref={loadingAnimationRef}
        >
          {!allDataLoaded ? (
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
              <p className="text-[var(--accent-text)]">Loading dashboard data...</p>
            </div>
          ) : showLogoAnimation ? (
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
          ) : null}
        </div>
      )}
    </>
  )
}
