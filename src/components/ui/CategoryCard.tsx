'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@/types'
import { useStore } from '@/store/useStore'
import { ArrowRight, ArrowLeft } from 'lucide-react'

interface CategoryCardProps {
  category: Category
  index?: number
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const { locale } = useStore()
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative aspect-[4/5] rounded-2xl overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background Image */}
      <Image
        src={category.image}
        alt={category.name[locale]}
        fill
        className="object-cover img-zoom"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={index < 5}
        unoptimized
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
          {category.name[locale]}
        </h3>
        <p className="text-white/80 text-sm mb-4 line-clamp-2">
          {category.description[locale]}
        </p>
        <div className="flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all">
          <span>{locale === 'ar' ? 'تصفح المجموعة' : 'Explorer la collection'}</span>
          <Arrow className="w-4 h-4" />
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 rounded-2xl transition-colors duration-300" />
    </Link>
  )
}

