

import Link from "next/link"
export default function Recruitly_bottom_banner() {
    return (
        <>
            <section id="banner-3" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-3 WRAPPER */}
                    <div className="banner-3-wrapper bg--03 bg--fixed r-16">
                        <div className="banner-overlay">
                            <div className="row">
                                {/* BANNER-3 TEXT */}
                                <div className="col">
                                    <div className="banner-3-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Ready to Streamline Your Hiring?</h2>
                                        {/* Text */}
                                        <p className="p-xl">Join thousands of businesses using Recruitly to hire smarter and faster.</p>
                                        {/* Button */}
                                        <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--red-400 color-white  hover--black ">Try Free Demo</Link>
                                    <Link href="#features-5" className="btn r-04 btn--white hover--black">View Pricing</Link>
                                </div>
                                        {/* Button Text */}
                                        
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
