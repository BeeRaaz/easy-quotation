import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const Print = () => {
        let printableDiv = document.querySelector("#quotationContainer").innerHTML
        let originalContent = document.body.innerHTML
        document.body.innerHTML = printableDiv
        window.print()
        document.body.innerHTML = originalContent
      }
      

  return (
    <nav className="flex justify-between mb-10 items-center content-center px-40">
        <div id="navLeft" className="flex gap-20">
            <NavLink to={"/digital-marketing-pricing"}><h2 className="text-2xl font-normal hover:text-gray-700">Digital Marketing</h2></NavLink>
            <NavLink to={"/seo-pricing"}><h2 className="text-2xl font-normal hover:text-gray-700">SEO</h2></NavLink>
            <NavLink to={"/website-development-pricing"}><h2 className="text-2xl font-normal hover:text-gray-700">Website</h2></NavLink>
        </div>
        <div id="navRight">
            <button className="w-auto px-5 py-2 border-2 mx-auto mt-8" onClick={Print}><img width="30" height="30" src="https://img.icons8.com/ios/50/print--v1.png" alt="print--v1"/></button>
        </div>
    </nav>
  )
}

export default Navbar
