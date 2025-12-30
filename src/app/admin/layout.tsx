'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAdminStore } from '@/store/useAdminStore'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated } = useAdminStore()
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Don't redirect if we're on the login page
    if (pathname === '/admin/login') {
      setIsLoading(false)
      return
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/admin/login')
    } else {
      setIsLoading(false)
    }
  }, [isAuthenticated, pathname, router])

  // Show login page without sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-sand-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sand-50">
      <AdminSidebar />
      <main className="lg:ml-64 min-h-screen">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

