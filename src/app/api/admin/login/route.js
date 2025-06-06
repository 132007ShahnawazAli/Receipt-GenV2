import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body;

    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Set a secure HTTP-only cookie for admin session
    const cookieStore = await cookies();
    
    // Create the response first
    const response = NextResponse.json({ success: true });
    
    // Set the cookie in the response with consistent security settings
    response.cookies.set('admin_token', 'true', {
      httpOnly: true,
      secure: true, // Always use secure cookies
      sameSite: 'lax', // Changed to 'lax' to work better across environments
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 