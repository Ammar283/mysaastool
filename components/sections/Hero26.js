
import Link from "next/link"
export default function Hero26() {
    return (
        <>
            <section id="hero-26" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-26-txt color--white wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-60 w-700">Transform Your Restaurant with Restaurantly</h2>
                                {/* Text */}
                                <p className="p-lg">Elevate your dining operations with Restaurantly, the all-in-one SaaS solution designed to streamline processes, boost efficiency, and personalize customer experiences.
                                </p>
                                <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--yellow-500 color-white  hover--black ">Start Free Trial</Link>
                                    <Link href="#features-5" className="btn r-04 btn--white hover--black">View Demo</Link>
                                </div>
           
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-26-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-26-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fillOpacity={1} d="M0,256L120,250.7C240,245,480,235,720,224C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
