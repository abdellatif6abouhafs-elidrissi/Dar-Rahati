'use client'

import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { getFeaturedProducts } from '@/lib/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { ArrowRight, ArrowLeft, Star } from 'lucide-react'

export function FeaturedProducts() {
  const { locale } = useStore()
  const t = getLocale(locale)
  const products = getFeaturedProducts()
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-sand-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-gold-500" />
            </div>
            <div>
              <h2 className="section-title mb-0">{t.featured}</h2>
              <p className="text-earth-600">
                {locale === 'ar'
                  ? 'اختياراتنا المميزة لهذا الموسم'
                  : 'Nos sélections phares de cette saison'}
              </p>
            </div>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors group"
          >
            {t.viewAll}
            <Arrow className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

