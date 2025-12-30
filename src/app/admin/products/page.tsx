'use client'

import { useState } from 'react'
import { useAdminStore } from '@/store/useAdminStore'
import Image from 'next/image'
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  MoreVertical,
  Package,
  Filter
} from 'lucide-react'
import Link from 'next/link'

export default function AdminProductsPage() {
  const { products, deleteProduct, categories } = useAdminStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null)

  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.name.ar.includes(searchQuery)
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDelete = (id: string) => {
    deleteProduct(id)
    setShowDeleteModal(null)
  }

  const getCategoryName = (slug: string) => {
    const category = categories.find(c => c.slug === slug)
    return category?.name.fr || slug
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-earth-800">Produits</h1>
          <p className="text-earth-500 mt-1">{products.length} produits au total</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold-500 hover:bg-gold-600 text-earth-900 font-medium rounded-xl transition-colors"
        >
          <Plus className="w-5 h-5" />
          Ajouter un produit
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-12 pr-8 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none appearance-none bg-white min-w-[180px]"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name.fr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-earth-100 p-12 text-center">
          <Package className="w-16 h-16 text-earth-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-earth-800 mb-2">Aucun produit trouvé</h3>
          <p className="text-earth-500 mb-6">
            {searchQuery || selectedCategory !== 'all' 
              ? 'Essayez de modifier vos filtres de recherche'
              : 'Commencez par ajouter votre premier produit'}
          </p>
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 hover:bg-gold-600 text-earth-900 font-medium rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            Ajouter un produit
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-earth-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-sand-50 border-b border-earth-100">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-earth-600">Produit</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-earth-600">Catégorie</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-earth-600">Prix</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-earth-600">Stock</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-earth-600">Statut</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-earth-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-earth-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-sand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-sand-100 flex-shrink-0">
                          <Image
                            src={product.images[0]}
                            alt={product.name.fr}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="font-medium text-earth-800">{product.name.fr}</p>
                          <p className="text-sm text-earth-500">{product.name.ar}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-sand-100 text-earth-700">
                        {getCategoryName(product.category)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-earth-800">{product.price.toLocaleString()} MAD</p>
                        {product.originalPrice && (
                          <p className="text-sm text-earth-400 line-through">
                            {product.originalPrice.toLocaleString()} MAD
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        product.inStock 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.inStock ? 'En stock' : 'Rupture'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {product.featured && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gold-100 text-gold-700">
                            Vedette
                          </span>
                        )}
                        {product.bestSeller && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
                            Best-seller
                          </span>
                        )}
                        {product.new && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">
                            Nouveau
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="p-2 text-earth-500 hover:text-gold-600 hover:bg-sand-100 rounded-lg transition-colors"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => setShowDeleteModal(product.id)}
                          className="p-2 text-earth-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-earth-800 mb-2">
              Supprimer le produit?
            </h3>
            <p className="text-earth-500 mb-6">
              Cette action est irréversible. Le produit sera définitivement supprimé.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="flex-1 px-4 py-2.5 border border-earth-200 text-earth-700 rounded-xl hover:bg-sand-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(showDeleteModal)}
                className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

