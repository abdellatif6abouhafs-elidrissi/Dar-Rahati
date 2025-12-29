'use client'

import { useState, useMemo } from 'react'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { products, categories } from '@/lib/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { CategorySlug } from '@/types'
import { Filter, Grid, LayoutGrid, SlidersHorizontal } from 'lucide-react'

export default function ProductsPage() {
  const { locale } = useStore()
  const t = getLocale(locale)
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | 'all'>('all')
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-b from-sand-100 to-cream py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-earth-800 mb-4">{t.products}</h1>
          <p className="text-earth-600 max-w-2xl">
            {locale === 'ar'
              ? 'اكتشف مجموعتنا الكاملة من منتجات الراحة المنزلية الفاخرة'
              : 'Découvrez notre collection complète de produits de confort maison de luxe'}
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-earth-800 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                {t.categories}
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-start px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-gold-100 text-gold-700 font-medium'
                        : 'text-earth-600 hover:bg-sand-50'
                    }`}
                  >
                    {t.allProducts}
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.slug}>
                    <button
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-start px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.slug
                          ? 'bg-gold-100 text-gold-700 font-medium'
                          : 'text-earth-600 hover:bg-sand-50'
                      }`}
                    >
                      {category.name[locale]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-earth-600">
                {filteredProducts.length} {locale === 'ar' ? 'منتج' : 'produits'}
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>{locale === 'ar' ? 'فلترة' : 'Filtrer'}</span>
                </button>

                {/* Sort */}
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
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden bg-white rounded-2xl p-6 mb-6 shadow-sm animate-slide-down">
                <h3 className="text-lg font-semibold text-earth-800 mb-4">{t.categories}</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-gold-500 text-white'
                        : 'bg-sand-100 text-earth-600 hover:bg-sand-200'
                    }`}
                  >
                    {t.allProducts}
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedCategory === category.slug
                          ? 'bg-gold-500 text-white'
                          : 'bg-sand-100 text-earth-600 hover:bg-sand-200'
                      }`}
                    >
                      {category.name[locale]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-earth-500 text-lg">
                  {locale === 'ar'
                    ? 'لا توجد منتجات في هذه الفئة'
                    : 'Aucun produit dans cette catégorie'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

