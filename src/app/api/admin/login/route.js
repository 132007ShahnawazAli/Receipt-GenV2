import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// In a real application, this should be stored securely in environment variables
const ADMIN_PASSWORD = 'admin123'; // Change this to a secure password

export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Set a secure HTTP-only cookie for admin session
    const cookieStore = await cookies();
    
    // Create the response first
    const response = NextResponse.json({ success: true });
    
    // Set the cookie in the response
    response.cookies.set('admin_token', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
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