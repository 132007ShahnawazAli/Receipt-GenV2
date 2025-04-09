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
  } catch (error) {
    console.error("Error getting token in middleware:", error)
    // Continue without token on error
  }

  // Check if the path is protected
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api/generate-receipt")) {
    // Redirect to login if not authenticated
    if (!token) {
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
          return NextResponse.redirect(callbackUrlObj)
        }
      } catch (error) {
        console.error("Invalid callback URL:", error)
      }
    }
    
    // Otherwise, redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/generate-receipt/:path*", "/login", "/signup"],
}
