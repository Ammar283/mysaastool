

import Link from "next/link"
export default function Restaurantly_bottom_banner() {
    return (
        <>
            <section id="banner-13" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-13 WRAPPER */}
                    <div className="banner-13-wrapper bg--red-100 bg--scroll r-16 block-shadow">
                        <div className="banner-overlay">
                            <div className="row d-flex align-items-center">
                                {/* BANNER-13 TEXT */}
                                <div className="col-md-7">
                                    <div className="banner-13-txt color--black">
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Ready to Elevate Your Restaurant?</h2>
                                        {/* Text */}
                                        <p className="p-lg">Join thousands of restaurants using Restaurantly to streamline operations and delight customers.
                                        </p>
                                        {/* Button */}
                                        <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--red-400 color-white  hover--black ">Get started Now</Link>
                                    <Link href="#features-5" className="btn r-04 btn--white hover--black">Schedule a Demo</Link>
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
