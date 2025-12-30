'use client'

import { useState } from 'react'
import { useAdminStore } from '@/store/useAdminStore'
import { 
  Search, 
  Filter,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  Phone,
  MessageCircle,
  ChevronDown
} from 'lucide-react'

type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus, products } = useAdminStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerPhone.includes(searchQuery)
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'confirmed': return <CheckCircle className="w-4 h-4" />
      case 'shipped': return <Truck className="w-4 h-4" />
      case 'delivered': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <XCircle className="w-4 h-4" />
      default: return null
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente'
      case 'confirmed': return 'Confirmée'
      case 'shipped': return 'Expédiée'
      case 'delivered': return 'Livrée'
      case 'cancelled': return 'Annulée'
      default: return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'confirmed': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'shipped': return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200'
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const statusOptions: { value: OrderStatus; label: string }[] = [
    { value: 'pending', label: 'En attente' },
    { value: 'confirmed', label: 'Confirmée' },
    { value: 'shipped', label: 'Expédiée' },
    { value: 'delivered', label: 'Livrée' },
    { value: 'cancelled', label: 'Annulée' },
  ]

  const getProductPrice = (productId: string) => {
    const product = products.find(p => p.id === productId)
    return product?.price || 0
  }

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    updateOrderStatus(orderId, newStatus)
    setOpenDropdown(null)
  }

  const stats = [
    { label: 'Toutes', value: 'all', count: orders.length, color: 'bg-earth-100 text-earth-700' },
    { label: 'En attente', value: 'pending', count: orders.filter(o => o.status === 'pending').length, color: 'bg-orange-100 text-orange-700' },
    { label: 'Confirmées', value: 'confirmed', count: orders.filter(o => o.status === 'confirmed').length, color: 'bg-blue-100 text-blue-700' },
    { label: 'Expédiées', value: 'shipped', count: orders.filter(o => o.status === 'shipped').length, color: 'bg-purple-100 text-purple-700' },
    { label: 'Livrées', value: 'delivered', count: orders.filter(o => o.status === 'delivered').length, color: 'bg-green-100 text-green-700' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-earth-800">Commandes</h1>
        <p className="text-earth-500 mt-1">Gérez les commandes WhatsApp</p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-3">
        {stats.map((stat) => (
          <button
            key={stat.value}
            onClick={() => setStatusFilter(stat.value)}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              statusFilter === stat.value
                ? 'bg-gold-500 text-earth-900 shadow-md'
                : `${stat.color} hover:opacity-80`
            }`}
          >
            {stat.label} ({stat.count})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
        <input
          type="text"
          placeholder="Rechercher par produit ou téléphone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
        />
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-2xl border border-earth-100 p-12 text-center">
          <MessageCircle className="w-16 h-16 text-earth-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-earth-800 mb-2">Aucune commande trouvée</h3>
          <p className="text-earth-500">
            Les commandes passées via WhatsApp apparaîtront ici
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-earth-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Order Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-800">{order.productName}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-earth-500">
                        <span className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {order.customerPhone}
                        </span>
                        {order.size && (
                          <span className="px-2 py-0.5 bg-sand-100 rounded">
                            Taille: {order.size}
                          </span>
                        )}
                        {order.material && (
                          <span className="px-2 py-0.5 bg-sand-100 rounded">
                            {order.material}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-earth-400 mt-2">
                        {new Date(order.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-lg font-bold text-earth-800">
                      {getProductPrice(order.productId).toLocaleString()} MAD
                    </p>
                  </div>

                  {/* Status Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === order.id ? null : order.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-medium transition-colors ${getStatusColor(order.status)}`}
                    >
                      {getStatusIcon(order.status)}
                      {getStatusLabel(order.status)}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === order.id ? 'rotate-180' : ''}`} />
                    </button>

                    {openDropdown === order.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-earth-100 py-2 z-10">
                        {statusOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleStatusChange(order.id, option.value)}
                            className={`w-full px-4 py-2 text-left hover:bg-sand-50 transition-colors flex items-center gap-2 ${
                              order.status === option.value ? 'bg-sand-50 font-medium' : ''
                            }`}
                          >
                            {getStatusIcon(option.value)}
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${order.customerPhone.replace(/\s/g, '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

