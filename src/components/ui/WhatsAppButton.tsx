
'use client'

import { MessageCircle } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { generateContactWhatsAppLink } from '@/lib/whatsapp'

interface WhatsAppButtonProps {
  floating?: boolean
  className?: string
}

export function WhatsAppButton({ floating = false, className = '' }: WhatsAppButtonProps) {
  const { locale } = useStore()
  const link = generateContactWhatsAppLink(locale)

  if (floating) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 end-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float ${className}`}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -start-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
      </a>
    )
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{locale === 'ar' ? 'تواصل معنا' : 'Contactez-nous'}</span>
    </a>
  )
}

