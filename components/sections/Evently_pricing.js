

import Link from "next/link"
import { useState } from "react"
export default function Evently_pricing() {
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
                                <h2 className="s-45 w-700 mb-3">Flexible Pricing for Every Business </h2>
                                <p className="color--grey">Choose a plan that fits your event management goals, with no hidden fees.</p>
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
                                            <p className="color--grey">Perfect for small events or first-time organizers.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="btn r-04 color--theme-purple color-white color--theme-purple-pricing-hover">Choose Starter</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    
                                                <li><p><span className="flaticon-check" /> Up to 100 tickets/month</p></li>
                                                <li><p><span className="flaticon-check" /> Basic analytics</p></li>
                                                <li><p><span className="flaticon-check" /> Email supports</p></li>
                                                <li><p><span className="flaticon-check" /> 1 event page </p></li>
                                                <li><p><span className="flaticon-check" /> Standard ticketing</p></li>
                                                <li><p><span className="flaticon-check" /> 1 admin user </p></li>
                                                <li><p><span className="flaticon-check" /> Basic integrations</p></li>
                                    </ul>
                                </div>
                            </div>	{/* END STARTER PLAN */}
                              {/* Pro PLAN */}
                              <div className="col">
                                <div id="pt-1-1" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24 w-700">Pro </h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/*
                                            <sup className="color--black">$</sup>
                                            <span className="color--black">0</span>
                                            <sup className="validity color--grey">/ forever</sup>*/}
                                            <p className="color--grey">Ideal for growing businesses and frequent events.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="btn r-04 color--theme-purple color-white color--theme-purple-pricing-hover">Choose Pro</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> Up to 1,000 tickets/month</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced analytics</p></li>
                                                <li><p><span className="flaticon-check" /> Priority email support</p></li>
                                                <li><p><span className="flaticon-check" /> 5 event pages </p></li>
                                                <li><p><span className="flaticon-check" /> Custom ticketing</p></li>
                                                <li><p><span className="flaticon-check" /> 3 admin users </p></li>
                                                <li><p><span className="flaticon-check" /> Premium integrations</p></li>
                                                <li><p><span className="flaticon-check" /> Coupon management</p></li>            
                                    </ul>
                                </div>
                            </div>	{/* END Pro PLAN */}
                            {/* BASIC PLAN */}
                            <div className="col">
                                <div id="pt-1-2" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24">Enterprise </h5>
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
                                            <p className="color--grey">Built for large-scale events and organizations.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="btn r-04 color--theme-purple color-white color--theme-purple-pricing-hover ">Choose Enterprise</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Unlimited tickets</p></li>
                                        <li><p><span className="flaticon-check" /> Real-time analytics</p></li>
                                        <li><p><span className="flaticon-check" /> 24/7 phone support</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited event pages</p></li>
                                        <li><p><span className="flaticon-check" /> Custom branding</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited admin users</p></li>
                                        <li><p><span className="flaticon-check" /> All integrations</p></li>
                                        <li><p><span className="flaticon-check" /> Dedicated account manager</p></li>
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
