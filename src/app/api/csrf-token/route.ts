import { NextResponse } from 'next/server';
import { generateCSRFToken, createCSRFCookie } from '@/lib/csrf';

export async function GET() {
  try {
    // Generate a new CSRF token
    const token = generateCSRFToken();
    
    // Create response with token
    const response = NextResponse.json({ 
      success: true, 
      token 
    });
    
    // Set the CSRF token as an HTTP-only cookie
    response.headers.set('Set-Cookie', createCSRFCookie(token));
    
    return response;
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
}