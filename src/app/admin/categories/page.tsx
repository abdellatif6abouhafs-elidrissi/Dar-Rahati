'use client'

import { useAdminStore } from '@/store/useAdminStore'
import Image from 'next/image'
import { 
  FolderOpen,
  Package,
  Eye
} from 'lucide-react'
import Link from 'next/link'

export default function AdminCategoriesPage() {
  const { categories, products } = useAdminStore()

  const getProductCount = (categorySlug: string) => {
    return products.filter(p => p.category === categorySlug).length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-earth-800">Catégories</h1>
        <p className="text-earth-500 mt-1">{categories.length} catégories disponibles</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="bg-white rounded-2xl border border-earth-100 overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name.fr}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white">{category.name.fr}</h3>
                <p className="text-white/80 text-sm">{category.name.ar}</p>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <p className="text-earth-600 text-sm mb-4 line-clamp-2">
                {category.description.fr}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-earth-500">
                  <Package className="w-5 h-5" />
                  <span className="font-medium">{getProductCount(category.slug)} produits</span>
                </div>

                <Link
                  href={`/categories/${category.slug}`}
                  target="_blank"
                  className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium text-sm"
                >
                  <Eye className="w-4 h-4" />
                  Voir
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-sand-50 rounded-2xl p-6 border border-sand-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gold-100 rounded-xl">
            <FolderOpen className="w-6 h-6 text-gold-600" />
          </div>
          <div>
            <h3 className="font-semibold text-earth-800 mb-1">Gestion des catégories</h3>
            <p className="text-earth-600 text-sm">
              Les catégories sont prédéfinies pour votre boutique de produits de confort. 
              Pour ajouter ou modifier une catégorie, contactez le développeur ou modifiez 
              le fichier <code className="bg-white px-2 py-0.5 rounded">src/lib/products.ts</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

