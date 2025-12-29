'use client'

import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { getBestSellers } from '@/lib/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export function BestSellers() {
  const { locale } = useStore()
  const t = getLocale(locale)
  const products = getBestSellers()
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">{t.bestSellers}</h2>
            <p className="text-earth-600 max-w-md">
              {locale === 'ar'
                ? 'منتجاتنا الأكثر طلباً من عملائنا الكرام'
                : 'Nos produits les plus demandés par nos chers clients'}
            </p>
          </div>
          <Link
            href="/products?filter=bestseller"
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

