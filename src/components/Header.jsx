import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PackageDescription from './PackageDescription'

function Navbar() {

  const [isNavMenuVisible, setNavMenuVisible] = useState(false)

  const Print = () => {
    // let nonPrintableDiv = document.querySelectorAll("#formContainer")
    // nonPrintableDiv.classList.toggle("hidden")
    let originalContent = document.body.innerHTML
    let printableDiv = document.querySelector("#services").innerHTML
    document.body.innerHTML = printableDiv
    window.print()
    document.body.innerHTML = originalContent
  }

    const showNavMenu = () => {
      setNavMenuVisible(!isNavMenuVisible)
      let servicesSection = document.querySelector("#services")
      servicesSection.classList.toggle("hidden")
    }      


  return (
    // <nav className="flex justify-between mb-10 items-center content-center px-40">
    //     <div id="navLeft" className="flex gap-20">
    //         <NavLink to={"/digital-marketing-pricing"}><h2 className="text-2xl font-normal hover:text-gray-700">Digital Marketing</h2></NavLink>
    //         <NavLink to={"/seo-pricing"}><h2 className="text-2xl font-normal hover:text-gray-700">SEO</h2></NavLink>
    //         <NavLink to={"/website-development-pricing"}><h2 className="text-2xl font-normal hover:text-gray-700">Website</h2></NavLink>
    //     </div>
    //     <div id="navRight">
    //         <button className="w-auto px-5 py-2 border-2 mx-auto mt-8" onClick={Print}><img width="30" height="30" src="https://img.icons8.com/ios/50/print--v1.png" alt="print--v1"/></button>
    //     </div>
    // </nav>
  <>
    <header id="header" className="text-2xl w-full flex flex-wrap justify-between items-center py-4 px-32 h-32 absolute">
      <div id="headerLeft"><img src="https://realminfotek.com/wp-content/uploads/2018/11/logo.png" alt="Realm-Logo" className="h-24 w-32"/></div>
      <div  id="headerRight" className="flex flex-wrap justify-center items-center gap-10 ">
      {isNavMenuVisible ? null : <div id="headerMiddle">
        <button className="w-auto px-4 py-2 border-2 border-zinc-500" onClick={Print}><img width="30" height="30" src="https://img.icons8.com/ios/50/print--v1.png" alt="print--v1"/></button>
        </div> }
        {isNavMenuVisible ? <img width="60" height="60" src="https://img.icons8.com/ios/50/multiply.png" alt="multiply" className="cursor-pointer" onClick={showNavMenu}/> : <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" className="cursor-pointer" onClick={showNavMenu}/>}
      </div>
    </header>

    {isNavMenuVisible ? <nav className="relative h-screen -z-10 ">
      <NavLink 
      to={"/services"}
      className={({isActive}) => `font-semibold ${isActive ? "text-[#F5CB47]" : "text-[#2C2A73]" }`}>
        <h2 className="text-6xl absolute right-32 bottom-20 ">SERVICES</h2>
      </NavLink>
    </nav> : null}
    
  </>
  )
}

export default Navbar
