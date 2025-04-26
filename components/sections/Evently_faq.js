

import Link from "next/link"
export default function Evently_faq() {
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
                                        <h5 className="s-22 w-700"><span>1.</span> Can I try Evently for free?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes! We offer a 14-day free trial with no credit card required.</p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> Does Evently support virtual events?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Absolutely. You can create and manage online, in-person, or hybrid events.
                                        </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> How secure is the ticketing system?</h5>
                                        {/* Answer */}
                                                <p>Evently uses encrypted transactions and QR-coded tickets for maximum security.
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
                                        <h5 className="s-22 w-700"><span>4.</span> Can I customize the event page?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, you can add custom logos, colors, and themes to match your brand.
                                        </p>
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> What payment methods are supported?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">We integrate with Stripe, PayPal, and other major payment gateways.
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> Is there a limit on the number of events?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">With the Enterprise plan, you can create unlimited events and event pages.
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
