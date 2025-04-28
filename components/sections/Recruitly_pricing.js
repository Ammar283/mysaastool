

import Link from "next/link"
import { useState } from "react"
export default function Recruitly_pricing() {
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
                                <h2 className="s-45 w-700 mb-3">Flexible Pricing for Every Team </h2>
                                <p className="color--grey">Choose a plan that fits your hiring needs with no hidden fees.</p>
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
                                            <p className="color--grey">Perfect for small teams getting started with recruitment.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04   color-white btn--purple-400  hover--purple-400">Get srarted </Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    
                                                <li><p><span className="flaticon-check" /> Up to 5 active job postings</p></li>
                                                <li><p><span className="flaticon-check" /> Basic candidate management</p></li>
                                                <li><p><span className="flaticon-check" /> Email support</p></li>
                                                <li><p><span className="flaticon-check" /> Custom job forms</p></li>
                                                <li><p><span className="flaticon-check" /> Basic reporting </p></li>
                                                <li><p><span className="flaticon-check" /> 1 admin user</p></li>
                                                <li><p><span className="flaticon-check" /> Secure data storage</p></li>
                                    </ul>
                                </div>
                            </div>	{/* END STARTER PLAN */}
                              {/* Pro PLAN */}
                              <div className="col">
                                <div id="pt-1-1" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24 w-700">Professional </h5>
                                        {/* Price */}
                                        <div className="price">
                                            {/*
                                            <sup className="color--black">$</sup>
                                            <span className="color--black">0</span>
                                            <sup className="validity color--grey">/ forever</sup>*/}
                                            <p className="color--grey">Ideal for growing businesses with regular hiring needs.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04  color-white btn--purple-400  hover--purple-400">Get srarted</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> Up to 20 active job postings</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced candidate screening </p></li>
                                                <li><p><span className="flaticon-check" /> Priority email support</p></li>
                                                <li><p><span className="flaticon-check" /> Team collaboration tools</p></li>
                                                <li><p><span className="flaticon-check" /> Custom reports</p></li>
                                                <li><p><span className="flaticon-check" /> Up to 5 admin users</p></li>
                                                <li><p><span className="flaticon-check" /> Multi-channel job posting</p></li>
                                                <li><p><span className="flaticon-check" /> Resume parsing</p></li>
                                                
                                    </ul>
                                </div>
                            </div>	{/* END Pro PLAN */}
                            {/* BASIC PLAN */}
                            <div className="col">
                                <div id="pt-1-2" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                    {/* TABLE HEADER */}
                                    <div className="pricing-table-header">
                                        {/* Title */}
                                        <h5 className="s-24">Enterprise  </h5>
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
                                            <p className="color--grey">Built for large teams with complex hiring requirements.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04    color-white btn--purple-400  hover--purple-400">Get Started</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Unlimited job postings</p></li>
                                        <li><p><span className="flaticon-check" /> Full feature access</p></li>
                                        <li><p><span className="flaticon-check" /> 24/7 phone & email support</p></li>
                                        <li><p><span className="flaticon-check" /> Advanced analytics</p></li>
                                        <li><p><span className="flaticon-check" /> Role-based access control</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited admin users</p></li>
                                        <li><p><span className="flaticon-check" /> API access</p></li>
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
