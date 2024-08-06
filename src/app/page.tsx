import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import React from 'react'
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page