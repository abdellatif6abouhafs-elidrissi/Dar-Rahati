export type Locale = 'ar' | 'fr'

export type Direction = 'rtl' | 'ltr'

export interface Product {
  id: string
  slug: string
  category: CategorySlug
  images: string[]
  price: number
  originalPrice?: number
  inStock: boolean
  featured?: boolean
  bestSeller?: boolean
  new?: boolean
  sizes?: string[]
  materials?: string[]
  name: {
    ar: string
    fr: string
  }
  description: {
    ar: string
    fr: string
  }
  details?: {
    ar: string[]
    fr: string[]
  }
}

export type CategorySlug = 'mattresses' | 'blankets' | 'pillows' | 'bedsheets' | 'carpets'

export interface Category {
  slug: CategorySlug
  image: string
  name: {
    ar: string
    fr: string
  }
  description: {
    ar: string
    fr: string
  }
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedMaterial?: string
}

export interface WhatsAppMessage {
  productName: string
  price: number
  size?: string
  material?: string
  locale: Locale
}

