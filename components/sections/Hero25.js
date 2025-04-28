

import Link from "next/link"
export default function Hero25() {
    return (
        <>
            <section id="hero-25" className="1gr--whitesmoke bg--fixed hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-25-txt wow fadeInRight">
                                {/* Section ID */}
                              
                                {/* Title */}
                                <h2 className="s-52 w-700">Simplify Hiring with Recruitly</h2>
                                {/* Text */}
                                <p className="p-lg">Streamline your recruitment process with our powerful SaaS solution designed to manage job applications and find the perfect candidates effortlessly.
                                </p>
                                {/* Button */}
                                <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--red-400 color-white  hover--black ">Try Free Demo</Link>
                                    <Link href="#features-5" className="btn r-04 btn--white hover--black">View Pricing</Link>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-25-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-25-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
