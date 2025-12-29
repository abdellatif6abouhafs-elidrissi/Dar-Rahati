'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { formatPrice } from '@/lib/utils'
import { Heart, ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { locale } = useStore()
  const t = getLocale(locale)

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercentage = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group card card-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
        <Image
          src={product.images[0]}
          alt={product.name[locale]}
          fill
          className="object-cover img-zoom"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={index < 4}
          unoptimized
        />
        
        {/* Badges */}
        <div className="absolute top-3 start-3 flex flex-col gap-2">
          {hasDiscount && (
            <span className="px-3 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
              -{discountPercentage}%
            </span>
          )}
          {product.new && (
            <span className="px-3 py-1 text-xs font-bold bg-gold-500 text-white rounded-full">
              {locale === 'ar' ? 'جديد' : 'Nouveau'}
            </span>
          )}
          {product.bestSeller && (
            <span className="px-3 py-1 text-xs font-bold bg-earth-700 text-white rounded-full">
              {locale === 'ar' ? 'الأكثر مبيعاً' : 'Best-seller'}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 end-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-sand-50 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              // Add to wishlist functionality
            }}
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 text-earth-600" />
          </button>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/10 transition-colors duration-300" />

        {/* Quick view button */}
        <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <span className="flex items-center justify-center gap-2 w-full py-3 bg-white/95 backdrop-blur-sm text-earth-800 text-sm font-medium rounded-full hover:bg-white transition-colors">
            <ShoppingBag className="w-4 h-4" />
            {locale === 'ar' ? 'عرض المنتج' : 'Voir le produit'}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-earth-800 mb-2 line-clamp-1 group-hover:text-gold-600 transition-colors">
          {product.name[locale]}
        </h3>
        
        <p className="text-sm text-earth-500 mb-3 line-clamp-2">
          {product.description[locale]}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-earth-800">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-earth-500">{t.currency}</span>
            {hasDiscount && (
              <span className="text-sm text-earth-400 line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>
          
          {!product.inStock && (
            <span className="text-xs text-red-500 font-medium">
              {t.outOfStock}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

