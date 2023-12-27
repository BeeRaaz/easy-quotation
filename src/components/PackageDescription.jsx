import React from 'react'

function PackageDescription({pricingTitle, description, li1, li2, li3, tableNote}) {
  return (
    <>
    <div className="border-t-2 border-t-[#F5CB47]">
        <h3 className="text-3xl mb-3 text-[#F5CB47] pb-10">{pricingTitle.toUpperCase()} PROPOSAL</h3>
        <p className="text-xl pt-3 pb-5">
            {description}   
        </p> 
        <p className="text-xl pt-3 pb-3">
            {pricingTitle} includes:
        </p> 
        <ol type="1" className="text-xl pb-10">
            <li className="pt-2">{li1}</li>
            <li className="pt-2">{li2}</li>
            <li className="pt-2">{li3}</li>
        </ol>      
    </div>

    <div className="border-t-2 border-t-[#F5CB47]">
        <h3 className="text-3xl mb-3 text-[#F5CB47] pb-10">{pricingTitle.toUpperCase()} PACKAGE</h3>
    </div>

    <div>
        <h2 className="text-xl mb-2">{tableNote}</h2>
    </div>
    </>
  )
}

export default PackageDescription
