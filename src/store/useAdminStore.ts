'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, Category } from '@/types'
import { products as initialProducts, categories as initialCategories } from '@/lib/products'

interface Order {
  id: string
  productId: string
  productName: string
  customerPhone: string
  size?: string
  material?: string
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  notes?: string
}

interface AdminState {
  isAuthenticated: boolean
  products: Product[]
  categories: Category[]
  orders: Order[]
  
  // Auth
  login: (email: string, password: string) => boolean
  logout: () => void
  
  // Products
  addProduct: (product: Product) => void
  updateProduct: (id: string, product: Partial<Product>) => void
  deleteProduct: (id: string) => void
  
  // Orders
  addOrder: (order: Order) => void
  updateOrderStatus: (id: string, status: Order['status']) => void
  deleteOrder: (id: string) => void
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      products: initialProducts,
      categories: initialCategories,
      orders: [
        {
          id: '1',
          productId: '1',
          productName: 'فرشة طبية ممتازة',
          customerPhone: '+212 600 123 456',
          size: '160x200',
          material: 'Memory Foam',
          status: 'pending',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          productId: '4',
          productName: 'غطاء صوف فاخر',
          customerPhone: '+212 600 789 012',
          size: '200x220',
          status: 'confirmed',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: '3',
          productId: '6',
          productName: 'وسادة ميموري فوم',
          customerPhone: '+212 600 345 678',
          size: 'Standard',
          status: 'delivered',
          createdAt: new Date(Date.now() - 172800000).toISOString(),
        },
      ],

      login: (email: string, password: string) => {
        if (email === 'admin@darrahati.ma' && password === 'admin123') {
          set({ isAuthenticated: true })
          return true
        }
        return false
      },

      logout: () => {
        set({ isAuthenticated: false })
      },

      addProduct: (product: Product) => {
        set((state) => ({
          products: [...state.products, product],
        }))
      },

      updateProduct: (id: string, updatedProduct: Partial<Product>) => {
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...updatedProduct } : p
          ),
        }))
      },

      deleteProduct: (id: string) => {
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        }))
      },

      addOrder: (order: Order) => {
        set((state) => ({
          orders: [...state.orders, order],
        }))
      },

      updateOrderStatus: (id: string, status: Order['status']) => {
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === id ? { ...o, status } : o
          ),
        }))
      },

      deleteOrder: (id: string) => {
        set((state) => ({
          orders: state.orders.filter((o) => o.id !== id),
        }))
      },
    }),
    {
      name: 'admin-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        products: state.products,
        orders: state.orders,
      }),
    }
  )
)

