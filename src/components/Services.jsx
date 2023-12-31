import React, { useState } from 'react'
import DMtable from './DigitalMarketingTable'
import SEOtable from './SEOtable'
import WEBtable from './WEBtable'
import Clients from './Clients'

function Services() {
  const [isDigitalMarkeingPacakageVisible, setDigitalMarkeingPacakageVisible] = useState(false)
  const [isSEOPacakageVisible, setSEOPacakageVisible] = useState(false)
  const [isWebsiteDevelopmentPacakageVisible, setWebsiteDevelopmentPacakageVisible] = useState(false)

  const showDigitalMarketingPackage = () => {
    setDigitalMarkeingPacakageVisible(true)
    document.querySelector("#digitalMarketingPackageButton").style.display = "none"
  }

  const showSEOPackage = () => {
    setSEOPacakageVisible(true)
    document.querySelector("#SEOPackageButton").style.display = "none"
  }

  const showWebsiteDevelopmentPackage = () => {
    setWebsiteDevelopmentPacakageVisible(true)
    document.querySelector("#websiteDevelopmentPackageButton").style.display = "none"
  }


  return (
    <main id="services" className="h-screen w-full px-3  sm:w-4/5 sm:mx-auto md:w-3/4 md:mx-auto lg:w-3/5 lg:mx-auto">
      <section id="intro" className="min-h-screen w-full my-0 relative">
        <div id="imageSection" className="my-10">
          <img src="https://realminfotek.com/wp-content/uploads/2018/11/logo.png" alt="Realm-Logo" className="w-60 mx-auto items-center"/>
        </div>
        <h2 className="text-3xl text-[#F5CB47] text-center font-semibold w-full">REALM INFOTECH <br /> SERVICE PACKAGES</h2>
        <div id="locationInfo" className="text-right text-xl absolute bottom-44 right-5">
          <h3><span className="text-[#2C2A73] font-semibold">Presented By:</span> Realm Infotech</h3>
          <h3>1st Floor, Siddhartha Bank</h3>
          <h3>Patan Dhoka, Lalitpur, Kathmandu</h3>
          <h3>9851056649 | 9841700314</h3>
        </div>
      </section> 

      <section id="overview" className="min-h-screen mt-0 pt-0">
        <div>
          <h3 className="text-3xl mb-3 text-[#2C2A73]">REALM INFOTECH SERVICE PACKAGES</h3>
          <p className="text-lg pb-10 bt-5">REALM INFOTECH PROVIDES YOU THE BEST DIGITAL MARKETING SERVICES IN NEPAL. GROW YOUR BUSINESS WITH US AT THE BEST PRICE!</p>
        </div>
        <div className="border-t-2 border-t-[#F5CB47]">
          <h3 className="text-3xl mb-3 text-[#F5CB47]">OVERVIEW</h3>
          <p className="text-lg pt-10 pb-3">
            Describe your objective. With the advancements in technology and changing trend of searching and occurrence of new sources of marketing; like personalized web content, utility driven website, dedicated social media channel, companies need to switch from traditional marketing source to modern source that can deliver value of the company to the right people.
          </p>
          <p className="text-lg pt-3 pb-10">
            Digital media can encourage people to learn about the company, it helps to communicate in a social way. And the best part is people always love to engage socially. With proper content strategy, right targeting, shouting at the right occasion, digital media can create huge impact in attracting, maintaining and retaining customer for growth sellers and at the same time it continuously keeps on building social relation with public at large unlike traditional media.
          </p>
        </div>
        <div className="border-t-2 border-t-[#F5CB47]">
          <h3 className="text-3xl mb-3 text-[#F5CB47] pb-10">SERVICES</h3>
          <h2 className="text-lg mb-3 text-[#2C2A73]">THESE ARE SOME OF THE SERVICES THAT WE PROVIDE AT REALM INFOTECH.</h2>
          <table className="text-center border-2 border-[#F5CB47] w-full h-40">
            <thead className="border-2 border-[#F5CB47]">
              <tr>
                <th className="border-2 border-[#F5CB47] py-3 w-1/4">S.N.</th>
                <th className="border-2 border-[#F5CB47] py-2 text-left pl-3">SERVICE</th>
              </tr>
            </thead>
            <tbody className="border-2 border-[#F5CB47] text-lg">
              <tr>
                <td className="border-2 border-[#F5CB47] py-3 w-1/4">1</td>
                <td className="border-2 border-[#F5CB47] py-2 text-left pl-3">DIGITAL MARKETING</td>
              </tr>
              <tr>
                <td className="border-2 border-[#F5CB47] py-3 w-1/4">2</td>
                <td className="border-2 border-[#F5CB47] py-2 text-left pl-3">SEARCH ENGINE OPTIMIZATIONS (SEO)</td>
              </tr>
              <tr>
                <td className="border-2 border-[#F5CB47] py-3 w-1/4">3</td>
                <td className="border-2 border-[#F5CB47] py-2 text-left pl-3">WEBSITE DEVELOPMENT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="ourClients" className="min-h-screen w-full mt-10">
        <Clients />
      </section>

      <button type="button" 
        className="w-auto px-2 py-3 border-2 text-lg rounded-xl text-white bg-cyan-500 border-cyan-500 hover:bg-inherit hover:text-cyan-500 hover:border-gray-400 font-semibold outline-none mt-5 mr-4"
        id="digitalMarketingPackageButton"
        onClick={showDigitalMarketingPackage}>Add Digital Marketing Package</button>
        
       

      {isDigitalMarkeingPacakageVisible ? <section id="digitalMarketing" className="min-h-screen w-full">
        <DMtable />
      </section> : null}

      <button type="button" 
        className="w-auto px-2 py-3 border-2 text-lg rounded-xl text-white bg-cyan-500 border-cyan-500 hover:bg-inherit hover:text-cyan-500 hover:border-gray-400 font-semibold outline-none mt-5  mr-4"
        id="SEOPackageButton"
        onClick={showSEOPackage}>Add SEO Package</button>

      {isSEOPacakageVisible ? <section id="seo" className="min-h-screen">
        <SEOtable />
      </section> : null}

      <button type="button"
        className="w-auto px-2 py-3 border-2 text-lg rounded-xl text-white bg-cyan-500 border-cyan-500 hover:bg-inherit hover:text-cyan-500 hover:border-gray-400 font-semibold outline-none mt-5  mr-4"
        id="websiteDevelopmentPackageButton"
        onClick={showWebsiteDevelopmentPackage}>Add Website Development Package</button>

      {isWebsiteDevelopmentPacakageVisible ? <section id="websiteDevelopment" className="min-h-screen">
        <WEBtable />
      </section> : null}
    </main>
  )
}

export default Services
