import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
// import 


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App


