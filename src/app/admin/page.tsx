'use client'

import { useAdminStore } from '@/store/useAdminStore'
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  XCircle,
  Truck
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const { products, orders } = useAdminStore()

  // Calculate statistics
  const totalProducts = products.length
  const totalOrders = orders.length
  const pendingOrders = orders.filter(o => o.status === 'pending').length
  const totalRevenue = orders
    .filter(o => o.status === 'delivered')
    .reduce((sum, order) => {
      const product = products.find(p => p.id === order.productId)
      return sum + (product?.price || 0)
    }, 0)

  const stats = [
    {
      title: 'Total Produits',
      value: totalProducts,
      icon: Package,
      color: 'bg-blue-500',
      change: '+12%',
      positive: true,
    },
    {
      title: 'Commandes',
      value: totalOrders,
      icon: ShoppingCart,
      color: 'bg-green-500',
      change: '+8%',
      positive: true,
    },
    {
      title: 'En attente',
      value: pendingOrders,
      icon: Clock,
      color: 'bg-orange-500',
      change: '-3%',
      positive: false,
    },
    {
      title: 'Revenus',
      value: `${totalRevenue.toLocaleString()} MAD`,
      icon: DollarSign,
      color: 'bg-gold-500',
      change: '+15%',
      positive: true,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-orange-500" />
      case 'confirmed': return <CheckCircle className="w-4 h-4 text-blue-500" />
      case 'shipped': return <Truck className="w-4 h-4 text-purple-500" />
      case 'delivered': return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'cancelled': return <XCircle className="w-4 h-4 text-red-500" />
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
      case 'pending': return 'bg-orange-100 text-orange-700'
      case 'confirmed': return 'bg-blue-100 text-blue-700'
      case 'shipped': return 'bg-purple-100 text-purple-700'
      case 'delivered': return 'bg-green-100 text-green-700'
      case 'cancelled': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-earth-800">Dashboard</h1>
        <p className="text-earth-500 mt-1">Bienvenue dans votre panneau d'administration</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-earth-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.positive ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-earth-800">{stat.value}</p>
              <p className="text-sm text-earth-500 mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-earth-100">
          <div className="p-6 border-b border-earth-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-earth-800">Commandes récentes</h2>
            <Link 
              href="/admin/orders"
              className="text-sm text-gold-600 hover:text-gold-700 font-medium"
            >
              Voir tout
            </Link>
          </div>
          <div className="divide-y divide-earth-100">
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} className="p-4 hover:bg-sand-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sand-100 flex items-center justify-center">
                      {getStatusIcon(order.status)}
                    </div>
                    <div>
                      <p className="font-medium text-earth-800">{order.productName}</p>
                      <p className="text-sm text-earth-500">{order.customerPhone}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusLabel(order.status)}
                    </span>
                    <p className="text-xs text-earth-400 mt-1">
                      {new Date(order.createdAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-6">
          <h2 className="text-lg font-semibold text-earth-800 mb-4">Actions rapides</h2>
          <div className="space-y-3">
            <Link
              href="/admin/products"
              className="flex items-center gap-3 p-4 rounded-xl bg-sand-50 hover:bg-sand-100 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-blue-500 text-white">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-earth-800 group-hover:text-gold-600 transition-colors">
                  Gérer les produits
                </p>
                <p className="text-sm text-earth-500">{totalProducts} produits</p>
              </div>
            </Link>
            
            <Link
              href="/admin/orders"
              className="flex items-center gap-3 p-4 rounded-xl bg-sand-50 hover:bg-sand-100 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-green-500 text-white">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-earth-800 group-hover:text-gold-600 transition-colors">
                  Voir les commandes
                </p>
                <p className="text-sm text-earth-500">{pendingOrders} en attente</p>
              </div>
            </Link>

            <Link
              href="/admin/settings"
              className="flex items-center gap-3 p-4 rounded-xl bg-sand-50 hover:bg-sand-100 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gold-500 text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-earth-800 group-hover:text-gold-600 transition-colors">
                  Paramètres
                </p>
                <p className="text-sm text-earth-500">Configurer le site</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

