

import Link from "next/link"
export default function Connectly_banner_bottom() {
    return (
        <>
            <section id="banner-3" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-3 WRAPPER */}
                    <div className="banner-3-wrapper bg--03-1 bg--fixed r-16">
                        <div className="banner-overlay">
                            <div className="row">
                                {/* BANNER-3 TEXT */}
                                <div className="col">
                                    <div className="banner-3-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Get Started with Connectly Today</h2>
                                        {/* Text */}
                                        <p className="p-xl">Join thousands of businesses streamlining their operations with Connectly CRM. Try it now and see the difference!</p>
                                        {/* Button */}
                                        <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--tra-black   r-04    hover--black">Start Free Trial</Link>
                                    <Link href="#" className="btn r-04 btn--tra-white       hover--black">Contact Sales</Link>
                                </div>
                                       
                                    </div>
                                </div>	{/* END BANNER-3 TEXT */}
                            </div>   {/* End row */}
                        </div>   {/* End banner overlay */}
                    </div>    {/* END BANNER-3 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
