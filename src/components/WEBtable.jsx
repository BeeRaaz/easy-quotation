import React, {useState} from 'react'
import PackageDescription from './PackageDescription'
import QuotationTable from './QuotationTable'

function SEOtable() {
  return (
    <>
    <PackageDescription pricingTitle="Website Development" description="Website development involves the creation and maintenance of websites. By “websites” we mean collection of web pages that are publicly accessible on the internet. Modern website development also includes web applications. Web applications are software packages that run on a web server and are accessed through the internet.
On this day and age, companies rely on their websites to attract new customers and communicate with the existing ones. A company website can be used as a tool for inventory management, payment processing, marketing campaigns, customer service, business intelligence gathering, and much more.
" li1="1)	On-Page SEO: It refers to actions taken to optimizing elements on your websites to improve your site’s ranking in search engines." li2="2)	Off-Page SEO: It refers to actions taken outside of your websites to impact your site’s ranking in search engines." li3="3)	Technical SEO: It refers to the optimizations of websites and servers to help search engine crawlers index your website efficiency to boost organic rankings." tableNote=""/>
    <QuotationTable pricingTitle="Website Development"/>
    </>
  )
}

export default SEOtable