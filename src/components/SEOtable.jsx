import React from 'react'
import PackageDescription from './PackageDescription'
import QuotationTable from './QuotationTable'

function SEOtable() {
  return (
    <>
    <PackageDescription pricingTitle="SEO" description="Search Engine Optimization, or SEO, is the process of improving a website’s visibility in search engine results pages (SERPs). It is also known as online content optimization or online presence optimization. In order to improve organic (non-paid) traffic to a website, SEO must increase its relevance and authority in the eyes of search engines like Google, Bing, and Brave." li1="1)	On-Page SEO: It refers to actions taken to optimizing elements on your websites to improve your site’s ranking in search engines." li2="2)	Off-Page SEO: It refers to actions taken outside of your websites to impact your site’s ranking in search engines." li3="3)	Technical SEO: It refers to the optimizations of websites and servers to help search engine crawlers index your website efficiency to boost organic rankings." tableNote=""/>
    <QuotationTable pricingTitle="SEO"/>
    </>
  )
}

export default SEOtable
