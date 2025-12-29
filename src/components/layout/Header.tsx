'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { categories } from '@/lib/products'

export function Header() {
  const { locale, isMenuOpen, toggleMenu, closeMenu } = useStore()
  const t = getLocale(locale)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/products', label: t.products, hasDropdown: true },
    { href: '/about', label: t.about },
    { href: '/contact', label: t.contact },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 z-50"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">د</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold text-earth-800 leading-tight">
                {locale === 'ar' ? 'دار الراحة' : 'Dar Rahati'}
              </span>
              <span className="block text-xs text-earth-500">
                {locale === 'ar' ? 'راحة منزلك' : 'Votre confort'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setShowCategories(true)}
                onMouseLeave={() => link.hasDropdown && setShowCategories(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-earth-700 hover:text-gold-600 font-medium transition-colors link-underline py-2"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Categories Dropdown */}
                {link.hasDropdown && showCategories && (
                  <div className="absolute top-full start-0 mt-0 py-4 w-64 bg-white rounded-xl shadow-xl animate-slide-down">
                    <Link
                      href="/products"
                      className="block px-5 py-2 text-sm text-earth-600 hover:bg-sand-50 hover:text-gold-600 transition-colors"
                    >
                      {t.allProducts}
                    </Link>
                    <div className="h-px bg-sand-200 my-2" />
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="block px-5 py-2 text-sm text-earth-600 hover:bg-sand-50 hover:text-gold-600 transition-colors"
                      >
                        {category.name[locale]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-sand-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-earth-600" />
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-sand-100 transition-colors z-50"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-earth-800" />
              ) : (
                <Menu className="w-6 h-6 text-earth-800" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="container-custom pt-24 pb-8 h-full overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 text-2xl font-medium text-earth-800 hover:text-gold-600 transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ps-4 border-s-2 border-sand-200 mb-4">
                    {categories.map((category, catIndex) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        onClick={closeMenu}
                        className="block py-2 text-lg text-earth-600 hover:text-gold-600 transition-colors animate-slide-up"
                        style={{ animationDelay: `${(index + catIndex + 1) * 50}ms` }}
                      >
                        {category.name[locale]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-8 border-t border-sand-200">
            <a
              href="tel:+212600000000"
              className="block py-2 text-earth-600 hover:text-gold-600"
            >
              +212 600 000 000
            </a>
            <p className="text-sm text-earth-500 mt-4">
              {t.workingHoursValue}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

