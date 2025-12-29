import type { Metadata } from 'next'
import { ClientLayout } from '@/components/layout/ClientLayout'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Dar Rahati | دار الراحة - Premium Home Comfort',
    template: '%s | Dar Rahati'
  },
  description: 'Discover premium Moroccan home furnishing products - mattresses, blankets, pillows, bed sheets, and carpets. Quality comfort for your home. اكتشف منتجات الراحة المنزلية المغربية الفاخرة',
  keywords: [
    'moroccan home furnishing',
    'mattresses morocco',
    'blankets morocco',
    'pillows morocco',
    'bed sheets morocco',
    'carpets morocco',
    'فرش النوم المغرب',
    'أغطية المغرب',
    'وسائد المغرب',
    'ملاءات السرير',
    'سجاد مغربي',
    'matelas maroc',
    'couvertures maroc',
    'oreillers maroc',
    'draps maroc',
    'tapis marocain'
  ],
  authors: [{ name: 'Dar Rahati' }],
  creator: 'Dar Rahati',
  publisher: 'Dar Rahati',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dar-rahati.ma'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-MA': '/ar',
      'fr-MA': '/fr',
    },
  },
  openGraph: {
    title: 'Dar Rahati | دار الراحة',
    description: 'Premium Moroccan Home Furnishing - Mattresses, Blankets, Pillows, Bed Sheets, Carpets',
    url: 'https://dar-rahati.ma',
    siteName: 'Dar Rahati',
    locale: 'ar_MA',
    alternateLocale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dar Rahati - Premium Home Comfort',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dar Rahati | دار الراحة',
    description: 'Premium Moroccan Home Furnishing Products',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#544737" />
      </head>
      <body className="custom-scrollbar">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

