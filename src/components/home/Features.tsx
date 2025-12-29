'use client'

import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { Award, Truck, MessageCircle, Heart } from 'lucide-react'

export function Features() {
  const { locale } = useStore()
  const t = getLocale(locale)

  const features = [
    {
      icon: Award,
      title: t.premiumQuality,
      description: t.premiumQualityDesc,
      color: 'bg-gold-100 text-gold-600',
    },
    {
      icon: Heart,
      title: t.moroccanCraft,
      description: t.moroccanCraftDesc,
      color: 'bg-red-50 text-red-500',
    },
    {
      icon: Truck,
      title: t.fastDelivery,
      description: t.fastDeliveryDesc,
      color: 'bg-blue-50 text-blue-500',
    },
    {
      icon: MessageCircle,
      title: t.easyOrder,
      description: t.easyOrderDesc,
      color: 'bg-green-50 text-green-500',
    },
  ]

  return (
    <section className="py-20 bg-earth-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 moroccan-bg opacity-5" />
      <div className="absolute top-0 start-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.whyChooseUs}
          </h2>
          <p className="text-lg text-earth-300 max-w-2xl mx-auto">
            {locale === 'ar'
              ? 'نقدم لكم أفضل تجربة تسوق لمنتجات الراحة المنزلية'
              : 'Nous vous offrons la meilleure expérience d\'achat pour les produits de confort maison'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-earth-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

