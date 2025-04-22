

import Link from "next/link"
export default function Hero5() {
    return (
        <>
            <section id="hero-5" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-5-txt wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-58 w-700">Create Stunning Digital Business Cards with Cardify</h2>
                                {/* Text */}
                                <p className="p-lg">Effortlessly design, manage, and share professional digital vCards with QR codes and NFC technology to boost your networking.
                                </p>
                             
                                {/* Button */}
                                <div className="btns-group">
                                            <Link href="#" className="btn r-04 color--theme-blue color-white color--theme-blue-hover ">Get started for free
                                            </Link>
                                            <Link href="#" className="btn r-04 btn--tra-black color--theme-blue-hover">Explore Features</Link>
                                        </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-5-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/img-18.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fillOpacity={1} d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
