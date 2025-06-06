import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip middleware for the login page and API routes
    if (request.nextUrl.pathname === '/admin' || request.nextUrl.pathname.startsWith('/api/admin/login')) {
      return NextResponse.next();
    }

    const adminToken = request.cookies.get('admin_token');
    
    if (!adminToken || adminToken.value !== 'true') {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
}; 