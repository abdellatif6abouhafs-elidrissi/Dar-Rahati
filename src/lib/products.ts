import { Product, Category, CategorySlug } from '@/types'

export const categories: Category[] = [
  {
    slug: 'mattresses',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    name: { ar: 'فرش النوم', fr: 'Matelas' },
    description: {
      ar: 'فرش مريحة لنوم هادئ وصحي',
      fr: 'Matelas confortables pour un sommeil paisible et sain'
    }
  },
  {
    slug: 'blankets',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80',
    name: { ar: 'الأغطية', fr: 'Couvertures' },
    description: {
      ar: 'أغطية دافئة وناعمة لليالي الباردة',
      fr: 'Couvertures chaudes et douces pour les nuits froides'
    }
  },
  {
    slug: 'pillows',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80',
    name: { ar: 'الوسائد', fr: 'Oreillers' },
    description: {
      ar: 'وسائد مريحة لدعم الرقبة والرأس',
      fr: 'Oreillers confortables pour soutenir le cou et la tête'
    }
  },
  {
    slug: 'bedsheets',
    image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80',
    name: { ar: 'ملاءات السرير', fr: 'Draps' },
    description: {
      ar: 'ملاءات قطنية فاخرة بتصاميم عصرية',
      fr: 'Draps en coton de luxe avec des designs modernes'
    }
  },
  {
    slug: 'carpets',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80',
    name: { ar: 'السجاد', fr: 'Tapis' },
    description: {
      ar: 'سجاد أنيق لمسة من الفخامة',
      fr: 'Tapis élégants pour une touche de luxe'
    }
  }
]

export const products: Product[] = [
  // Mattresses
  {
    id: '1',
    slug: 'premium-orthopedic-mattress',
    category: 'mattresses',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    ],
    price: 3500,
    originalPrice: 4200,
    inStock: true,
    featured: true,
    bestSeller: true,
    sizes: ['140x190', '160x200', '180x200'],
    materials: ['Memory Foam', 'Latex'],
    name: {
      ar: 'فرشة طبية ممتازة',
      fr: 'Matelas Orthopédique Premium'
    },
    description: {
      ar: 'فرشة طبية عالية الجودة مصممة لتوفير الدعم الأمثل للعمود الفقري. مصنوعة من أجود أنواع الفوم الطبي لراحة استثنائية طوال الليل.',
      fr: 'Matelas orthopédique de haute qualité conçu pour fournir un soutien optimal à la colonne vertébrale. Fabriqué avec la meilleure mousse médicale pour un confort exceptionnel toute la nuit.'
    },
    details: {
      ar: ['ضمان 10 سنوات', 'مضاد للحساسية', 'تهوية ممتازة', 'صناعة مغربية'],
      fr: ['Garantie 10 ans', 'Anti-allergique', 'Excellente ventilation', 'Fabrication marocaine']
    }
  },
  {
    id: '2',
    slug: 'comfort-plus-mattress',
    category: 'mattresses',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    ],
    price: 2800,
    inStock: true,
    sizes: ['140x190', '160x200'],
    name: {
      ar: 'فرشة كومفورت بلس',
      fr: 'Matelas Comfort Plus'
    },
    description: {
      ar: 'فرشة مريحة بتصميم عصري توفر الراحة المثالية لنوم هادئ',
      fr: 'Matelas confortable au design moderne pour un sommeil paisible'
    }
  },
  {
    id: '3',
    slug: 'natural-latex-mattress',
    category: 'mattresses',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    ],
    price: 4500,
    inStock: true,
    new: true,
    sizes: ['160x200', '180x200'],
    materials: ['Natural Latex'],
    name: {
      ar: 'فرشة لاتكس طبيعي',
      fr: 'Matelas en Latex Naturel'
    },
    description: {
      ar: 'فرشة من اللاتكس الطبيعي 100% لتجربة نوم صحية ومريحة',
      fr: 'Matelas en latex 100% naturel pour une expérience de sommeil saine et confortable'
    }
  },
  // Blankets
  {
    id: '4',
    slug: 'luxury-wool-blanket',
    category: 'blankets',
    images: [
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80',
    ],
    price: 850,
    originalPrice: 1100,
    inStock: true,
    featured: true,
    bestSeller: true,
    sizes: ['150x200', '200x220', '220x240'],
    materials: ['صوف طبيعي / Laine naturelle', 'صوف مخلوط / Laine mélangée'],
    name: {
      ar: 'غطاء صوف فاخر',
      fr: 'Couverture en Laine Luxe'
    },
    description: {
      ar: 'غطاء صوف فاخر مصنوع من أجود أنواع الصوف الطبيعي، يوفر الدفء المثالي في ليالي الشتاء الباردة',
      fr: 'Couverture en laine de luxe fabriquée avec la meilleure laine naturelle, offrant une chaleur idéale pendant les nuits froides d\'hiver'
    },
    details: {
      ar: ['صوف طبيعي 100%', 'قابل للغسل', 'خفيف الوزن', 'ألوان ثابتة'],
      fr: ['100% laine naturelle', 'Lavable', 'Léger', 'Couleurs résistantes']
    }
  },
  {
    id: '5',
    slug: 'soft-fleece-blanket',
    category: 'blankets',
    images: [
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80',
    ],
    price: 450,
    inStock: true,
    sizes: ['150x200', '200x220'],
    name: {
      ar: 'غطاء فليس ناعم',
      fr: 'Couverture Polaire Douce'
    },
    description: {
      ar: 'غطاء فليس ناعم وخفيف مثالي للاسترخاء',
      fr: 'Couverture polaire douce et légère idéale pour se détendre'
    }
  },
  // Pillows
  {
    id: '6',
    slug: 'memory-foam-pillow',
    category: 'pillows',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80',
    ],
    price: 350,
    originalPrice: 450,
    inStock: true,
    bestSeller: true,
    sizes: ['Standard', 'King'],
    name: {
      ar: 'وسادة ميموري فوم',
      fr: 'Oreiller Memory Foam'
    },
    description: {
      ar: 'وسادة من الفوم الطبي تتكيف مع شكل الرأس والرقبة لدعم مثالي',
      fr: 'Oreiller en mousse à mémoire qui s\'adapte à la forme de la tête et du cou pour un soutien idéal'
    },
    details: {
      ar: ['فوم طبي عالي الجودة', 'غطاء قابل للغسل', 'مضاد للحساسية'],
      fr: ['Mousse médicale de haute qualité', 'Housse lavable', 'Anti-allergique']
    }
  },
  {
    id: '7',
    slug: 'cotton-pillow-set',
    category: 'pillows',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80',
    ],
    price: 280,
    inStock: true,
    featured: true,
    name: {
      ar: 'طقم وسائد قطنية',
      fr: 'Set d\'Oreillers en Coton'
    },
    description: {
      ar: 'طقم من وسادتين قطنيتين ناعمتين ومريحتين',
      fr: 'Set de deux oreillers en coton doux et confortables'
    }
  },
  // Bedsheets
  {
    id: '8',
    slug: 'egyptian-cotton-sheets',
    category: 'bedsheets',
    images: [
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80',
    ],
    price: 650,
    inStock: true,
    featured: true,
    bestSeller: true,
    sizes: ['160x200', '180x200', '200x200'],
    materials: ['قطن مصري / Coton égyptien'],
    name: {
      ar: 'ملاءات قطن مصري',
      fr: 'Draps en Coton Égyptien'
    },
    description: {
      ar: 'ملاءات من القطن المصري الفاخر بنعومة استثنائية وجودة عالية',
      fr: 'Draps en coton égyptien de luxe avec une douceur exceptionnelle et une haute qualité'
    },
    details: {
      ar: ['قطن مصري 100%', '400 خيط', 'ألوان متعددة', 'سهل الكي'],
      fr: ['100% coton égyptien', '400 fils', 'Plusieurs couleurs', 'Facile à repasser']
    }
  },
  {
    id: '9',
    slug: 'satin-bedsheet-set',
    category: 'bedsheets',
    images: [
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80',
    ],
    price: 550,
    inStock: true,
    new: true,
    sizes: ['160x200', '180x200'],
    name: {
      ar: 'طقم ملاءات ساتان',
      fr: 'Set de Draps en Satin'
    },
    description: {
      ar: 'طقم ملاءات ساتان فاخر بلمسة حريرية ناعمة',
      fr: 'Set de draps en satin de luxe avec une touche soyeuse et douce'
    }
  },
  // Carpets
  {
    id: '10',
    slug: 'moroccan-berber-carpet',
    category: 'carpets',
    images: [
      'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80',
    ],
    price: 2200,
    originalPrice: 2800,
    inStock: true,
    featured: true,
    bestSeller: true,
    sizes: ['120x180', '160x230', '200x300'],
    materials: ['صوف طبيعي / Laine naturelle'],
    name: {
      ar: 'سجادة أمازيغية أصيلة',
      fr: 'Tapis Berbère Authentique'
    },
    description: {
      ar: 'سجادة أمازيغية مصنوعة يدوياً من الصوف الطبيعي، تجسد الفن المغربي الأصيل',
      fr: 'Tapis berbère fait main en laine naturelle, incarnant l\'art marocain authentique'
    },
    details: {
      ar: ['صناعة يدوية', 'صوف طبيعي 100%', 'تصميم تقليدي', 'قطعة فريدة'],
      fr: ['Fait main', '100% laine naturelle', 'Design traditionnel', 'Pièce unique']
    }
  },
  {
    id: '11',
    slug: 'modern-geometric-rug',
    category: 'carpets',
    images: [
      'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80',
    ],
    price: 1500,
    inStock: true,
    new: true,
    sizes: ['120x180', '160x230'],
    name: {
      ar: 'سجادة هندسية عصرية',
      fr: 'Tapis Géométrique Moderne'
    },
    description: {
      ar: 'سجادة بتصميم هندسي عصري تناسب الديكور الحديث',
      fr: 'Tapis au design géométrique moderne adapté à la décoration contemporaine'
    }
  },
  {
    id: '12',
    slug: 'shaggy-comfort-rug',
    category: 'carpets',
    images: [
      'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80',
    ],
    price: 980,
    inStock: true,
    sizes: ['120x180', '160x230'],
    name: {
      ar: 'سجادة شاجي مريحة',
      fr: 'Tapis Shaggy Confortable'
    },
    description: {
      ar: 'سجادة شاجي ناعمة ومريحة للأقدام',
      fr: 'Tapis shaggy doux et confortable pour les pieds'
    }
  }
]

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.bestSeller)
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.new)
}

export function getCategoryBySlug(slug: CategorySlug): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}

