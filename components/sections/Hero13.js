

import Link from "next/link"
export default function Hero13() {
    return (
        <>
            <section id="hero-13" className="hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-5">
                            <div className="hero-13-txt wow fadeInRight">
                                {/* Section ID */}
                                <span className="section-id">Strategies That Work</span>
                                {/* Title */}
                                <h2 className="s-50 w-700">Simplify Your Service Bookings with BookEasy
                                </h2>
                                {/* Text */}
                                <p className="p-lg">Effortlessly manage appointments, staff, and payments for multiple businesses with BookEasy’s all-in-one SaaS platform.
                                </p>
                                {/* Button */}
                                <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--red-400  r-04 ">Get Started Free</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black  hover--black">Request a demo</Link>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-7">
                            <div className="hero-13-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-13-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
