

import Link from "next/link"
export default function Banner3_1() {
    return (
        <>
            <section id="banner-3" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-3 WRAPPER */}
                    <div className="banner-3-wrapper bg--03 bg--scroll r-16">
                        <div className="banner-overlay">
                            <div className="row">
                                {/* BANNER-3 TEXT */}
                                <div className="col">
                                    <div className="banner-3-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Ready to Transform Your Social Media?
                                        </h2>
                                        <p className="p-sm btn-txt ico-15 mb-3">
                                            Join thousands of businesses using Postly to automate and optimize their social media marketing. Start your free trial today!
                                        </p>
                                        {/* Button */}
                                        <div className="btns-group">
                                            <Link href="/signup-1" className="btn r-04 color--theme-purple color-white color--theme-purple-hover">Start Free Trial
                                            </Link>
                                            <Link href="/faqs" className="btn r-04  color-white color--theme-purple-hover">Contact Sales</Link>
                                        </div>
                                        {/* Button Text */}
                                        
                                    </div>
                                </div> {/* END BANNER-3 TEXT */}
                            </div> {/* End row */}
                        </div> {/* End banner overlay */}
                    </div> {/* END BANNER-3 WRAPPER */}
                </div> {/* End container */}
            </section>
        </>
    )
}
