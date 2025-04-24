

import Link from "next/link"
import { useState } from "react"
export default function Buildify_pricing() {
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
                                <h2 className="s-45 w-700 mb-3">Flexible Plans for Every Need </h2>
                                <p className="color--grey">Choose a Buildify AI plan that fits your goals. From startups to enterprises, our pricing offers powerful features at unbeatable value.</p>
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
                                            <p className="color--grey">Perfect for individuals and small teams starting with AI-powered tools.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04   color-white btn--purple-400  hover--purple-400">Get srarted </Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    
                                                <li><p><span className="flaticon-check" /> AI Text Generator (10,000 words/month)</p></li>
                                                <li><p><span className="flaticon-check" /> AI Image Generator (50 images/month)</p></li>
                                                <li><p><span className="flaticon-check" /> Basic Chatbot Functionality</p></li>
                                                <li><p><span className="flaticon-check" /> 5+ Content Templates</p></li>
                                                <li><p><span className="flaticon-check" /> Multilingual Support </p></li>
                                                <li><p><span className="flaticon-check" /> Email Support</p></li>
                                                <li><p><span className="flaticon-check" /> Export as PDF/HTML</p></li>
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
                                            <p className="color--grey">Ideal for growing businesses needing advanced AI features.</p>
                                        </div>
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04  color-white btn--purple-400  hover--purple-400">Get srarted</Link>
                                     
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                    <li><p><span className="flaticon-check" /> AI Text Generator (50,000 words/month)</p></li>
                                                <li><p><span className="flaticon-check" /> AI Image Generator (200 images/month) </p></li>
                                                <li><p><span className="flaticon-check" /> Advanced Chatbot with Custom Avatars</p></li>
                                                <li><p><span className="flaticon-check" /> 20+ Content Templates </p></li>
                                                <li><p><span className="flaticon-check" /> AI Code Generator</p></li>
                                                <li><p><span className="flaticon-check" /> Priority Email Support</p></li>
                                                <li><p><span className="flaticon-check" /> API Access</p></li>
                                                <li><p><span className="flaticon-check" /> Real-Time Web Search</p></li>
                                                
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
                                            <p className="color--grey">Tailored for large teams with unlimited AI capabilities.</p>
                                        </div>	{/* End Price */}
                                        {/* Button */}
                                        <Link href="#" className="pt-btn btn r-04    color-white btn--purple-400  hover--purple-400">Get Started</Link>
                                      
                                    </div>	{/* END TABLE HEADER */}
                                    {/* PRICING FEATURES */}
                                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                        <li><p><span className="flaticon-check" /> Unlimited AI Text Generation </p></li>
                                        <li><p><span className="flaticon-check" /> Unlimited AI Image Generation</p></li>
                                        <li><p><span className="flaticon-check" /> Fully Customizable Chatbots</p></li>
                                        <li><p><span className="flaticon-check" /> All Content Templates</p></li>
                                        <li><p><span className="flaticon-check" /> AI Code & Voiceover Generators</p></li>
                                        <li><p><span className="flaticon-check" /> Dedicated Support</p></li>
                                        <li><p><span className="flaticon-check" /> Advanced Analytics Dashboard</p></li>
                                        <li><p><span className="flaticon-check" /> Custom API Integrations</p></li>
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
