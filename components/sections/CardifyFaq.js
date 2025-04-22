import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
          
                <section id="faqs-2" className="gr--whitesmoke pb-30 inner-page-hero faqs-section division">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-xl-10">
                                {/* INNER PAGE TITLE */}
                                <div className="inner-page-title">
                                    <h2 className="s-52 w-700">Frequently Asked Questions </h2>  
                                </div>
                                {/* QUESTIONS ACCORDION */}
                                <div className="accordion-wrapper">
                                    <ul className="accordion">
                                        {/* QUESTIONS CATEGORY #1 */}
                                        <li  className={isActive.key == 1 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(1)}>
                                            {/* CATEGORY HEADER */}
                                            <div className="accordion-thumb">
                                                <h4 className="s-28 w-700">What is Cardify?</h4>
                                            </div>
                                            {/* CATEGORY ANSWERS */}
                                            <div className="accordion-panel" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                {/* QUESTION #1 */}
                                                <div className="accordion-panel-item mb-35">
                                                    {/* Question */}
                                                  
                                                    {/* Answer */}
                                                    <div className="faqs-2-answer color--grey">
                                                        {/* Text */}
                                                        <p>Cardify is a SaaS platform that allows users to create, manage, and share digital business cards with QR codes and NFC support.
                                                        </p>
                                                    </div>
                                                </div>	{/* END QUESTION #1 */}
                                                {/* QUESTION #2 */}
                                                <div className="accordion-panel-item mb-35">
                                                     
                                                </div>	{/* END QUESTION #2 */}

                                            </div>	{/* END CATEGORY ANSWERS */}
                                        </li>	{/* END QUESTIONS CATEGORY #1 */}
                                        {/* QUESTIONS CATEGORY #2 */}
                                        <li  className={isActive.key == 2 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(2)}>
                                            {/* CATEGORY HEADER */}
                                            <div className="accordion-thumb">
                                                <h4 className="s-28 w-700">Can I update my card after creating it?</h4>
                                            </div>
                                            {/* CATEGORY ANSWERS */}
                                            <div className="accordion-panel" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                {/* QUESTION #1 */}
                                           
                                                {/* QUESTION #2 */}
                                                <div className="accordion-panel-item mb-35">
                                                    {/* Question */}
                                                 
                                                    {/* Answer */}
                                                    <div className="faqs-2-answer color--grey">
                                                        {/* Text */}
                                                        <p>Yes, you can update your card anytime via the user-friendly dashboard without needing to recreate the QR code.
                                                        </p>
                                                    </div>
                                                </div>	{/* END QUESTION #2 */}
                                            </div>	{/* END CATEGORY ANSWERS */}
                                        </li>	{/* END QUESTIONS CATEGORY #2 */}
                                        {/* QUESTIONS CATEGORY #3 */}
                                        <li  className={isActive.key == 3 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(3)}>
                                            {/* CATEGORY HEADER */}
                                            <div className="accordion-thumb">
                                                <h4 className="s-28 w-700">Does Cardify support team accounts?  </h4>
                                            </div>
                                            {/* CATEGORY ANSWERS */}
                                            <div className="accordion-panel" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                {/* QUESTION #1 */}
                                                <div className="accordion-panel-item mb-35">
                                                    {/* Question */}
                                                 
                                                    {/* Answer */}
                                                    <div className="faqs-2-answer color--grey">
                                                        {/* Text */}
                                                        <p>Absolutely! Cardify offers multi-user management for teams, with role-based access and centralized control.
                                                        </p>
                                                    </div>
                                           </div>
                                          
                                            </div>	{/* END CATEGORY ANSWERS */}
                                        </li>	{/* END QUESTIONS CATEGORY #3 */}
                                        {/* QUESTIONS CATEGORY #4 */}
                                        <li  className={isActive.key == 4 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(4)}>
                                            {/* CATEGORY HEADER */}
                                            <div className="accordion-thumb">
                                                <h4 className="s-28 w-700">Is NFC mandatory for using Cardify?                                                </h4>
                                            </div>
                                            {/* CATEGORY ANSWERS */}
                                            <div className="accordion-panel" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                {/* QUESTION #1 */}
                                                <div className="accordion-panel-item mb-35">
                                                    {/* Question */}
                                                    {/* Answer */}
                                                    <div className="faqs-2-answer color--grey">
                                                        {/* Text */}
                                                        <p>No, NFC is optional. You can use QR codes or direct links to share your card.
                                                        </p>
                                                    </div>
                                                </div>	{/* END QUESTION #1 */}
                                            </div>	{/* END CATEGORY ANSWERS */}
                                        </li>	{/* END QUESTIONS CATEGORY #4 */}
                                        {/* QUESTIONS CATEGORY #5 */}
                                        <li  className={isActive.key == 5 ? "accordion-item is-active" : "accordion-item "} onClick={() => handleToggle(5)}>
                                            {/* CATEGORY HEADER */}
                                            <div className="accordion-thumb">
                                                <h4 className="s-28 w-700">Can I customize my card’s design?
                                                </h4>
                                            </div>
                                            {/* CATEGORY ANSWERS */}
                                            <div className="accordion-panel" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                {/* QUESTION #1 */}
                                                <div className="accordion-panel-item mb-35">
                                                    {/* Question */}
                                                  
                                                    {/* Answer */}
                                                    <div className="faqs-2-answer color--grey">
                                                        {/* Text */}
                                                        <p>Yes, Cardify offers extensive customization options, including logos, colors, and templates.
                                                        </p>
                                                        
                                                    </div>
                                                </div>	{/* END QUESTION #1 */}
                                       
                                            </div>	{/* END CATEGORY ANSWERS */}
                                            
                                        </li>	{/* END QUESTIONS CATEGORY #6 */}
                                        <li  className={isActive.key == 6 ? "accordion-item acc-last-item is-active" : "accordion-item acc-last-item"} onClick={() => handleToggle(6)}>
                                            {/* CATEGORY HEADER */}
                                            <div className="accordion-thumb">
                                                <h4 className="s-28 w-700">What integrations does Cardify support?
                                                </h4>
                                            </div>
                                            {/* CATEGORY ANSWERS */}
                                            <div className="accordion-panel" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                {/* QUESTION #1 */}
                                                <div className="accordion-panel-item mb-35">
                                                    {/* Question */}
                                                  
                                                    {/* Answer */}
                                                    <div className="faqs-2-answer color--grey">
                                                        {/* Text */}
                                                        <p>Cardify integrates with tools like WhatsApp, Google Wallet, Slack, Zapier, and more for seamless workflows.
                                                        </p>
                                                        {/* Text */}
                                                        
                                                    </div>
                                                </div>	{/* END QUESTION #1 */}
                                             
                                        
                                            
                                       
                                            </div>	{/* END CATEGORY ANSWERS */}
                                            
                                        </li>	{/* END QUESTIONS CATEGORY #6 */}
                                    </ul>
                                </div>	{/* END QUESTIONS ACCORDION */}
                                {/* MORE QUESTIONS LINK */}
                            
                            </div>
                        </div>    {/* End row */}
                    </div>	   {/* End container */}
                </section>

       
        </>
    )
}