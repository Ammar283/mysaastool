

import Link from "next/link"
export default function Evently_bottom_banner() {
    return (
        <>
            <section id="banner-13" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-13 WRAPPER */}
                    <div className="banner-13-wrapper bg--purple-500 bg--scroll r-16 block-shadow">
                        <div className="banner-overlay">
                            <div className="row d-flex align-items-center">
                                {/* BANNER-5 TEXT */}
                                <div className="col-md-7">
                                    <div className="banner-13-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Get Started with Evently Today</h2>
                                        {/* Text */}
                                        <p className="p-lg">Join thousands of organizers creating unforgettable events with Evently. Start your free trial now!
                                        </p>
                                        {/* Button */}
                                        <div className="btns-group mt-15">
                                    <Link href="#" className="btn  btn--tra-white   hover--black  r-04  ">Start Free Trial</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black hover--black    ">Contact Sales</Link>
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
