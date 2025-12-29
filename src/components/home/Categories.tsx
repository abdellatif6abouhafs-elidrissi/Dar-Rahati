'use client'

import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { categories } from '@/lib/products'
import { CategoryCard } from '@/components/ui/CategoryCard'

export function Categories() {
  const { locale } = useStore()
  const t = getLocale(locale)

  return (
    <section className="py-20 bg-sand-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">{t.categories}</h2>
          <p className="section-subtitle">
            {locale === 'ar'
              ? 'اكتشف مجموعتنا المتنوعة من منتجات الراحة المنزلية'
              : 'Découvrez notre gamme variée de produits de confort pour la maison'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

