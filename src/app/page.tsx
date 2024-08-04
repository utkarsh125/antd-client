import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default page