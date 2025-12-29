'use client'

import { useStore } from '@/store/useStore'
import { getLocale } from '@/lib/locales'
import { generateContactWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp'
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Instagram,
  Facebook,
  Send
} from 'lucide-react'

export default function ContactPage() {
  const { locale } = useStore()
  const t = getLocale(locale)
  const whatsappLink = generateContactWhatsAppLink(locale)

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: locale === 'ar' ? 'تواصل معنا مباشرة' : 'Contactez-nous directement',
      value: '+212 600 000 000',
      action: whatsappLink,
      color: 'bg-[#25D366] text-white',
      actionLabel: t.whatsappContact,
    },
    {
      icon: Phone,
      title: t.phoneNumber,
      description: locale === 'ar' ? 'اتصل بنا' : 'Appelez-nous',
      value: '+212 600 000 000',
      action: 'tel:+212600000000',
      color: 'bg-blue-500 text-white',
      actionLabel: locale === 'ar' ? 'اتصل الآن' : 'Appeler maintenant',
    },
    {
      icon: MapPin,
      title: t.location,
      description: t.locationAddress,
      value: locale === 'ar' ? 'الدار البيضاء، المغرب' : 'Casablanca, Maroc',
      color: 'bg-red-500 text-white',
    },
    {
      icon: Clock,
      title: t.workingHours,
      description: t.workingHoursValue,
      value: '09:00 - 21:00',
      color: 'bg-gold-500 text-white',
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-sand-100 to-cream overflow-hidden">
        <div className="absolute inset-0 moroccan-bg opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
              {t.contactTitle}
            </h1>
            <p className="text-xl text-earth-600">
              {t.contactSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main WhatsApp CTA */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-3xl p-8 md:p-12 text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === 'ar'
                ? 'تواصل معنا عبر واتساب'
                : 'Contactez-nous via WhatsApp'}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {locale === 'ar'
                ? 'أسرع طريقة للتواصل معنا. فريقنا جاهز للإجابة على استفساراتكم ومساعدتكم في اختيار المنتجات المناسبة.'
                : 'Le moyen le plus rapide de nous contacter. Notre équipe est prête à répondre à vos questions et vous aider à choisir les produits adaptés.'}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#25D366] text-lg font-semibold rounded-full hover:bg-white/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6" />
              {t.whatsappContact}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                  <method.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-earth-800 mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-earth-500 mb-3">
                  {method.description}
                </p>
                <p className="text-earth-700 font-medium">
                  {method.value}
                </p>
                {method.action && (
                  <a
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 mt-4 text-sm text-gold-600 font-medium hover:text-gold-700"
                  >
                    {method.actionLabel}
                    <Send className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-earth-800 mb-6">
                {locale === 'ar' ? 'موقعنا' : 'Notre emplacement'}
              </h2>
              <p className="text-earth-600 mb-8">
                {locale === 'ar'
                  ? 'نحن موجودون في قلب الدار البيضاء. يمكنكم زيارتنا أو التواصل معنا عبر واتساب للاستفسار عن منتجاتنا.'
                  : 'Nous sommes situés au cœur de Casablanca. Vous pouvez nous rendre visite ou nous contacter via WhatsApp pour vous renseigner sur nos produits.'}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800">
                      {locale === 'ar' ? 'العنوان' : 'Adresse'}
                    </h4>
                    <p className="text-earth-600">
                      {locale === 'ar'
                        ? 'الدار البيضاء، المغرب'
                        : 'Casablanca, Maroc'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800">
                      {t.workingHours}
                    </h4>
                    <p className="text-earth-600">
                      {t.workingHoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-sand-200">
              <div className="absolute inset-0 flex items-center justify-center bg-earth-100">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-earth-400 mx-auto mb-4" />
                  <p className="text-earth-500">
                    {locale === 'ar' ? 'الدار البيضاء، المغرب' : 'Casablanca, Maroc'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-earth-800 mb-6">
              {t.followUs}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-earth-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {locale === 'ar' ? 'هل لديك سؤال؟' : 'Vous avez une question?'}
            </h2>
            <p className="text-lg text-earth-300 mb-8">
              {locale === 'ar'
                ? 'لا تتردد في التواصل معنا. نحن هنا لمساعدتك في اختيار أفضل المنتجات لراحة منزلك.'
                : 'N\'hésitez pas à nous contacter. Nous sommes là pour vous aider à choisir les meilleurs produits pour le confort de votre maison.'}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-lg font-semibold rounded-full hover:bg-[#1da851] transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              {t.whatsappContact}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

