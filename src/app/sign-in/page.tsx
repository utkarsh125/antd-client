import { Form } from 'antd'
import React from 'react'
import SignHero from '../components/SignHero'
import TopView from '../components/TopView'

const page = () => {
  return (
    <div className=''>
      <TopView />
      <hr  className='my-3'/>
      <SignHero />
    </div>
  )
}

export default page