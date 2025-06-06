import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/login", "/api/generate-receipt/:path*"],
}

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
    return handleAuthError(request)
  }

  // Handle protected routes
  if (pathname.startsWith("/dashboard")) {
    if (!token?.isLicenseUser) {
      return handleAuthError(request)
    }

    // Check license expiration from token
    if (token.expiresAt && new Date(token.expiresAt) < new Date()) {
      return handleAuthError(request)
    }
  }

  // Handle admin routes
  if (pathname.startsWith("/admin") && pathname !== "/admin") {
    const adminToken = request.cookies.get("admin_token")
    if (!adminToken?.value === "true") {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }

  // Handle login redirects
  if (pathname === "/login") {
    if (token?.isLicenseUser) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

function handleAuthError(request) {
  const response = NextResponse.redirect(new URL("/login", request.url))
  // Clear auth cookies
  response.cookies.delete("next-auth.session-token")
  response.cookies.delete("__Secure-next-auth.session-token")
  return response
}
