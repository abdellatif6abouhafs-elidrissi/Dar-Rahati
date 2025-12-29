'use client'

import { useStore } from '@/store/useStore'
import { getDirection } from '@/lib/locales'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { useEffect, useState } from 'react'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useStore()
  const direction = getDirection(locale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = direction
      document.documentElement.lang = locale
    }
  }, [direction, locale, mounted])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-cream">
        <div className="h-20" /> {/* Header placeholder */}
        <main>{children}</main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton floating />
    </div>
  )
}

