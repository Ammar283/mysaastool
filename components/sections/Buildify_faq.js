

import Link from "next/link"
export default function Buildify_faq() {
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
                                        <h5 className="s-22 w-700"><span>1.</span> What is Buildify AI?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Buildify AI is a SaaS platform that uses advanced AI to generate text, images, code, and chatbots, helping businesses streamline workflows.</p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> Which AI models does Buildify AI support?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">We support GPT-4, GPT-3.5, DALL-E, Stable Diffusion, and more for top-tier content generation. </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> Can I customize the chatbot?</h5>
                                        {/* Answer */}
                                         <p>Yes, you can create custom avatars, train the chatbot on your data, and enable multilingual support.</p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* QUESTIONS WRAPPER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #4 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>4.</span> Is Buildify AI suitable for beginners?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Absolutely! Our intuitive interface makes it easy for users of all skill levels to generate content and code.</p>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec congue metus.
                                            Vitae arcu mollis blandit integer nemo volute velna
                                        </p>
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> What integrations are available?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Buildify AI integrates with tools like WordPress, Zapier, Slack, and more for seamless workflows.</p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> How secure is Buildify AI?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">We prioritize privacy and GDPR compliance, ensuring your data is safe and secure.</p>
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
