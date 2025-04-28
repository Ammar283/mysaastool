

import Link from "next/link"
import { useState } from "react"
export default function Orderly_pricing() {
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
                                <h2 className="s-45 w-700 mb-3">Flexible Pricing for Every Business</h2>
                                <p className="color--grey">Choose a plan that suits your needs and scale your food ordering platform with ease.</p>
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
                                            <p className="color--grey">Perfect for small restaurants or startups launching their first ordering website.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color-white btn--blue-400 hover--blue-400 ">Choose Starter</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> 1 Tenant Website</p></li>
                                                <li><p><span className="flaticon-check" /> 3 Themes</p></li>
                                                <li><p><span className="flaticon-check" /> Basic QR Menu Builder</p></li>
                                                <li><p><span className="flaticon-check" /> 5 Payment Gateways</p></li>
                                                <li><p><span className="flaticon-check" /> Multilingual Support</p></li>
                                                <li><p><span className="flaticon-check" /> Email Support</p></li>
                                                <li><p><span className="flaticon-check" /> 100 Orders/Month</p></li>
                                              
                                               
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
                                            <p className="color--grey">Ideal for growing businesses managing multiple restaurant websites.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color-white btn--blue-400 hover--blue-400 ">Choose Pro</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> 5 Tenant Websites</p></li>
                                                <li><p><span className="flaticon-check" /> 7 Themes</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced QR Menu Builder</p></li>
                                                <li><p><span className="flaticon-check" /> 10 Payment Gateways</p></li>
                                                <li><p><span className="flaticon-check" /> RTL Support</p></li>
                                                <li><p><span className="flaticon-check" /> Priority Email Support</p></li>
                                                <li><p><span className="flaticon-check" /> 500 Orders/Month</p></li>
                                                <li><p><span className="flaticon-check" /> Push Notifications</p></li>
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
                                            <p className="color--grey">Designed for large-scale platforms with unlimited tenants and premium features.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color-white btn--blue-400 hover--blue-400 ">Choose Enterprise</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Unlimited Tenant Websites</p></li>
                                        <li><p><span className="flaticon-check" /> 7 Themes + Custom</p></li>
                                        <li><p><span className="flaticon-check" /> Full QR Menu Builder</p></li>
                                        <li><p><span className="flaticon-check" /> 19+ Payment Gateways</p></li>
                                        <li><p><span className="flaticon-check" /> Multilingual & RTL Support</p></li>
                                        <li><p><span className="flaticon-check" /> 24/7 Phone Support</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited Orders</p></li>
                                        <li><p><span className="flaticon-check" /> PWA Installability</p></li>
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
