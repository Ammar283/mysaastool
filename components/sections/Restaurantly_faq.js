

import Link from "next/link"
export default function Restaurantly_faq() {
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
                                        <h5 className="s-22 w-700"><span>1.</span> What is Restaurantly?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Restaurantly is a SaaS restaurant management solution designed to streamline operations, manage orders, and enhance customer experiences.
                                        </p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> Can I use Restaurantly for multiple locations?  </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, our Pro and Enterprise plans support multi-location management with real-time synchronization.</p>

                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Does Restaurantly support QR-based menus?</h5>
                                        {/* Answer */}
                                    
                                                <p>Absolutely! Restaurantly offers contactless QR-based menus for a modern dining experience.
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
                                        <h5 className="s-22 w-700"><span>4.</span> How does the free trial work?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Sign up for a 14-day free trial to explore all features with no credit card required.
                                        </p>
                                       
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> Can I customize the platform to match my brand? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, Restaurantly allows full customization to reflect your restaurant’s branding.
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> What kind of support is available?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">We offer email support for Starter plans, priority support for Pro, and 24/7 support for Enterprise.
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
