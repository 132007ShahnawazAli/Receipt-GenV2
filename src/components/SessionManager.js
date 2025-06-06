"use client"

import { useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function SessionManager() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    // Check if this is a fresh page load
    if (!sessionStorage.getItem('hasActiveSession')) {
      // Force logout on fresh page load
      signOut({ redirect: false }).then(() => {
        router.push('/login')
      })
      return
    }

    // Generate a unique tab ID when the component mounts
    const tabId = Math.random().toString(36).substring(7)
    
    // Store the tab ID and mark session as active
    sessionStorage.setItem('dashboardTabId', tabId)
    sessionStorage.setItem('hasActiveSession', 'true')

    // Function to handle storage events
    const handleStorageChange = (e) => {
      if (e.key === 'dashboardTabId' && e.newValue !== tabId) {
        // Another tab was opened, sign out from this one
        signOut({ redirect: false }).then(() => {
          router.push('/login')
        })
      }
    }

    // Function to handle visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Tab became visible again, check if it's the active tab
        const currentTabId = sessionStorage.getItem('dashboardTabId')
        if (currentTabId !== tabId) {
          signOut({ redirect: false }).then(() => {
            router.push('/login')
          })
        }
      }
    }

    // Function to handle beforeunload
    const handleBeforeUnload = () => {
      // Clear session marker when tab is closed
      sessionStorage.removeItem('hasActiveSession')
    }

    // Add event listeners
    window.addEventListener('storage', handleStorageChange)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup function
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      // Clear the session when component unmounts
      sessionStorage.removeItem('dashboardTabId')
      sessionStorage.removeItem('hasActiveSession')
    }
  }, [router])

  return null // This component doesn't render anything
} 