import Hero from '@/components/home/hero'
import HeroCarosuel from '@/components/home/hero-carousel'
import Services from '@/components/home/services'
import Solutions from '@/components/home/solutions'
import LogoCarousel from '@/components/home/sponsors-section'
import Stats from '@/components/home/stats'
import Testimonials from '@/components/home/testimonials'
import WhatWeDo from '@/components/home/what-we-do'
import WhyChooseUs from '@/components/home/why-choose-us'

const HomePage = () => {
  return (
    <div className="max-md:px-2">
      <HeroCarosuel />
      <WhatWeDo />
      <WhyChooseUs />
      <Services />
      <Stats />
      <LogoCarousel />
      <Solutions />
      <Hero />
      <Testimonials />
    </div>
  )
}

export default HomePage
