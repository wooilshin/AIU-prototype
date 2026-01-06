'use client'

import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatInterface from '@/components/ChatInterface'
import styles from './interactive.module.css'

// React Three Fiber는 클라이언트 사이드에서만 동작하므로 dynamic import 사용
const InteractiveScene = dynamic(() => import('@/components/InteractiveScene'), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading 3D Scene...</div>
})

export default function InteractivePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <>
        <Header />
        <div className={styles.interactiveContainer}>
          <div className={styles.sceneWrapper}>
            <div className={styles.loading}>Loading 3D Scene...</div>
          </div>
          <div className={styles.chatWrapper}>
            <ChatInterface />
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className={styles.interactiveContainer}>
        <div className={styles.sceneWrapper}>
          <Suspense fallback={<div className={styles.loading}>Loading 3D Scene...</div>}>
            <InteractiveScene />
          </Suspense>
        </div>
        <div className={styles.chatWrapper}>
          <ChatInterface />
        </div>
      </div>
      <Footer />
    </>
  )
}

