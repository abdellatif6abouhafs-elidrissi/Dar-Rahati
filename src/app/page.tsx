import { Hero } from '@/components/home/Hero'
import { Categories } from '@/components/home/Categories'
import { BestSellers } from '@/components/home/BestSellers'
import { Features } from '@/components/home/Features'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { CTA } from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <Features />
      <FeaturedProducts />
      <CTA />
    </>
  )
}

