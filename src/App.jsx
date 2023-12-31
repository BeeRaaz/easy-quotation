import React, { useState } from 'react'
import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import Services from './components/Services'



function App() {
  
  return (
    <>
      <Header />
      <Services />
    </>
  )
}

export default App


