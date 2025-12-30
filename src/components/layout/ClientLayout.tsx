'use client'

import { useStore } from '@/store/useStore'
import { getDirection } from '@/lib/locales'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useStore()
  const direction = getDirection(locale)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on admin pages
  const isAdminPage = pathname?.startsWith('/admin')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !isAdminPage) {
      document.documentElement.dir = direction
      document.documentElement.lang = locale
    } else if (mounted && isAdminPage) {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'fr'
    }
  }, [direction, locale, mounted, isAdminPage])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-cream">
        <div className="h-20" /> {/* Header placeholder */}
        <main>{children}</main>
      </div>
    )
  }

  // Admin pages have their own layout
  if (isAdminPage) {
    return <>{children}</>
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

