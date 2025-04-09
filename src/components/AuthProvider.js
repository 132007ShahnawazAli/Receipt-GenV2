"use client"

import { SessionProvider } from "next-auth/react"

export function AuthProvider({ children }) {
  return (
    <SessionProvider 
      refetchInterval={5 * 60} 
      refetchOnWindowFocus={true} 
      refetchWhenOffline={false}
      refetchOnMount={true}
    >
      {children}
    </SessionProvider>
  )
}
