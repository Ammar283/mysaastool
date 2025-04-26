
import Link from "next/link"
export default function Hero9() {
    return (
        <>
            <section id="hero-9" className="blur--purple hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-9-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-56 w-700">Evently: Your All-in-One Event Management Solution
                                </h2>
                                {/* Text */}
                                <p className="s-20"> Simplify event planning, ticketing, and management with Evently’s powerful SaaS platform. Create memorable events effortlessly.
                                </p>
                                <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--red-400 color-white  hover--black ">Get started Now</Link>
                                    <Link href="#features-5" className="btn r-04 btn--white hover--black">Schedule a Demo</Link>
                                </div>
                            
                                {/* Text */}
                               
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-9-img wow fadeInUp">
                                <img className="img-fluid" src="/images/dashboard-08.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
