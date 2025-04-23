

import Link from "next/link"
export default function Taskup_banner_bottom() {
    return (
        <>
            <section id="banner-13" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-13 WRAPPER */}
                    <div className="banner-13-wrapper bg--03 bg--scroll r-16 block-shadow">
                        <div className="banner-overlay">
                            <div className="row d-flex align-items-center">
                                {/* BANNER-5 TEXT */}
                                <div className="col-md-7">
                                    <div className="banner-13-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Get Started with TaskUp Today
                                        </h2>
                                        {/* Text */}
                                        <p className="p-lg">Join thousands of teams using TaskUp to streamline projects and boost productivity. Try it free!
                                        </p>
                                        <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--violet-500 r-04    hover--black">Start Free Trial</Link>
                                    <Link href="#" className="btn r-04 btn--tra-white hover--black">Contact Sales</Link>
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
