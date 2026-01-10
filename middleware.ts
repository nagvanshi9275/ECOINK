import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Basic in-memory cache for redirects to avoid fetching every request
let redirectsCache: any[] | null = null;
let lastFetch = 0;
const CACHE_TTL = 30000; // 30 seconds

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip middleware for static assets, api, etc. (already handled by config, but defensive)
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    try {
        // Fetch or use cached redirects
        const now = Date.now();
        if (!redirectsCache || (now - lastFetch) > CACHE_TTL) {
            const baseUrl = request.nextUrl.origin;
            const res = await fetch(`${baseUrl}/api/redirects/active`);
            if (res.ok) {
                redirectsCache = await res.json();
                lastFetch = now;
            }
        }

        if (redirectsCache) {
            const redirect = redirectsCache.find(r => r.fromPath === pathname);
            if (redirect) {
                const url = new URL(redirect.toPath, request.url);
                return NextResponse.redirect(url, redirect.statusCode || 301);
            }
        }
    } catch (error) {
        // Silent fail - don't break the site if redirect API is down
        console.error('Middleware redirect error:', error);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
