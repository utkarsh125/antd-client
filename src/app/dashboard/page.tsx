"use client"

import DashboardPage from '../components/DashboardPage'
import { Provider } from 'react-redux'
import React from 'react'
import TopView from '../components/TopView'
import { store } from '../redux/store'

const page = () => {
  return (
    <Provider store={store}>
      <TopView />
      <DashboardPage />
    </Provider>
  )
}

export default page