

import Link from "next/link"
export default function Recruitly_faq() {
    return (
        <>
            <section id="faqs-3" className="pt-90 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Frequently Asked Questions</h2>
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
                                        <h5 className="s-22 w-700"><span>1.</span> Is Recruitly easy to set up?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, Recruitly requires no coding skills and comes with clear documentation. Our support team is also available to assist with setup.</p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> Can I integrate Recruitly with my website?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Absolutely! Recruitly offers customizable job portals that seamlessly integrate with your website. </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Is my data secure with Recruitly?</h5>
                                        {/* Answer */}
                                         <p>Yes, we use industry-standard encryption and security protocols to protect your data.</p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* QUESTIONS WRAPPER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #4 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>4.</span> Can I try Recruitly before purchasing?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, we offer a free demo to explore all features before committing.</p>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec congue metus.
                                            Vitae arcu mollis blandit integer nemo volute velna
                                        </p>
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> Does Recruitly support multiple users?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, depending on your plan, you can have multiple admin users with role-based access.</p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> Can I upgrade my plan later?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, you can upgrade or downgrade your plan at any time to suit your needs.</p>
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
