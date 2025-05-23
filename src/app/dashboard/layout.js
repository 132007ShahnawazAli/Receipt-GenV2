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
} from "lucide-react"
import DashboardLoading from "@/components/dashboard/DashboardLoading"
import OnboardingModal from "@/components/dashboard/OnboardingModal"

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session, status, update } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [username, setUsername] = useState("User")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

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
      label: `Welcome, ${username}`,
      icon: Home,
      href: "/dashboard",
      active: currentTab === "welcome",
    },
    {
      id: "warehouse",
      label: "My warehouse",
      icon: Package,
      href: "/dashboard/warehouse",
      active: currentTab === "warehouse",
    },
    {
      id: "leaderboard",
      label: "Leaderboard",
      icon: Trophy,
      href: "/dashboard/leaderboard",
      active: currentTab === "leaderboard",
    },
    {
      id: "trending",
      label: "Trending",
      icon: TrendingUp,
      href: "#",
      disabled: true,
      active: currentTab === "trending",
    },
    {
      id: "receipts",
      label: "Receipts",
      icon: Receipt,
      href: "#",
      disabled: true,
      active: currentTab === "receipts",
    },
    {
      id: "factories",
      label: "Factories",
      icon: Factory,
      href: "#",
      disabled: true,
      active: currentTab === "factories",
    },
    {
      id: "suppliers",
      label: "Suppliers",
      icon: Truck,
      href: "#",
      disabled: true,
      active: currentTab === "suppliers",
    },
    {
      id: "middlemen",
      label: "Middlemen",
      icon: Users,
      href: "#",
      disabled: true,
      active: currentTab === "middlemen",
    },
    {
      id: "guides",
      label: "Guides",
      icon: BookOpen,
      href: "#",
      disabled: true,
      active: currentTab === "guides",
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
        className={`fixed inset-y-0 left-0 z-30 ${sidebarCollapsed ? 'w-20' : 'w-64'} transform bg-[var(--background)] border-r border-zinc-800 transition-all duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex h-full flex-col relative">
          {/* Collapse/Expand Button */}
          <button
            className="absolute left-full top-1/2 -translate-y-1/2 z-40 bg-zinc-900 border border-zinc-800 rounded-full p-1 shadow-lg hover:bg-zinc-800 transition-colors"
            style={{ marginLeft: '-18px' }}
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? <ChevronRight className="text-[var(--accent-text)]" size={20} /> : <ChevronLeft className="text-[var(--accent-text)]" size={20} />}
          </button>
          <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-2">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const NavItem = item.disabled ? (props) => <div {...props} /> : Link
                return (
                  <NavItem
                    key={item.id}
                    href={item.disabled ? "#" : item.href}
                    className={`
                      flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} px-4 py-4 rounded-lg transition-all duration-200
                      ${item.active ? "bg-[var(--accent-text)] text-zinc-900 drop-shadow-[0px_0px_10px_var(--accent-text)]" : "text-gray-300 hover:bg-zinc-800"}
                      ${item.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                    `}
                    onClick={(e) => {
                      if (item.disabled) {
                        e.preventDefault()
                      }
                    }}
                  >
                    <span className={`text-sm font-medium transition-all duration-200 ${sidebarCollapsed ? 'sr-only' : ''}`}>{item.label}</span>
                    <item.icon size={20} className={`${item.active ? "text-zinc-900" : "text-[var(--accent-text)]"}`} />
                  </NavItem>
                )
              })}
            </nav>
            {/* Spacer for collapse button on mobile */}
            <div className="flex-1"></div>
          </div>
          <div className="p-4 border-t border-zinc-800 space-y-2">
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 rounded-lg bg-[var(--accent-text)] hover:scale-95 transition-transform cursor-pointer text-zinc-900"
            >
              Logout
            </button>
          </div>
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
