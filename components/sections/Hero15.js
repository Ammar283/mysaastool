

import Link from "next/link"
export default function Hero15() {
    return (
        <>
            <section id="hero-15" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-15-txt wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-64 w-700">Power Your Business with mySaaS.tools</h2>
                                {/* Text */}
                                <p className="p-lg">Explore our suite of intuitive SaaS solutions designed to boost productivity, streamline operations, and grow your business—all from one platform.
                                </p>
                                {/* Button */}
                                <Link href="#banner-7" className="btn r-04 btn--theme hover--tra-black">Discover Our Tools</Link>
                               
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-15-img text-center wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-15-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
