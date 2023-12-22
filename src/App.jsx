import React, { useState } from 'react'
import SEOtable from './components/SEOtable'
import WEBtable from './components/WEBtable'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import DMtable from './components/DMTable'
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


