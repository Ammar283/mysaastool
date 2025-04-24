

import Link from "next/link"
export default function Connectly_Faq() {
    return (
        <>
            <section id="faqs-3" className="pt-100 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Frequently Asked Questions  </h2>
                                {/* Text */}
                              
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
                                        <h5 className="s-22 w-700"><span>1.</span> What is Connectly CRM?
                                        </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Connectly is a self-hosted CRM solution designed to manage customers, projects, invoices, and support tickets for businesses of all sizes.
                                        </p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> Is Connectly suitable for small businesses?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Absolutely! Connectly’s intuitive features and affordable plans make it ideal for small businesses and freelancers.</p>

                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Can I integrate Connectly with other tools? </h5>
                                        {/* Answer */}
                                    
                                                <p>Yes, Connectly integrates with tools like Google Calendar, Stripe, Zapier, and more to enhance your workflow.    
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
                                        <h5 className="s-22 w-700"><span>4.</span> Is Connectly secure?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">As a self-hosted solution, Connectly allows you to control your data security on your own servers.
                                        </p>
                                       
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> Do you offer a free trial?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, you can try Connectly with a free demo to explore its features before committing.   
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> How do I get support?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Our support team is available via email, and Enterprise plan users get 24/7 phone support.
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
