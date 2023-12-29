import React, {useState} from 'react'
import PackageDescription from './PackageDescription'
import QuotationTable from './QuotationTable'

function SEOtable() {
  return (
    <>
    <PackageDescription pricingTitle="Website Development" description="Website development involves the creation and maintenance of websites. By “websites” we mean collection of web pages that are publicly accessible on the internet. Modern website development also includes web applications. Web applications are software packages that run on a web server and are accessed through the internet. On this day and age, companies rely on their websites to attract new customers and communicate with the existing ones. A company website can be used as a tool for inventory management, payment processing, marketing campaigns, customer service, business intelligence gathering, and much more." li1="1) Website Designing" li2="2) Website Development" li3="" tableNote=""/>
    <QuotationTable pricingTitle="Website Development"/>
    </>
  )
}

export default SEOtable