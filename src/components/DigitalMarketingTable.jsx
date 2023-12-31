import React, {useState} from 'react'
import PackageDescription from './PackageDescription'
import QuotationTable from './QuotationTable'
import Clients from './Clients'

function DMtable() {
   
   
  return (
    <>
      <PackageDescription pricingTitle="Digital Marketing" description="Digital marketing, or online marketing is a form of marketing that leverages the internet and digital technologies, such as computers and smartphones, to connect with the customers." li1="1)	Email Marketing" li2="2)	Social Media Marketing" li3="3)	Advertising in different digital medias" tableNote="As we know, social media marketing is a continuous process so it should be carried every month to reach the potential customers."/>
      <QuotationTable id="firstQuotationTableForm" pricingTitle="Digital Marketing"/>
    </>
    
  )
}

export default DMtable


