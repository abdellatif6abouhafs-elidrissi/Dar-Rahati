'use client'

import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { categories } from '@/lib/products'
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const { locale } = useStore()
  const t = getLocale(locale)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-earth-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">د</span>
              </div>
              <span className="text-xl font-bold text-white">
                {locale === 'ar' ? 'دار الراحة' : 'Dar Rahati'}
              </span>
            </div>
            <p className="text-earth-300 text-sm leading-relaxed mb-6">
              {t.footerAbout}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-earth-700 hover:bg-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-earth-700 hover:bg-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-earth-300 hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-earth-300 hover:text-white transition-colors">
                  {t.products}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-earth-300 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-earth-300 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">
              {t.categories}
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-earth-300 hover:text-white transition-colors"
                  >
                    {category.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">
              {t.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-white font-medium">+212 600 000 000</span>
                  <span className="text-sm text-earth-400">WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-earth-300">{t.locationAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-earth-300">{t.workingHoursValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-earth-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-earth-400">
            <p>
              © {currentYear} {locale === 'ar' ? 'دار الراحة' : 'Dar Rahati'}. {t.allRightsReserved}
            </p>
            <p className="flex items-center gap-1">
              🇲🇦 Made in Morocco
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

