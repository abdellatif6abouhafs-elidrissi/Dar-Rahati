'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Package, 
  FolderOpen, 
  ShoppingCart, 
  Settings, 
  LogOut,
  Home,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'
import { useAdminStore } from '@/store/useAdminStore'
import { useRouter } from 'next/navigation'

const menuItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/products', icon: Package, label: 'Produits' },
  { href: '/admin/categories', icon: FolderOpen, label: 'Catégories' },
  { href: '/admin/orders', icon: ShoppingCart, label: 'Commandes' },
  { href: '/admin/settings', icon: Settings, label: 'Paramètres' },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { logout } = useAdminStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/admin/login')
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-earth-800 text-white rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-earth-900 text-white z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-earth-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center text-earth-900 font-bold text-xl">
              د
            </div>
            <div>
              <h1 className="font-bold text-lg">Dar Rahati</h1>
              <p className="text-xs text-earth-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-gold-500 text-earth-900 font-medium'
                    : 'text-earth-300 hover:bg-earth-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-earth-700">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-earth-300 hover:bg-earth-800 hover:text-white rounded-lg transition-colors mb-2"
          >
            <Home className="w-5 h-5" />
            Voir le site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  )
}

