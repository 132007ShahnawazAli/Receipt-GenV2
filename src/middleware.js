import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Get the token with better error handling
  let token
  try {
    token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })
    
    // Log token status for debugging
    console.log(`Middleware - Path: ${pathname}, Token exists: ${!!token}`)
  } catch (error) {
    console.error("Error getting token in middleware:", error)
    // Continue without token on error
  }

  // Check if the path is protected
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api/generate-receipt")) {
    // Redirect to login if not authenticated
    if (!token) {
      console.log(`Redirecting to login from ${pathname} - No token found`)
      const url = new URL("/login", request.url)
      // Store the original URL as the callback URL
      url.searchParams.set("callbackUrl", pathname)
      return NextResponse.redirect(url)
    }
  }

  // Redirect authenticated users away from login/signup pages
  if ((pathname === "/login" || pathname === "/signup") && token) {
    // Check if this is an API route or callback
    if (pathname.includes("api") || pathname.includes("callback")) {
      return NextResponse.next()
    }

    // Get the callback URL from the query parameters
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl")
    
    // If there's a callback URL, redirect to it
    if (callbackUrl) {
      // Ensure the callback URL is from the same origin
      try {
        const callbackUrlObj = new URL(callbackUrl, request.url)
        if (callbackUrlObj.origin === request.nextUrl.origin) {
          console.log(`Redirecting authenticated user to callback URL: ${callbackUrl}`)
          return NextResponse.redirect(callbackUrlObj)
        }
      } catch (error) {
        console.error("Invalid callback URL:", error)
      }
    }
    
    // Otherwise, redirect to dashboard
    console.log(`Redirecting authenticated user to dashboard from ${pathname}`)
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Add security headers
  const response = NextResponse.next()
  response.headers.set("x-frame-options", "DENY")
  response.headers.set("x-content-type-options", "nosniff")
  response.headers.set("referrer-policy", "strict-origin-when-cross-origin")
  
  // Only add CSP in production
  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "content-security-policy",
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
    )
  }

  return response
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/generate-receipt/:path*", "/login", "/signup"],
}
