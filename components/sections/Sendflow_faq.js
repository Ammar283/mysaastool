

import Link from "next/link"
export default function Sendflow_faq() {
    return (
        <>
            <section id="faqs-3" className="pt-100 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700 mb-2">Frequently Asked Questions </h2>
                                    <p>Got questions about SendFlow? Find answers to common queries below.</p>
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
                                        <h5 className="s-22 w-700"><span>1.</span> What is SendFlow? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">SendFlow is a self-hosted email marketing platform that lets you create, send, and track high-volume campaigns with advanced automation and integrations.
                                        </p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span>Do I need technical skills to use SendFlow? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">No, SendFlow’s intuitive interface and drag-and-drop builder make it easy for beginners. Developers can also leverage the REST API for advanced customization.
                                        </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Can I host SendFlow on my own server?</h5>
                                        {/* Answer */}
                                                <p>Yes, SendFlow is designed for self-hosting on a dedicated server or VPS. A Linux environment is required, and shared hosting is not recommended.
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
                                        <h5 className="s-22 w-700"><span>4.</span> What SMTP providers does SendFlow support?
                                        </h5>
                                        {/* Answer */}
                                        <p className="color--grey">SendFlow integrates with Amazon SES, SendGrid, Mailgun, ElasticEmail, SparkPost, and any SMTP server, including your own (e.g., Postfix, Exim).
                                        </p>    
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span>How does email verification work in SendFlow? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">SendFlow connects with third-party services like Kickbox.io and ZeroBounce to verify email lists, reducing bounces and improving deliverability.
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> Is SendFlow GDPR compliant? </h5>
                                        {/* Answer */}
                                        <p className="color--grey">Yes, SendFlow includes GDPR compliance tools to ensure your campaigns meet data protection regulations.
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
