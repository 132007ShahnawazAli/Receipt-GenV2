"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Home, Printer, Trophy, Crown, Menu, X, ChevronLeft, ChevronRight, Hourglass } from "lucide-react"
import DashboardLoading from "@/components/dashboard/DashboardLoading"
import OnboardingModal from "@/components/dashboard/OnboardingModal"
import { FaDiscord } from "react-icons/fa"

import Image from "next/image"

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session, status, update } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [username, setUsername] = useState("User")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [planInfo, setPlanInfo] = useState({ plan: null, daysLeft: null, subscriptionStatus: null })
  const [discordConnected, setDiscordConnected] = useState(false)
  const [discordLoading, setDiscordLoading] = useState(false)

  // Determine active tab based on pathname
  const determineActiveTab = () => {
    if (pathname === "/dashboard") return "welcome"
    if (pathname === "/dashboard/history") return "history"
    if (pathname === "/dashboard/account") return "account"
    return "welcome"
  }

  const currentTab = determineActiveTab()

  // Check if onboarding is needed and fetch username
  useEffect(() => {
    if (status === "authenticated") {
      const checkOnboardingStatus = async () => {
        try {
          const response = await fetch("/api/user/onboarding-status")
          const data = await response.json()

          if (data.success) {
            // Set username from onboarding data or fallback to session name
            setUsername(data.username || session?.user?.name || "User")

            if (!data.onboardingCompleted) {
              setShowOnboarding(true)
            }
          }
        } catch (error) {
          console.error("Failed to check onboarding status:", error)
        }
      }

      checkOnboardingStatus()
    }
  }, [status, session])

  // Check authentication and handle loading
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login")
      return
    }

    if (status === "authenticated") {
      // Short delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [status, router])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Fetch plan info on mount after authentication
  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/user/stats")
        .then((res) => res.json())
        .then((data) => {
          setPlanInfo({
            plan: data.plan,
            daysLeft: data.daysLeft,
            subscriptionStatus: data.subscriptionStatus,
          })
        })
        .catch(() => {})
    }
  }, [status])

  // Fetch Discord connection status
  useEffect(() => {
    if (status === "authenticated") {
      // Example: Assume session.user.discordId exists if connected
      setDiscordConnected(!!session?.user?.discordId)
    }

    // Listen for Discord OAuth redirect (same as CheckoutModal)
    const handleDiscordCallback = (event) => {
      if (event.origin !== window.location.origin) return
      if (event.data.type === "discord_auth_success") {
        setDiscordConnected(true)
        setDiscordLoading(false)
        // Optionally, update session or fetch user info here
      }
    }
    window.addEventListener("message", handleDiscordCallback)
    return () => window.removeEventListener("message", handleDiscordCallback)
  }, [status, session])

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false })
      router.push("/login")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const handleOnboardingComplete = async () => {
    setShowOnboarding(false)
    // Update the session to get the new username
    await update()
    // Fetch the updated username
    try {
      const response = await fetch("/api/user/onboarding-status")
      const data = await response.json()
      if (data.success && data.username) {
        setUsername(data.username)
      }
    } catch (error) {
      console.error("Failed to fetch updated username:", error)
    }
  }

  const resetOnboardingData = async () => {
    try {
      const response = await fetch("/api/user/onboarding", {
        method: "DELETE",
      })

      if (response.ok) {
        // Update the session and refresh the page
        await update()
        window.location.reload()
      }
    } catch (error) {
      console.error("Failed to reset onboarding data:", error)
    }
  }

  const handleConnectDiscord = () => {
    setDiscordLoading(true)
    // Open Discord OAuth in a popup (same as CheckoutModal)
    const width = 600
    const height = 800
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2
    const email = session?.user?.email || ""
    const popup = window.open(
      `/api/auth/discord${email ? `?email=${encodeURIComponent(email)}` : ""}`,
      "Connect Discord",
      `width=${width},height=${height},left=${left},top=${top}`,
    )
    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      alert("Please allow popups for this website to connect your Discord account.")
      setDiscordLoading(false)
    }
  }

  const navItems = [
    {
      id: "welcome",
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: currentTab === "welcome",
    },
    {
      id: "history",
      label: "History",
      icon: Printer,
      href: "/dashboard/history",
      active: currentTab === "history",
    },
    {
      id: "account",
      label: "Account",
      icon: Crown,
      href: "/dashboard/account",
      active: currentTab === "account",
    },
  ]

  // If loading, show loading screen
  if (status === "loading" || isLoading) {
    return <DashboardLoading />
  }

  return (
    <div className="flex h-screen bg-[var(--background)] text-[var(--primary-text)]">
      {/* Mobile menu backdrop */}
      {/* Remove mobile menu backdrop and sidebar for small screens */}

      {/* Sidebar - only render for lg and up */}
      <div
        className="hidden lg:block fixed inset-y-0 left-0 z-30 bg-[var(--background-secondary)] border-r border-zinc-800 transition-all duration-300 ease-in-out overflow-x-hidden lg:relative lg:translate-x-0"
        style={{ width: sidebarCollapsed ? '5rem' : '16rem' }}
      >
        <div className="flex h-full flex-col relative overflow-x-hidden">
          {/* Collapse/Expand Button - Styled like the screenshot */}
          <button
            className={`absolute top-1/2 -translate-y-1/2 z-40 h-8 bg-zinc-800 flex items-center justify-center transition-all duration-200 border-l border-y border-zinc-800 cursor-pointer ${
              sidebarCollapsed ? "right-0 w-8 rounded-l-full" : "right-0 w-8 rounded-l-full pl-1"
            }`}
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="text-[var(--accent-text)] w-5 h-5" />
            ) : (
              <ChevronLeft className="text-[var(--accent-text)] w-5 h-5" />
            )}
          </button>

          {/* Brand Logo and Header */}
          <div
            className={`flex flex-col pt-6 pb-4 transition-all duration-300 ${
              sidebarCollapsed ? "px-2 items-center" : "px-4 items-start"
            }`}
          >
            <div className={`flex mb-4 ${sidebarCollapsed ? "justify-center w-full" : "justify-start"}`}>
              <Image
                src="/assets/Logo_1.png"
                alt="Logo"
                width={sidebarCollapsed ? 32 : 40}
                height={sidebarCollapsed ? 32 : 40}
                className="transition-all duration-300"
              />
            </div>
            <div className="w-full h-px bg-zinc-800"></div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 pb-4">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const NavItem = item.disabled ? (props) => <div {...props} /> : Link
                const isActive = item.active

                return (
                  <div key={item.id} className="relative">
                    <NavItem
                      href={item.disabled ? "#" : item.href}
                      className={`
                        group flex items-center w-full rounded-lg transition-all duration-200 relative
                        ${sidebarCollapsed ? "px-0 py-3 justify-center" : "px-3 py-2.5"}
                        ${
                          isActive
                            ? "bg-[var(--accent-text)]/10 text-[var(--accent-text)] border border-[var(--accent-text)]/20"
                            : "text-[var(--secondary-text)] hover:bg-zinc-800/50 hover:text-[var(--accent-text)]"
                        }
                      `}
                      onClick={(e) => {
                        if (item.disabled) {
                          e.preventDefault()
                        }
                      }}
                    >
                      {/* Icon container with consistent sizing */}
                      <div
                        className={`flex items-center justify-center flex-shrink-0 ${
                          sidebarCollapsed ? "w-5 h-5" : "w-5 h-5 mr-3"
                        }`}
                      >
                        <item.icon
                          size={20}
                          className={`transition-colors duration-200 ${
                            isActive
                              ? "text-[var(--accent-text)]"
                              : "text-[var(--secondary-text)] group-hover:text-[var(--accent-text)]"
                          }`}
                        />
                      </div>

                      {/* Label with smooth transition - hidden in collapsed state */}
                      {!sidebarCollapsed && <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>}

                      {/* Tooltip for collapsed state */}
                      {sidebarCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                          {item.label}
                        </div>
                      )}
                    </NavItem>
                  </div>
                )
              })}
            </nav>
          </div>

          {/* Connect Discord Box - only show if sidebar is not collapsed */}
          {!sidebarCollapsed && (
            <div className="px-3 pb-0">
              <div
                className="mb-4 bg-zinc-900/80 rounded-xl shadow border border-zinc-800 flex flex-col items-center px-4 py-5 text-center"
                style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)" }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 mb-3">
                  <FaDiscord className="text-indigo-400 w-6 h-6" />
                </div>
                <div className="font-semibold text-base text-white mb-1">Connect your Discord</div>
                <div className="text-xs text-zinc-400 mb-4">for news and product updates</div>
                <button
                  onClick={handleConnectDiscord}
                  disabled={discordLoading}
                  className={`w-full py-2 rounded-lg font-medium text-sm transition-all duration-150
                    ${discordConnected ? "bg-zinc-800 text-indigo-400 border border-indigo-400 hover:bg-indigo-950" : "bg-indigo-500 hover:bg-indigo-600 text-white"}
                    ${discordLoading ? "opacity-60 cursor-not-allowed" : ""}
                  `}
                  aria-label={discordConnected ? "Reconnect Discord" : "Connect Discord"}
                >
                  {discordLoading
                    ? "Connecting..."
                    : discordConnected
                      ? "Reconnect"
                      : "Connect"
                  }
                </button>
              </div>
            </div>
          )}

          {/* Bottom section with plan info */}
          <div className="px-3 pb-4">
            <div className="w-full h-px bg-zinc-800 mb-4"></div>

            <div
              className={`flex items-center rounded-lg transition-all duration-300 ${
                sidebarCollapsed ? "px-0 py-3 justify-center" : "px-3 py-2.5"
              } text-[var(--secondary-text)]`}
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 ${
                  sidebarCollapsed ? "w-5 h-5" : "w-5 h-5 mr-3"
                }`}
              >
                {planInfo.plan === "lifetime" ? (
                  <Trophy size={16} className="text-[var(--secondary-text)]" />
                ) : (
                  <Hourglass size={16} className="text-[var(--secondary-text)]" />
                )}
              </div>

              {/* Plan text - only shown when not collapsed */}
              {!sidebarCollapsed && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {planInfo.plan === "lifetime"
                    ? "Lifetime Plan"
                    : planInfo.plan === "monthly"
                      ? "Monthly Plan"
                      : planInfo.plan === "giveaway"
                        ? `${planInfo.daysLeft} Days Plan`
                        : "No Plan"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content area - Fixed the scrolling issue */}
      <div className="relative flex-1 flex flex-col overflow-hidden w-0 min-w-0">
        {/* Mobile header removed */}
        {/* Scrollable content - Fixed to ensure proper scrolling */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden w-full h-full">{children}</main>
      </div>

      {/* Onboarding Modal */}
      {showOnboarding && <OnboardingModal onComplete={handleOnboardingComplete} />}
    </div>
  )
}
