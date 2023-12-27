import React from 'react'
import DMtable from './DigitalMarketingTable'
import SEOtable from './SEOtable'
import WEBtable from './WEBtable'
import Clients from './Clients'

function Services() {
  return (
    <main id="services" className="relative -z-10 pt-36 h-screen px-32">
      <section id="intro" className="h-screen">
        <div id="imageSection">
          <img src="https://realminfotek.com/wp-content/uploads/2018/11/logo.png" alt="Realm-Logo" className="h-74n w-96 mx-auto items-center"/>
          <h2 className="text-5xl text-[#F5CB47] my-20 text-center">REALM INFOTECH <br /> SERVICE PACKAGES</h2>
        </div>
        <div id="locationInfo" className="absolute right-32 bottom-14 text-right">
          <h3 className="text-2xl"><span className="text-[#2C2A73] font-semibold">Presented By:</span> Realm Infotech</h3>
          <h3 className="text-2xl">1st Floor, Siddhartha Bank</h3>
          <h3 className="text-2xl">Patan Dhoka, Lalitpur, Kathmandu</h3>
          <h3 className="text-2xl">9851056649 | 9841700314</h3>
        </div>
      </section> 

      <section id="overview" className="h-screen">
        <div>
          <h3 className="text-3xl mb-3 text-[#2C2A73]">REALM INFOTECH SERVICE PACKAGES</h3>
          <p className="text-xl pb-10 bt-5">REALM INFOTECH PROVIDES YOU THE BEST DIGITAL MARKETING SERVICES IN NEPAL. GROW YOUR BUSINESS WITH US AT THE BEST PRICE!</p>
        </div>
        <div className="border-t-2 border-t-[#F5CB47]">
          <h3 className="text-3xl mb-3 text-[#F5CB47]">OVERVIEW</h3>
          <p className="text-xl pt-10 pb-3">
            Describe your objective. With the advancements in technology and changing trend of searching and occurrence of new sources of marketing; like personalized web content, utility driven website, dedicated social media channel, companies need to switch from traditional marketing source to modern source that can deliver value of the company to the right people.
          </p>
          <p className="text-xl pt-3 pb-10">
            Digital media can encourage people to learn about the company, it helps to communicate in a social way. And the best part is people always love to engage socially. With proper content strategy, right targeting, shouting at the right occasion, digital media can create huge impact in attracting, maintaining and retaining customer for growth sellers and at the same time it continuously keeps on building social relation with public at large unlike traditional media.
          </p>
        </div>
        <div className="border-t-2 border-t-[#F5CB47]">
          <h3 className="text-3xl mb-3 text-[#F5CB47] pb-10">SERVICES</h3>
          <h2 className="text-2xl mb-3 text-[#2C2A73]">THESE ARE SOME OF THE SERVICES THAT WE PROVIDE AT REALM INFOTECH.</h2>
          <table className="text-center border-2 border-[#F5CB47] w-4/5 h-40">
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

      <section id="ourClients">
        <Clients />
      </section>

      <section id="digitalMarketing" className="h-screen">
        <DMtable />
      </section>

      <section id="seo" className="h-screen">
        <SEOtable />
      </section>

      <section id="websiteDevelopment" className="h-screen">
        <WEBtable />
      </section>
    </main>
  )
}

export default Services
