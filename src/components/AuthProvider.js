"use client"

import { SessionProvider } from "next-auth/react"

export function AuthProvider({ children }) {
  return (
    <SessionProvider 
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true} 
      refetchWhenOffline={false}
      refetchOnMount={true}
      refetchOnReconnect={true}
      basePath={process.env.NODE_ENV === "production" ? "/api/auth" : undefined}
    >
      {children}
    </SessionProvider>
  )
}
