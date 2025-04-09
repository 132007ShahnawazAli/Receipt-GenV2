import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

// Define protected routes
const protectedRoutes = ["/dashboard"]

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Only check authentication for protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    // Redirect to login if not authenticated
    if (!token) {
      const url = new URL("/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(pathname))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
