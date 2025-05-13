import AboutWhatWeDo from '@/components/about/about-what-we-do'
import AboutWhyChooseUs from '@/components/about/about-why-choose-us'
import CallToAction from '@/components/about/call-to-action'
import AboutHero from '@/components/about/hero'
import OurGoal from '@/components/about/our-goal'
import OurValues from '@/components/about/our-values'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <AboutWhatWeDo />
      <OurGoal />
      <OurValues />
      <AboutWhyChooseUs />
      <CallToAction />
    </div>
  )
}

export default AboutUsPage
