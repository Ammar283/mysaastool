

import Link from "next/link"
export default function Bookeasy_faq() {
    return (
        <>
            <section id="faqs-3" className="pt-100 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Frequently Asked Questions </h2>
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
                                        <h5 className="s-22 w-700"><span>1.</span> Is BookEasy suitable for small businesses?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, our Starter plan is designed for small businesses with affordable pricing and essential features.</p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> Can I customize my booking page?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Absolutely! BookEasy allows you to create branded booking pages with unique URLs and SEO options.
                                        </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Does BookEasy support multiple languages?</h5>
                                        {/* Answer */}
                                                <p>Yes, you can add unlimited languages and translate content via the admin panel.
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
                                        <h5 className="s-22 w-700"><span>4.</span> What payment methods are supported?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">BookEasy supports PayPal, Stripe, and offline payments for maximum flexibility.
                                        </p>
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> Is my data secure with BookEasy?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, we use CSRF prevention, XSS protection, and password hashing to ensure security.
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> Can I integrate BookEasy with other tools?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, BookEasy integrates with Google Calendar, Zoom, Slack, and more for seamless workflows.
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
