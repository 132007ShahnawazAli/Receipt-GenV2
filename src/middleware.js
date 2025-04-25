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

  // Check if the path is protected dashboard routes
  if (pathname.startsWith("/dashboard") && pathname !== "/dashboard-login") {
    // Redirect to license login if not authenticated or if not a license user
    if (!token || !token.isLicenseUser) {
      return NextResponse.redirect(new URL("/dashboard-login", request.url))
    }
  }

  // Redirect authenticated license users away from dashboard-login page
  if (pathname === "/dashboard-login" && token?.isLicenseUser) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Handle regular site authentication redirects
  // Redirect authenticated users away from login/signup pages
  if ((pathname === "/login" || pathname === "/signup") && token && !pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard-login", "/api/generate-receipt/:path*", "/login", "/signup"],
}
