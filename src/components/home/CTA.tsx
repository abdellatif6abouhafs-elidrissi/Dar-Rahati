'use client'

import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export function CTA() {
  const { locale } = useStore()
  const t = getLocale(locale)
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-sand-200 via-sand-100 to-cream rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 moroccan-bg opacity-30" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 end-0 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 start-0 w-64 h-64 bg-sand-300/50 rounded-full blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 mb-6 max-w-3xl mx-auto text-balance">
              {locale === 'ar'
                ? 'هل تبحث عن الراحة المثالية لمنزلك؟'
                : 'Vous cherchez le confort parfait pour votre maison?'}
            </h2>
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
              {locale === 'ar'
                ? 'تواصل معنا عبر واتساب للحصول على استشارة مجانية واختيار المنتجات المناسبة لك'
                : 'Contactez-nous via WhatsApp pour une consultation gratuite et choisissez les produits qui vous conviennent'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <WhatsAppButton />
              <Link href="/products" className="btn-secondary group">
                {t.discoverCollection}
                <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

