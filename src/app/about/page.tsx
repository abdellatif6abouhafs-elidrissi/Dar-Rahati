'use client'

import Image from 'next/image'
import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { Award, Users, Heart, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const { locale } = useStore()
  const t = getLocale(locale)

  const values = [
    {
      icon: Award,
      title: t.qualityFirst,
      description: t.qualityFirstDesc,
      color: 'bg-gold-100 text-gold-600',
    },
    {
      icon: Users,
      title: t.customerFocus,
      description: t.customerFocusDesc,
      color: 'bg-blue-50 text-blue-500',
    },
    {
      icon: Heart,
      title: t.moroccanPride,
      description: t.moroccanPrideDesc,
      color: 'bg-red-50 text-red-500',
    },
  ]

  const stats = [
    { value: '+1000', label: locale === 'ar' ? 'عميل سعيد' : 'Clients satisfaits' },
    { value: '+50', label: locale === 'ar' ? 'منتج متوفر' : 'Produits disponibles' },
    { value: '5', label: locale === 'ar' ? 'سنوات خبرة' : 'Années d\'expérience' },
    { value: '🇲🇦', label: locale === 'ar' ? 'صنع في المغرب' : 'Made in Morocco' },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-sand-100 to-cream overflow-hidden">
        <div className="absolute inset-0 moroccan-bg opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {locale === 'ar' ? 'من نحن' : 'À propos de nous'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
              {t.aboutTitle}
            </h1>
            <p className="text-xl text-earth-600">
              {t.aboutSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
                  alt="Dar Rahati showroom"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -end-6 w-48 h-48 bg-gold-100 rounded-3xl -z-10" />
              <div className="absolute -top-6 -start-6 w-32 h-32 bg-sand-200 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-earth-800">
                {locale === 'ar'
                  ? 'قصتنا مع الراحة والجودة'
                  : 'Notre histoire avec le confort et la qualité'}
              </h2>
              <p className="text-earth-600 leading-relaxed">
                {t.aboutText1}
              </p>
              <p className="text-earth-600 leading-relaxed">
                {t.aboutText2}
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">د</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-earth-800">
                      {locale === 'ar' ? 'دار الراحة' : 'Dar Rahati'}
                    </span>
                    <span className="text-earth-500">
                      {locale === 'ar' ? 'راحة منزلك' : 'Votre confort maison'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-earth-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-earth-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.ourValues}</h2>
            <p className="section-subtitle">
              {locale === 'ar'
                ? 'القيم التي نلتزم بها في كل ما نقدمه'
                : 'Les valeurs auxquelles nous nous engageons dans tout ce que nous offrons'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-earth-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-earth-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              {locale === 'ar' ? 'مهمتنا' : 'Notre mission'}
            </h2>
            <p className="text-xl text-earth-600 leading-relaxed">
              {locale === 'ar'
                ? 'نسعى لتوفير أفضل منتجات الراحة المنزلية للعائلات المغربية، مع الحفاظ على الجودة العالية والأسعار المناسبة. نؤمن بأن الراحة حق للجميع.'
                : 'Nous nous efforçons de fournir les meilleurs produits de confort maison aux familles marocaines, tout en maintenant une haute qualité et des prix abordables. Nous croyons que le confort est un droit pour tous.'}
            </p>
          </div>
        </div>
      </section>

      {/* Moroccan Pride Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-900" />
        <div className="absolute inset-0 moroccan-bg opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {locale === 'ar' ? 'فخر الصناعة المغربية' : 'La fierté de l\'industrie marocaine'}
              </h2>
              <p className="text-earth-300 leading-relaxed mb-6">
                {locale === 'ar'
                  ? 'نفتخر بكوننا علامة تجارية مغربية 100%. نعمل مع حرفيين محليين وموردين مغاربة لدعم الاقتصاد المحلي وتقديم منتجات ذات جودة عالية.'
                  : 'Nous sommes fiers d\'être une marque 100% marocaine. Nous travaillons avec des artisans locaux et des fournisseurs marocains pour soutenir l\'économie locale et offrir des produits de haute qualité.'}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-6xl">🇲🇦</span>
                <div>
                  <span className="block text-xl font-bold text-white">
                    {locale === 'ar' ? 'صنع بفخر في المغرب' : 'Fabriqué avec fierté au Maroc'}
                  </span>
                  <span className="text-earth-400">
                    {locale === 'ar' ? 'جودة مغربية أصيلة' : 'Qualité marocaine authentique'}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-gold-400/30 rounded-3xl rotate-3" />
              <div className="absolute inset-0 border-2 border-gold-400/30 rounded-3xl -rotate-3" />
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80"
                  alt="Moroccan craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

