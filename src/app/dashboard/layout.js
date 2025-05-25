"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import {
  Home,
  Package,
  TrendingUp,
  Receipt,
  Factory,
  Truck,
  Users,
  BookOpen,
  Trophy,
  Menu,
  X,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Hourglass,
  LogOut,
} from "lucide-react"
import DashboardLoading from "@/components/dashboard/DashboardLoading"
import OnboardingModal from "@/components/dashboard/OnboardingModal"
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

  // Determine active tab based on pathname
  const determineActiveTab = () => {
    if (pathname === "/dashboard") return "welcome"
    if (pathname === "/dashboard/warehouse") return "warehouse"
    if (pathname === "/dashboard/leaderboard") return "leaderboard"
    if (pathname.includes("/trending")) return "trending"
    if (pathname.includes("/receipts")) return "receipts"
    if (pathname.includes("/factories")) return "factories"
    if (pathname.includes("/suppliers")) return "suppliers"
    if (pathname.includes("/middlemen")) return "middlemen"
    if (pathname.includes("/guides")) return "guides"
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
      router.replace("/dashboard-login")
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
        .then(res => res.json())
        .then(data => {
          setPlanInfo({
            plan: data.plan,
            daysLeft: data.daysLeft,
            subscriptionStatus: data.subscriptionStatus,
          })
        })
        .catch(() => {})
    }
  }, [status])

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false })
      router.push("/dashboard-login")
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
      icon: Package,
      href: "/dashboard/warehouse",
      active: currentTab === "warehouse",
    },
    {
      id: "account",
      label: "Account",
      icon: Trophy,
      href: "/dashboard/leaderboard",
      active: currentTab === "leaderboard",
    },
  ]

  // If loading, show loading screen
  if (status === "loading" || isLoading) {
    return <DashboardLoading />
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)] text-[var(--primary-text)]">
      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar - fixed position */}
      <div
        className={`fixed inset-y-0 left-0 z-30 bg-(--background-secondary) ${sidebarCollapsed ? 'w-20' : 'w-64'} min-w-0 overflow-x-hidden transform border-r border-zinc-800 transition-all duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex h-full flex-col relative min-w-0 overflow-x-hidden">
          {/* Collapse/Expand Button - Vertically Centered */}
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 z-40 bg-(--background-secondary) border border-zinc-800 rounded-l-full pl-1 pr-2 py-1.5 flex items-center justify-center hover:bg-zinc-800 transition-colors"
            style={{ transition: 'right 0.3s' }}
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="text-[var(--accent-text)]" size={20} />
            ) : (
              <ChevronLeft className="text-[var(--accent-text)]" size={20} />
            )}
          </button>
          {/* Brand Logo and Divider */}
          <div className={`flex flex-col gap-2 min-w-0 overflow-x-hidden ${sidebarCollapsed ? 'items-center px-2' : 'items-start pl-8'} pt-6 pb-2 transition-all duration-300`}>
            <div className={`flex min-w-0 overflow-x-hidden ${sidebarCollapsed ? 'justify-center' : 'justify-start'} w-full transition-all duration-300`}>
              <Image src="/assets/Logo_1.png" alt="Logo" width={36} height={36} />
            </div>
            <div className={`border-t border-zinc-800 transition-all duration-300 ${sidebarCollapsed ? 'w-full mx-2' : 'ml-8 mr-8 w-auto'}`}></div>
          </div>
          <div className={`flex-1 overflow-y-auto min-w-0 overflow-x-hidden ${sidebarCollapsed ? 'px-2' : 'px-3'} flex flex-col gap-2 transition-all duration-300`}>
            <nav className="space-y-2">
              {navItems.map((item) => {
                const NavItem = item.disabled ? (props) => <div {...props} /> : Link
                return (
                  <div className="relative flex items-center group min-w-0 overflow-x-hidden" key={item.id}>
                    <NavItem
                      href={item.disabled ? "#" : item.href}
                      className={`
                        flex items-center min-w-0 overflow-x-hidden ${sidebarCollapsed ? 'justify-center' : ''} gap-2 px-8 py-3 rounded-lg transition-all duration-200
                        text-(--secondary-text) hover:bg-zinc-800
                      `}
                      onClick={(e) => {
                        if (item.disabled) {
                          e.preventDefault()
                        }
                      }}
                    >
                      <item.icon size={16} className="text-(--secondary-text) flex-shrink-0" />
                      <span
                        className={`text-sm font-medium tracking-tight transition-all duration-300
                          ${sidebarCollapsed ? 'opacity-0 translate-x-4 pointer-events-none w-0' : 'opacity-100 translate-x-0 w-auto'}
                          whitespace-nowrap overflow-hidden`
                        }
                        style={{ transitionProperty: 'opacity,transform,width' }}
                      >
                        {item.label}
                      </span>
                    </NavItem>
                  </div>
                )
              })}
            </nav>
            {/* Spacer for collapse button on mobile */}
            <div className="flex-1"></div>
          </div>
          {/* Plan info row at bottom of sidebar - styled like navlinks */}
          <div className={`flex items-center min-w-0 overflow-x-hidden gap-2 px-8 py-3 rounded-lg text-(--secondary-text) text-sm font-medium tracking-tight mb-2 ${sidebarCollapsed ? 'justify-center' : ''}`}>
            {planInfo.plan === "lifetime" ? (
              <>
                <Trophy size={16} className="text-(--secondary-text) flex-shrink-0" />
                <span className={`${sidebarCollapsed ? 'opacity-0 pointer-events-none w-0' : 'opacity-100 w-auto'} transition-all duration-300 whitespace-nowrap overflow-hidden`}>Lifetime Plan</span>
              </>
            ) : planInfo.plan === "monthly" ? (
              <>
                <Hourglass size={16} className="text-(--secondary-text) flex-shrink-0" />
                <span className={`${sidebarCollapsed ? 'opacity-0 pointer-events-none w-0' : 'opacity-100 w-auto'} transition-all duration-300 whitespace-nowrap overflow-hidden`}>Monthly Plan</span>
              </>
            ) : (
              <>
                <Hourglass size={16} className="text-(--secondary-text) flex-shrink-0" />
                <span className={`${sidebarCollapsed ? 'opacity-0 pointer-events-none w-0' : 'opacity-100 w-auto'} transition-all duration-300 whitespace-nowrap overflow-hidden`}>No Plan</span>
              </>
            )}
          </div>
          <div className="p-4 border-t border-zinc-800 space-y-2"></div>
        </div>
      </div>

      {/* Main content area - scrollable */}
      <div className="relative flex-1 flex flex-col overflow-hidden " onWheel={(e) => e.stopPropagation()}>
        {/* Mobile header with menu button */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-zinc-800">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-lg font-semibold">Dashboard</div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

      {/* Onboarding Modal */}
      {showOnboarding && <OnboardingModal onComplete={handleOnboardingComplete} />}
    </div>
  )
}
