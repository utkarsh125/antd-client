"use client"

import Dashboard from '../components/Dashboard'
import DashboardPage from '../components/DashboardPage'
import { Provider } from 'react-redux'
import React from 'react'
import TopView from '../components/TopView'
import { store } from '../redux/store'

const page = () => {
  return (
    <Provider store={store}>
      <TopView />
      {/* <DashboardPage /> */}
      <Dashboard />
    </Provider>
  )
}

export default page