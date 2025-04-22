

import Link from "next/link"
import { useState } from "react"
export default function PostlyPricing() {
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
                                <p className="color--grey">Choose a plan that fits your business goals and start automating your social media today.</p>
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
                                            <p className="color--grey">Perfect for small businesses and solo entrepreneurs getting started.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color--theme-purple color-white color--theme-purple-pricing-hover">Get srarted - it's free</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> 3 social media accounts</p></li>
                                                <li><p><span className="flaticon-check" /> Basic content creation tools</p></li>
                                                <li><p><span className="flaticon-check" /> Automated scheduling</p></li>
                                                <li><p><span className="flaticon-check" /> Basic analytics</p></li>
                                                <li><p><span className="flaticon-check" /> Email support</p></li>
                                                <li><p><span className="flaticon-check" /> 1 user account</p></li>
                                                <li><p><span className="flaticon-check" /> 10 posts/month autopost</p></li>
                                               
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
                                            <p className="color--grey">Ideal for growing businesses and marketing teams needing advanced features.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color--theme-purple color-white color--theme-purple-pricing-hover">Get srarted - it's free</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> 10 social media accounts </p></li>
                                                <li><p><span className="flaticon-check" /> Advanced AI content creation</p></li>
                                                <li><p><span className="flaticon-check" /> Automated scheduling & autopilot</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced analytics & insights</p></li>
                                                <li><p><span className="flaticon-check" /> Priority email support</p></li>
                                                <li><p><span className="flaticon-check" /> 3 user accountst</p></li>
                                                <li><p><span className="flaticon-check" /> 50 posts/month autopost</p></li>
                                                <li><p><span className="flaticon-check" /> Sentiment analysis</p></li>
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
                                            <p className="color--grey">Tailored for agencies and large brands with extensive social media needs.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04 color--theme-purple color-white color--theme-purple-pricing-hover">Start 14-day trial</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Unlimited social media accounts</p></li>
                                        <li><p><span className="flaticon-check" /> Full AI content creation suite</p></li>
                                        <li><p><span className="flaticon-check" /> Automated scheduling & autopilot</p></li>
                                        <li><p><span className="flaticon-check" /> Comprehensive Analytics</p></li>
                                        <li><p><span className="flaticon-check" /> 24/7 priority support </p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited user accounts</p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited autopost</p></li>
                                        <li><p><span className="flaticon-check" /> Custom integrations</p></li>
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
