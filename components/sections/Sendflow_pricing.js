

import Link from "next/link"
import { useState } from "react"
export default function Sendflow_pricing() {
    const [isPricing, setPricing] = useState(false)
    const handlePricing = () => setPricing(!isPricing)
    return (
        <>
            <section id="pricing-1" className=" py-100 pricing-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-45 w-700 mb-3">Affordable Plans for Every Business </h2>
                                <p className="color--grey">Choose a SendFlow plan that fits your needs, with no hidden fees and full access to powerful email marketing tools.</p>
                                {/* TOGGLE BUTTON */}
                           
                            </div>
                        </div>
                    </div>	{/* END SECTION TITLE */}
                    {/* PRICING TABLES */}
                    <div className="pricing-1-wrapper">
                        <div className="row row-cols-1 row-cols-md-3">
                            {/* STARTER PLAN */}
                            <div className="col">
                                <div id="pt-1-1" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                       
                                        <h5 className="s-24 w-700">Starter  </h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/*
                                            <sup className="color--black">$</sup>
                                            <span className="color--black">0</span>
                                            <sup className="validity color--grey">/ forever</sup>*/}
                                            <p className="color--grey">Perfect for small businesses and startups looking to launch professional email campaigns..</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04   btn--green-400   hover--green-400">View Pricing </Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    
                                                <li><p><span className="flaticon-check" /> Self-hosted installation</p></li>
                                                <li><p><span className="flaticon-check" /> Drag & drop email builder </p></li>
                                                <li><p><span className="flaticon-check" /> Basic automation workflows</p></li>
                                                <li><p><span className="flaticon-check" /> SMTP integration</p></li>
                                                <li><p><span className="flaticon-check" /> Delivery tracking & reports </p></li>
                                                <li><p><span className="flaticon-check" /> Email verification support</p></li>
                                                <li><p><span className="flaticon-check" /> 24/7 email support</p></li>
                                    </ul>
                                </div>
                            </div>	{/* END STARTER PLAN */}
                              {/* Pro PLAN */}
                              <div className="col">
                                <div id="pt-1-1" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24 w-700"> Pro</h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/*
                                            <sup className="color--black">$</sup>
                                            <span className="color--black">0</span>
                                            <sup className="validity color--grey">/ forever</sup>*/}
                                            <p className="color--grey">Ideal for growing businesses and agencies needing advanced automation and integrations.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04  btn--green-400   hover--green-400">View Pricing</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> Everything in Starter</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced automation triggers </p></li>
                                                <li><p><span className="flaticon-check" /> Custom tracking domain</p></li>
                                                <li><p><span className="flaticon-check" /> Zapier integration</p></li>
                                                <li><p><span className="flaticon-check" /> RSS & YouTube widgets </p></li>
                                                <li><p><span className="flaticon-check" /> GDPR compliance tools</p></li>
                                                <li><p><span className="flaticon-check" /> Priority email support</p></li>
                                                <li><p><span className="flaticon-check" /> SaaS platform features</p></li>
                                                
                                    </ul>
                                </div>
                            </div>	{/* END Pro PLAN */}
                            {/* BASIC PLAN */}
                            <div className="col">
                                <div id="pt-1-2" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24">Enterprise   </h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/* Monthly Price */}
                                            {/*
                                            {isPricing ? <div className="price1">
                                                <sup className="color--black">$</sup>
                                                <span className="color--black">142.75</span>
                                                <sup className="validity color--grey">/ yr</sup>
                                                {/* Discount Badge */}
                                              {/*   <div className="pricing-discount bg--yellow-400 color--black r-36">
                                                    <h6 className="s-17">Save 30%</h6>
                                                </div>
                                            </div> : <div className="price2">
                                                <sup className="color--black">$</sup>
                                                <span className="color--black">16.99</span>
                                                <sup className="validity color--grey">/ mo</sup>
                                            </div>}   

                                            {/* Yearly Price */}

                                            {/* Text */}
                                            <p className="color--grey">Designed for large-scale campaigns and developers with API and distributed deployment needs.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04   btn--green-400 color-white  hover--green-400">View Pricing</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Everything in Pro</p></li>
                                        <li><p><span className="flaticon-check" /> REST API access</p></li>
                                        <li><p><span className="flaticon-check" /> Distributed deployment support</p></li>
                                        <li><p><span className="flaticon-check" /> Supervisor & Redis queue integration</p></li>
                                        <li><p><span className="flaticon-check" /> Spintax for cold emails</p></li>
                                        <li><p><span className="flaticon-check" /> Multi-threading for high-volume sending</p></li>
                                        <li><p><span className="flaticon-check" /> Dedicated account manager</p></li>
                                        <li><p><span className="flaticon-check" /> Custom onboarding</p></li>
                                    </ul>
                                </div>
                            </div>	{/* END BASIC PLAN */}
                            {/* ADVANCED PLAN */}
                            
                        </div>
                    </div>	{/* PRICING TABLES */}
                    {/* PRICING NOTICE TEXT */}
                   
                </div>	   {/* End container */}
            </section>
        </>
    )
}
