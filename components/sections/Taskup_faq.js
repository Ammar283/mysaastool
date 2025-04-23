

import Link from "next/link"
export default function Taskup_faq() {
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
                                        <h5 className="s-22 w-700"><span>1.</span> What is TaskUp?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">TaskUp is a SaaS project management system designed to help teams collaborate, manage tasks, and track project progress in real time.
                                        </p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> Is there a free trial?    </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, TaskUp offers a 14-day free trial with access to all features, no credit card required.</p>

                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Can I upgrade my plan later? </h5>
                                        {/* Answer */}
                                    
                                                <p>Absolutely! You can upgrade or downgrade your plan at any time to suit your team’s needs.
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
                                        <h5 className="s-22 w-700"><span>4.</span> Is TaskUp secure? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, TaskUp uses industry-standard encryption and security protocols to protect your data.
                                        </p>
                                       
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> Does TaskUp support integrations? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, TaskUp integrates with popular tools like Slack, Google Drive, Zapier, and more.
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> How do I get support?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Our support team is available via email, live chat, and a dedicated help center for all plans.
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
