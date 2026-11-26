import { NextResponse, type NextRequest } from 'next/server'

// Set KO_MAINTENANCE=on in the hosting environment to show the construction page on www.student-b.co.kr.
const KO_MAINTENANCE = process.env.KO_MAINTENANCE === 'on'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  if (!KO_MAINTENANCE || !host.includes('student-b.co.kr')) return

  if (req.nextUrl.pathname === '/under-construction') return

  return NextResponse.rewrite(new URL('/under-construction', req.url))
}

export const config = {
  matcher: ['/((?!_next|images|favicon).*)'],
}
