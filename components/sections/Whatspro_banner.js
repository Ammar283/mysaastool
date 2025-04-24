

import Link from "next/link"
export default function Whatspro_banner() {
    return (
        <>
            <section id="banner-13" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-13 WRAPPER */}
                    <div className="banner-13-wrapper bg-whatspro bg--scroll r-16 block-shadow">
                        <div className="banner-overlay">
                            <div className="row d-flex align-items-center">
                                {/* BANNER-5 TEXT */}
                                <div className="col-md-7">
                                    <div className="banner-13-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-45 w-700">Start Your WhatsApp Marketing Journey Today</h2>
                                        {/* Text */}
                                        <p className="p-lg">Join thousands of businesses using WhatsPro to boost engagement and drive revenue. Get started now!
                                        </p>
                                        <div className="btns-group">
                                            <Link href="#" className="btn r-04 color--theme-green-white color-white color--theme-green-hover ">Sign Up Now
                                            </Link>
                                            <Link href="#" className="btn r-04  color--theme-green-outline">Contact Sales</Link>
                                        </div>
                                    </div>
                                </div>	{/* END BANNER-13 TEXT */}
                                {/* BANNER-13 IMAGE */}
                                <div className="col-md-5">
                                    <div className="banner-13-img text-center">
                                        <img className="img-fluid" src="/images/img-04.png" alt="banner-image" />
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>   {/* End banner overlay */}
                    </div>    {/* END BANNER-13 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
