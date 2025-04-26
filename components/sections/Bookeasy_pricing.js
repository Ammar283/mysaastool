

import Link from "next/link"
import { useState } from "react"
export default function Bookeasy_pricing() {
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
                                <p className="color--grey">Choose a plan that fits your needs and scale as your business grows.</p>
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
                                            <p className="color--grey">Perfect for small businesses getting started with online bookings.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04   color-white btn--violet-400 hover--violet-400">Choose Starter</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    
                                                <li><p><span className="flaticon-check" /> 1 Business Page</p></li>
                                                <li><p><span className="flaticon-check" /> 5 Staff Accounts</p></li>
                                                <li><p><span className="flaticon-check" /> Unlimited Bookings</p></li>
                                                <li><p><span className="flaticon-check" /> PayPal & Stripe Integration</p></li>
                                                <li><p><span className="flaticon-check" /> Google Calendar Sync</p></li>
                                                <li><p><span className="flaticon-check" /> Email Support</p></li>
                                                <li><p><span className="flaticon-check" /> Basic Analytics</p></li>
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
                                            <p className="color--grey">Ideal for growing businesses with multiple services and staff.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04  color-white btn--violet-400 hover--violet-400">Choose Pro</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> Up to 15 Users</p></li>
                                                <li><p><span className="flaticon-check" /> 5 Business Pages</p></li>
                                                <li><p><span className="flaticon-check" /> 20 Staff Accounts</p></li>
                                                <li><p><span className="flaticon-check" /> Unlimited Bookings</p></li>
                                                <li><p><span className="flaticon-check" /> All Payment Gateways</p></li>
                                                <li><p><span className="flaticon-check" /> Google Calendar & Zoom Integration</p></li>
                                                <li><p><span className="flaticon-check" /> Priority Support</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced Analytics</p></li>
                                                <li><p><span className="flaticon-check" /> Multi-Language Support</p></li>
                                                
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
                                            <p className="color--grey">Tailored for large organizations with complex booking needs.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04    color-white btn--violet-400 hover--violet-400 ">Choose Enterprise</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Unlimited Business Pages</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited Staff Accounts</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited Bookings</p></li>
                                        <li><p><span className="flaticon-check" /> All Integrations</p></li>
                                        <li><p><span className="flaticon-check" /> Custom Branding</p></li>
                                        <li><p><span className="flaticon-check" /> Dedicated Support</p></li>
                                        <li><p><span className="flaticon-check" /> Full Analytics Suite</p></li>
                                        <li><p><span className="flaticon-check" /> API Access</p></li>
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
