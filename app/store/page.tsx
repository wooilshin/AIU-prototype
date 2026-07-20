'use client'

import { useEffect } from 'react'
import { getStoreHref } from '@/lib/store-url'

export default function StorePage() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const hostname = window.location.hostname
    if (!hostname.includes('student-b.co.kr')) {
      window.location.replace('/')
      return
    }

    window.location.replace(getStoreHref())
  }, [])

  return null
}
