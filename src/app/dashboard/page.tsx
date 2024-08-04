"use client"

import DashboardPage from '../components/DashboardPage'
import { Provider } from 'react-redux'
import React from 'react'
import TopView from '../components/TopView'
import { store } from '../redux/store'

const page = () => {
  return (
    <div>
        <TopView />
        <Provider store={store}>
          <DashboardPage />
        </Provider>
        
    </div>
  )
}

export default page