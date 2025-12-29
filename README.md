# Dar Rahati - دار الراحة

A premium Moroccan e-commerce website specialized in home furnishing products (mattresses, blankets, pillows, bed sheets, carpets). Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Bilingual Support**: Arabic (RTL) and French (LTR) with seamless language switching
- **WhatsApp Integration**: Order directly via WhatsApp with pre-filled messages
- **Mobile-First Design**: Optimized for mobile users (80% of target audience)
- **Modern Moroccan Aesthetic**: Warm colors, elegant typography, and subtle patterns
- **SEO Optimized**: Full meta tags, structured data, and SEO-friendly URLs
- **Fast Performance**: Optimized images, minimal JavaScript, and efficient builds

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Image Optimization**: Next/Image

## 📦 Product Categories

- Mattresses (فرش النوم / Matelas)
- Blankets (الأغطية / Couvertures)
- Pillows (الوسائد / Oreillers)
- Bed Sheets (ملاءات السرير / Draps)
- Carpets (السجاد / Tapis)

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── products/          # Products listing & details
│   ├── categories/        # Category pages
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/
│   ├── home/              # Home page components
│   ├── layout/            # Header, Footer, Layout
│   └── ui/                # Reusable UI components
├── lib/
│   ├── locales.ts         # Translations (AR/FR)
│   ├── products.ts        # Product data
│   └── whatsapp.ts        # WhatsApp utilities
├── store/
│   └── useStore.ts        # Zustand store
└── types/
    └── index.ts           # TypeScript types
```

## 🎨 Design System

### Colors
- **Sand**: Warm beige tones (#FDFCFA - #3D3322)
- **Gold**: Accent colors (#D4A84B)
- **Earth**: Deep browns (#544737)
- **Cream**: Background (#FBF9F6)

### Typography
- **Arabic**: Noto Kufi Arabic, Amiri
- **French**: Cormorant Garamond, Playfair Display

## 🔧 Configuration

### WhatsApp Number
Update the WhatsApp number in `src/lib/whatsapp.ts`:
```typescript
export const WHATSAPP_NUMBER = '212XXXXXXXXX'
```

### Adding Products
Add new products in `src/lib/products.ts` following the Product interface.

## 📱 Pages

1. **Home**: Hero, categories, best sellers, features, CTA
2. **Products**: All products with filtering and sorting
3. **Product Details**: Gallery, options, WhatsApp order button
4. **Categories**: Category-specific product listings
5. **About**: Brand story, values, mission
6. **Contact**: WhatsApp CTA, contact info, location

## 🌍 Localization

The website supports:
- **Arabic (ar)**: RTL layout, Arabic typography
- **French (fr)**: LTR layout, French typography

Language can be switched via the header language switcher.

## 📈 SEO

- Comprehensive meta tags
- Open Graph and Twitter cards
- Structured data ready
- SEO-friendly URLs
- Bilingual content optimization

## 🚢 Deployment

Ready for deployment on Vercel:

```bash
npm run build
```

Or connect your repository to Vercel for automatic deployments.

## 📞 Business Logic

- **Morocco Only**: Targeting Moroccan customers
- **No Online Payment**: Orders via WhatsApp only
- **WhatsApp Messages**: Auto-filled with product details, price, and selected options

## 🔮 Future Enhancements

- Admin panel for product management
- Inventory management
- Customer reviews
- Wishlist functionality
- Order tracking

---

Made with ❤️ in Morocco 🇲🇦

