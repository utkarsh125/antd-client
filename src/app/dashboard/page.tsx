import DashboardPage from '../components/DashboardPage'
import React from 'react'
import TopView from '../components/TopView'

const page = () => {
  return (
    <div>
        <TopView />
        <hr  className='my-3'/>
        <DashboardPage />
    </div>
  )
}

export default page