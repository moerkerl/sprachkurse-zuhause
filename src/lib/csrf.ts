import { NextRequest } from 'next/server';
import { randomBytes } from 'crypto';
import { serialize } from 'cookie';

const CSRF_TOKEN_LENGTH = 32;
const CSRF_COOKIE_NAME = 'csrf-token';

/**
 * Generates a cryptographically secure CSRF token
 */
export function generateCSRFToken(): string {
  return randomBytes(CSRF_TOKEN_LENGTH).toString('hex');
}

/**
 * Creates a secure cookie for the CSRF token
 */
export function createCSRFCookie(token: string): string {
  return serialize(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  });
}

/**
 * Extracts CSRF token from request headers
 */
export function getCSRFTokenFromHeaders(request: NextRequest): string | null {
  return request.headers.get('X-CSRF-Token');
}

/**
 * Extracts CSRF token from request cookies
 */
export function getCSRFTokenFromCookies(request: NextRequest): string | null {
  return request.cookies.get(CSRF_COOKIE_NAME)?.value || null;
}

/**
 * Validates CSRF token from request
 */
export function validateCSRFFromRequest(request: NextRequest): boolean {
  const headerToken = getCSRFTokenFromHeaders(request);
  const cookieToken = getCSRFTokenFromCookies(request);
  
  // Both tokens must exist and match
  if (!headerToken || !cookieToken) {
    return false;
  }
  
  // Constant-time comparison to prevent timing attacks
  return headerToken === cookieToken;
}

// Standard CSRF error response
export const CSRF_ERROR_RESPONSE = {
  success: false,
  error: 'CSRF token validation failed. Please refresh the page and try again.',
};