import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Get the token - if it exists, user is authenticated
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // Protected routes - redirect to login if not authenticated
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api/generate-receipt")) {
    if (!token) {
      // Simple redirect to login without any query parameters
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Redirect authenticated users away from login/signup pages
  if (pathname === "/login" || pathname === "/signup") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/generate-receipt/:path*", "/login", "/signup"],
}
