import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero'
import WhyThisCourse from '@/components/why'
import WhatWillYouLearn from '@/components/learn'
import CareerTrajectory from '@/components/career'
import SuccessStories from '@/components/success'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhyThisCourse />
      <WhatWillYouLearn />
      <CareerTrajectory />
      <SuccessStories />
      <Footer />
    </main>
  )
}