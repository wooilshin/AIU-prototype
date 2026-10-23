import { NextResponse, type NextRequest } from 'next/server'

// Set KO_MAINTENANCE=off in the hosting environment to reopen www.student-b.co.kr.
const KO_MAINTENANCE = process.env.KO_MAINTENANCE !== 'off'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  if (!KO_MAINTENANCE || !host.includes('student-b.co.kr')) return

  if (req.nextUrl.pathname === '/under-construction') return

  return NextResponse.rewrite(new URL('/under-construction', req.url))
}

export const config = {
  matcher: ['/((?!_next|images|favicon).*)'],
}
