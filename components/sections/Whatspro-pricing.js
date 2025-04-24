

import Link from "next/link"
import { useState } from "react"
export default function Whatspro_pricing() {
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
                                <h2 className="s-45 w-700 mb-3">Flexible Pricing for Every Need </h2>
                                <p className="color--grey">Choose a plan that fits your needs and start your WhatsApp marketing journey today.</p>
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
                                       
                                        <h5 className="s-24 w-700">Starter Plan </h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/*
                                            <sup className="color--black">$</sup>
                                            <span className="color--black">0</span>
                                            <sup className="validity color--grey">/ forever</sup>*/}
                                            <p className="color--grey">Perfect for small businesses and startups looking to explore WhatsApp marketing.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color--theme-green color-white color--theme-green-pricing-hover">Get srarted </Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    
                                                <li><p><span className="flaticon-check" /> Bulk Messaging (up to 10,000 contacts)</p></li>
                                                <li><p><span className="flaticon-check" /> Basic Chatbot Functionality  </p></li>
                                                <li><p><span className="flaticon-check" /> Campaign Scheduling</p></li>
                                                <li><p><span className="flaticon-check" /> Contact Management</p></li>
                                                <li><p><span className="flaticon-check" /> Email Support  </p></li>
                                                <li><p><span className="flaticon-check" /> Basic Analytics</p></li>
                                                <li><p><span className="flaticon-check" /> White-Label Option</p></li>
                                    </ul>
                                </div>
                            </div>	{/* END STARTER PLAN */}
                              {/* Pro PLAN */}
                              <div className="col">
                                <div id="pt-1-1" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24 w-700">Pro Plan</h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/*
                                            <sup className="color--black">$</sup>
                                            <span className="color--black">0</span>
                                            <sup className="validity color--grey">/ forever</sup>*/}
                                            <p className="color--grey">Ideal for growing businesses needing advanced features and higher limits.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color--theme-green color-white color--theme-green-pricing-hover">Get srarted</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> Bulk Messaging (up to 50,000 contacts)</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced Chatbot Flows   </p></li>
                                                <li><p><span className="flaticon-check" /> Campaign Scheduling & Segmentation</p></li>
                                                <li><p><span className="flaticon-check" /> CRM Integration</p></li>
                                                
                                    </ul>
                                </div>
                            </div>	{/* END Pro PLAN */}
                            {/* BASIC PLAN */}
                            <div className="col">
                                <div id="pt-1-2" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24">Enterprise Plan  </h5>
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
                                            <p className="color--grey">Designed for large-scale businesses with unlimited access and premium support.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color--theme-green color-white color--theme-green-pricing-hover">Get Started</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Unlimited Bulk Messaging</p></li>
                                        <li><p><span className="flaticon-check" /> Advanced Chatbot Flows</p></li>
                                        <li><p><span className="flaticon-check" /> Full Campaign Management</p></li>
                                        <li><p><span className="flaticon-check" /> Comprehensive CRM Tools</p></li>
                                        <li><p><span className="flaticon-check" /> Priority Support</p></li>
                                        <li><p><span className="flaticon-check" /> Custom Integrations</p></li>
                                        <li><p><span className="flaticon-check" /> White-Label Branding</p></li>
                                        <li><p><span className="flaticon-check" /> Dedicated Account Manager</p></li>
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
