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
  // But only do this for direct navigation, not for API calls or callbacks
  if ((pathname === "/login" || pathname === "/signup") && token && !pathname.includes("api")) {
    // Don't redirect if there's a specific callback URL
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl")
    if (callbackUrl) {
      return NextResponse.redirect(new URL(callbackUrl, request.url))
    }
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/generate-receipt/:path*", "/login", "/signup"],
}
