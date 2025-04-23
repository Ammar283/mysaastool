

import Link from "next/link"
export default function Whatspro_faq() {
    return (
        <>
            <section id="faqs-3" className="pt-100 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Frequently Asked Questions </h2>
                         
                            </div>
                        </div>
                    </div>
                    {/* FAQs-3 QUESTIONS */}
                    <div className="faqs-3-questions">
                        <div className="row">
                            {/* QUESTIONS HOLDER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #1 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>1.</span> What is WhatsPro? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">WhatsPro is a white-labeled SaaS platform for WhatsApp marketing, offering bulk messaging, campaign management, chatbots, and CRM tools.
                                        </p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> How does the WhatsApp Cloud API work with WhatsPro?                                        </h5>
                                        {/* Answer */}
                                        <p className="color--grey">WhatsPro uses the official WhatsApp Cloud API to send messages and manage interactions. Clients cover their API usage costs.
                                        </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Can I brand WhatsPro as my own?</h5>
                                        {/* Answer */}
                                                <p>Yes, WhatsPro offers a white-label option, allowing you to brand the platform as your own for your clients.
                                                </p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* QUESTIONS WRAPPER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #4 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>4.</span> What kind of support is available?
                                        </h5>
                                        {/* Answer */}
                                        <p className="color--grey">We offer email support for Starter plans, priority support for Pro plans, and dedicated account managers for Enterprise plans.
                                        </p>    
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span>Is there a free trial? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, you can request a demo to explore WhatsPro’s features before committing to a plan.
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> Can I integrate WhatsPro with other tools? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Absolutely! WhatsPro integrates with tools like Stripe, PayPal, Shopify, and more for a seamless workflow.
                                        </p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                        </div>  {/* End row */}
                    </div>	{/* END FAQs-3 QUESTIONS */}
                    {/* MORE QUESTIONS LINK */}
                 
                </div>	   {/* End container */}
            </section>
        </>
    )
}
