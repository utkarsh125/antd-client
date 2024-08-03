import Hero from './components/Hero'
import Navbar from './components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <hr  className='my-3'/>
      <Hero />
    </div>
  )
}

export default page