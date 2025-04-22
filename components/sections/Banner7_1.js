

import Link from "next/link"
export default function Banner7_1() {
    return (
        <>
            <section id="banner-7" className="banner-section">
                <div className="banner-overlay py-100">
                    <div className="container">
                        {/* BANNER-7 WRAPPER */}
                        <div className="banner-7-wrapper">
                            <div className="row justify-content-center">
                                {/* BANNER-7 TEXT */}
                                <div className="col-md-8">
                                    <div className="banner-7-txt text-center">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Ready to Transform Your Networking?</h2>
                                        <p className="btn-txt ico-15 mb-3">Join thousands of professionals using Cardify to create and share digital business cards effortlessly.</p>
                                        {/* Buttons */}
                                        <div className="btns-group">
                                            <Link href="/signup-1" className="btn r-04 color--theme-blue color-white color--theme-blue-hover">Sign Up Now
                                            </Link>
                                            <Link href="/faqs" className="btn r-04 btn--tra-black color--theme-blue-hover">Contact Sales</Link>
                                        </div>
                                        {/* Button Text */}
                                       
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>    {/* END BANNER-7 WRAPPER */}
                    </div>    {/* End container */}
                </div>     {/* End banner overlay */}
            </section>
        </>
    )
}
