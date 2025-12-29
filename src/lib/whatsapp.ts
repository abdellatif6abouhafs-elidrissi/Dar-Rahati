import { Locale, WhatsAppMessage } from '@/types'

// Replace with your actual WhatsApp business number
export const WHATSAPP_NUMBER = '212600000000'

export function generateWhatsAppLink(message: WhatsAppMessage): string {
  const { productName, price, size, material, locale } = message
  
  let text = ''
  
  if (locale === 'ar') {
    text = `مرحباً! أريد طلب المنتج التالي:

📦 المنتج: ${productName}
💰 السعر: ${price} درهم`
    
    if (size) {
      text += `\n📐 المقاس: ${size}`
    }
    
    if (material) {
      text += `\n🏷️ الخامة: ${material}`
    }
    
    text += `\n\nشكراً لكم!`
  } else {
    text = `Bonjour! Je souhaite commander le produit suivant:

📦 Produit: ${productName}
💰 Prix: ${price} MAD`
    
    if (size) {
      text += `\n📐 Taille: ${size}`
    }
    
    if (material) {
      text += `\n🏷️ Matière: ${material}`
    }
    
    text += `\n\nMerci!`
  }
  
  const encodedText = encodeURIComponent(text)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`
}

export function generateContactWhatsAppLink(locale: Locale): string {
  const text = locale === 'ar' 
    ? 'مرحباً! أريد الاستفسار عن منتجاتكم.'
    : 'Bonjour! Je souhaite me renseigner sur vos produits.'
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

