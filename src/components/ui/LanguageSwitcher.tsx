'use client'

import { useStore } from '@/store/useStore'
import { Locale } from '@/types'
import { Globe } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const { locale, setLocale } = useStore()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    // Refresh the page to apply RTL/LTR changes
    router.refresh()
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-sand-100 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5 text-earth-600" />
        <span className="text-sm font-medium text-earth-700 uppercase">
          {locale}
        </span>
      </button>
      
      <div className="absolute top-full end-0 mt-2 py-2 w-32 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => handleLanguageChange('ar')}
          className={`w-full px-4 py-2 text-start text-sm hover:bg-sand-50 transition-colors ${
            locale === 'ar' ? 'text-gold-600 font-medium bg-sand-50' : 'text-earth-700'
          }`}
        >
          العربية
        </button>
        <button
          onClick={() => handleLanguageChange('fr')}
          className={`w-full px-4 py-2 text-start text-sm hover:bg-sand-50 transition-colors ${
            locale === 'fr' ? 'text-gold-600 font-medium bg-sand-50' : 'text-earth-700'
          }`}
        >
          Français
        </button>
      </div>
    </div>
  )
}

