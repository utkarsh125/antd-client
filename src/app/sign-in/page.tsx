import { Form } from 'antd'
import Navbar from '../components/Navbar'
import React from 'react'
import SignHero from '../components/SignHero'
import SignNav from '../components/SignNav'
import TopView from '../components/TopView'

const page = () => {
  return (
    <div className=''>
      {/* <TopView /> */}
      <SignNav />
      <SignHero />
    </div>
  )
}

export default page