

import Link from "next/link"
import { useState } from "react"
export default function Bizworks_pricing() {
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
                                <h2 className="s-45 w-700 mb-3">Choose the Perfect Plan for Your Business </h2>
                                <p className="color--grey">BizWorks offers flexible pricing plans to suit businesses of all sizes, with powerful features to drive success.</p>
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
                                            <p className="color--grey">Ideal for small businesses and startups looking to streamline operations.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color-white btn--blue-400 hover--blue-400 ">Choose Starter</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> Comprehensive dashboard</p></li>
                                                <li><p><span className="flaticon-check" /> Basic CRM and lead management</p></li>
                                                <li><p><span className="flaticon-check" /> Invoicing and payment tracking</p></li>
                                                <li><p><span className="flaticon-check" /> Employee management tools</p></li>
                                                <li><p><span className="flaticon-check" /> Inventory and POS basics</p></li>
                                                <li><p><span className="flaticon-check" /> Email templates</p></li>
                                                <li><p><span className="flaticon-check" /> 5 users included</p></li>
                                                <li><p><span className="flaticon-check" /> Local cloud storage integration</p></li>
                                               
                                    </ul>
                                </div>
                            </div>	{/* END STARTER PLAN */}
                              {/* Pro PLAN */}
                              <div className="col">
                                <div id="pt-1-1" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24 w-700">Growth Plan</h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/*
                                            <sup className="color--black">$</sup>
                                            <span className="color--black">0</span>
                                            <sup className="validity color--grey">/ forever</sup>*/}
                                            <p className="color--grey">Perfect for growing businesses needing advanced tools and integrations.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color-white btn--blue-400 hover--blue-400 ">Choose Growth</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> All Starter Plan features </p></li>
                                                <li><p><span className="flaticon-check" /> Advanced project management with timesheets</p></li>
                                                <li><p><span className="flaticon-check" /> Double-entry accounting module</p></li>
                                                <li><p><span className="flaticon-check" /> Payroll automation</p></li>
                                                <li><p><span className="flaticon-check" /> Slack and Zoom integrations</p></li>
                                                <li><p><span className="flaticon-check" /> Barcode printing for POS</p></li>
                                                <li><p><span className="flaticon-check" /> 15 users included</p></li>
                                                <li><p><span className="flaticon-check" /> AWS/Wasabi cloud storage</p></li>
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
                                            <p className="color--grey">Built for large teams and enterprises with complex needs.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color-white btn--blue-400 hover--blue-400 ">Choose Enterprise</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> All Growth Plan features</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited users</p></li>
                                        <li><p><span className="flaticon-check" /> Contract management with digital signatures</p></li>
                                        <li><p><span className="flaticon-check" /> Form builder for lead capture</p></li>
                                        <li><p><span className="flaticon-check" /> Telegram and Twilio integrations </p></li>
                                        <li><p><span className="flaticon-check" /> Detailed reporting and analytics</p></li>
                                        <li><p><span className="flaticon-check" /> Multilingual and RTL support</p></li>
                                        <li><p><span className="flaticon-check" /> Priority support</p></li>
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
