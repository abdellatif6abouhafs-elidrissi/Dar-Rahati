'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { getProductBySlug, getRelatedProducts, getCategoryBySlug } from '@/lib/products'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { ProductCard } from '@/components/ui/ProductCard'
import { formatPrice } from '@/lib/utils'
import { 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight,
  Check,
  Truck,
  Shield,
  RotateCcw,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'

export default function ProductPage() {
  const params = useParams()
  const { locale } = useStore()
  const t = getLocale(locale)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedMaterial, setSelectedMaterial] = useState<string>('')

  const product = getProductBySlug(params.slug as string)
  const Arrow = locale === 'ar' ? ArrowRight : ArrowLeft

  useEffect(() => {
    if (product?.sizes?.length) {
      setSelectedSize(product.sizes[0])
    }
    if (product?.materials?.length) {
      setSelectedMaterial(product.materials[0])
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-earth-800 mb-4">
            {locale === 'ar' ? 'المنتج غير موجود' : 'Produit non trouvé'}
          </h1>
          <Link href="/products" className="btn-primary">
            {locale === 'ar' ? 'العودة للمنتجات' : 'Retour aux produits'}
          </Link>
        </div>
      </div>
    )
  }

  const category = getCategoryBySlug(product.category)
  const relatedProducts = getRelatedProducts(product)
  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercentage = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0

  const whatsappLink = generateWhatsAppLink({
    productName: product.name[locale],
    price: product.price,
    size: selectedSize,
    material: selectedMaterial,
    locale,
  })

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-earth-500 hover:text-gold-600">
              {t.home}
            </Link>
            <span className="text-earth-300">/</span>
            <Link href="/products" className="text-earth-500 hover:text-gold-600">
              {t.products}
            </Link>
            {category && (
              <>
                <span className="text-earth-300">/</span>
                <Link
                  href={`/categories/${category.slug}`}
                  className="text-earth-500 hover:text-gold-600"
                >
                  {category.name[locale]}
                </Link>
              </>
            )}
            <span className="text-earth-300">/</span>
            <span className="text-earth-700 font-medium">{product.name[locale]}</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm">
              <Image
                src={product.images[selectedImage]}
                alt={product.name[locale]}
                fill
                className="object-cover"
                priority
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute start-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-earth-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute end-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-earth-700" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 start-4 flex flex-col gap-2">
                {hasDiscount && (
                  <span className="px-3 py-1 text-sm font-bold bg-red-500 text-white rounded-full">
                    -{discountPercentage}%
                  </span>
                )}
                {product.new && (
                  <span className="px-3 py-1 text-sm font-bold bg-gold-500 text-white rounded-full">
                    {locale === 'ar' ? 'جديد' : 'Nouveau'}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-gold-500 ring-offset-2'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name[locale]} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category */}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="inline-block text-sm text-gold-600 font-medium hover:text-gold-700"
              >
                {category.name[locale]}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-earth-800">
              {product.name[locale]}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-earth-800">
                {formatPrice(product.price)}
              </span>
              <span className="text-lg text-earth-500">{t.currency}</span>
              {hasDiscount && (
                <span className="text-xl text-earth-400 line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-green-600 font-medium">{t.inStock}</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-red-600 font-medium">{t.outOfStock}</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-earth-600 leading-relaxed">
              {product.description[locale]}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-3">
                  {t.size}
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? 'border-gold-500 bg-gold-50 text-gold-700'
                          : 'border-sand-200 text-earth-600 hover:border-sand-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Material Selection */}
            {product.materials && product.materials.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-3">
                  {t.material}
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedMaterial === material
                          ? 'border-gold-500 bg-gold-50 text-gold-700'
                          : 'border-sand-200 text-earth-600 hover:border-sand-400'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp Order Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white text-lg font-semibold rounded-xl hover:bg-[#1da851] transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-6 h-6" />
              {t.orderViaWhatsapp}
            </a>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sand-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-sand-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-earth-600" />
                </div>
                <span className="text-xs text-earth-600">
                  {locale === 'ar' ? 'توصيل لكل المغرب' : 'Livraison au Maroc'}
                </span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sand-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-earth-600" />
                </div>
                <span className="text-xs text-earth-600">
                  {locale === 'ar' ? 'جودة مضمونة' : 'Qualité garantie'}
                </span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sand-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="w-6 h-6 text-earth-600" />
                </div>
                <span className="text-xs text-earth-600">
                  {locale === 'ar' ? 'استرجاع سهل' : 'Retour facile'}
                </span>
              </div>
            </div>

            {/* Product Details */}
            {product.details && (
              <div className="pt-6 border-t border-sand-200">
                <h3 className="text-lg font-semibold text-earth-800 mb-4">
                  {t.details}
                </h3>
                <ul className="space-y-2">
                  {product.details[locale].map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-earth-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-earth-800 mb-8">
              {t.relatedProducts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

