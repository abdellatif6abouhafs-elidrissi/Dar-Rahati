'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'

export function Hero() {
  const { locale } = useStore()
  const t = getLocale(locale)
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-bg opacity-50" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream" />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/50 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-20 end-10 w-72 h-72 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 start-10 w-96 h-96 bg-sand-300/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{locale === 'ar' ? 'جودة مغربية أصيلة' : 'Qualité marocaine authentique'}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-earth-800 mb-6 leading-tight text-balance">
              {t.heroTitle}
            </h1>
            
            <p className="text-xl text-earth-600 mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary group">
                {t.shopNow}
                <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link href="/categories/mattresses" className="btn-secondary">
                {t.discoverCollection}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <span className="block text-3xl font-bold text-earth-800">+1000</span>
                <span className="text-sm text-earth-500">
                  {locale === 'ar' ? 'عميل سعيد' : 'Clients satisfaits'}
                </span>
              </div>
              <div className="w-px h-12 bg-sand-300" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-earth-800">100%</span>
                <span className="text-sm text-earth-500">
                  {locale === 'ar' ? 'جودة مضمونة' : 'Qualité garantie'}
                </span>
              </div>
              <div className="w-px h-12 bg-sand-300" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-earth-800">🇲🇦</span>
                <span className="text-sm text-earth-500">
                  {locale === 'ar' ? 'صنع بالمغرب' : 'Made in Morocco'}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-in animate-delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-gold-400/30 rounded-3xl" />
              
              {/* Main image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
                  alt="Luxury bedroom setup"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/20 to-transparent" />
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-6 -start-6 bg-white rounded-2xl p-4 shadow-lg animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛏️</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-earth-800">
                      {locale === 'ar' ? 'فرش فاخرة' : 'Matelas luxe'}
                    </span>
                    <span className="text-xs text-earth-500">
                      {locale === 'ar' ? 'ابتداءً من 2800 درهم' : 'À partir de 2800 MAD'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -end-6 bg-white rounded-2xl p-4 shadow-lg animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sand-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-earth-800">
                      {locale === 'ar' ? 'جودة ممتازة' : 'Qualité premium'}
                    </span>
                    <span className="text-xs text-earth-500">
                      {locale === 'ar' ? 'ضمان 10 سنوات' : 'Garantie 10 ans'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-earth-500">
          {locale === 'ar' ? 'اكتشف المزيد' : 'Découvrir plus'}
        </span>
        <div className="w-6 h-10 border-2 border-earth-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-earth-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

