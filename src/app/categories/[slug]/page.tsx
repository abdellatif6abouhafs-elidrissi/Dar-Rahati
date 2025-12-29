'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { getCategoryBySlug, getProductsByCategory, categories } from '@/lib/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { CategorySlug } from '@/types'

export default function CategoryPage() {
  const params = useParams()
  const { locale } = useStore()
  const t = getLocale(locale)
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default')

  const category = getCategoryBySlug(params.slug as CategorySlug)
  const allProducts = category ? getProductsByCategory(category.slug) : []

  const sortedProducts = useMemo(() => {
    let result = [...allProducts]
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }
    return result
  }, [allProducts, sortBy])

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-earth-800 mb-4">
            {locale === 'ar' ? 'الفئة غير موجودة' : 'Catégorie non trouvée'}
          </h1>
          <Link href="/products" className="btn-primary">
            {locale === 'ar' ? 'العودة للمنتجات' : 'Retour aux produits'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name[locale]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/50 to-earth-900/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">
                {t.home}
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white">
                {t.products}
              </Link>
              <span>/</span>
              <span className="text-white">{category.name[locale]}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name[locale]}
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              {category.description[locale]}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                cat.slug === category.slug
                  ? 'bg-earth-800 text-white'
                  : 'bg-white text-earth-600 hover:bg-sand-100'
              }`}
            >
              {cat.name[locale]}
            </Link>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <p className="text-earth-600">
            {sortedProducts.length} {locale === 'ar' ? 'منتج' : 'produits'}
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-4 py-2 bg-white rounded-lg shadow-sm border-0 text-earth-700 focus:ring-2 focus:ring-gold-500"
          >
            <option value="default">
              {locale === 'ar' ? 'الترتيب الافتراضي' : 'Tri par défaut'}
            </option>
            <option value="price-low">
              {locale === 'ar' ? 'السعر: من الأقل للأعلى' : 'Prix: croissant'}
            </option>
            <option value="price-high">
              {locale === 'ar' ? 'السعر: من الأعلى للأقل' : 'Prix: décroissant'}
            </option>
          </select>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-earth-500 text-lg">
              {locale === 'ar'
                ? 'لا توجد منتجات في هذه الفئة بعد'
                : 'Aucun produit dans cette catégorie pour le moment'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

