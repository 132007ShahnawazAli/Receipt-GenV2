import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api/generate-receipt")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    // Redirect to login if not authenticated
    if (!token) {
      const url = new URL("/login", request.url)
      // Don't add callbackUrl as it's causing issues with the redirect loop
      return NextResponse.redirect(url)
    }
  }

  // Redirect authenticated users away from login/signup pages
  if (pathname === "/login" || pathname === "/signup") {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/generate-receipt/:path*", "/login", "/signup"],
}
