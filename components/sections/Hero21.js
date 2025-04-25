

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero21() {
    return (
        <>
            <section id="hero-21" className="hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-21-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-56 w-700">Empower Your Business with SendFlow Email Marketing
                                </h2>
                                <p >SendFlow is a self-hosted, open-source email marketing platform designed to deliver high-volume campaigns with ease. Take control of your email strategy, automate workflows, and track performance—all from one powerful solution.</p>
                                {/* Buttons */}
                                <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--green-400 color-white  hover--green-400 ">Get started Now</Link>
                                    <Link href="#features-5" className="btn r-04 outline--green-400 hover--black">Schedule a Demo</Link>
                                </div>
                              
                               
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="hero-21-wrapper r-34">
                        <div className="hero-overlay bg--fixed">
                            <div className="row">
                                <div className="col">
                                    <div className="hero-21-img video-preview wow fadeInUp">
                                        {/* Play Icon */}
                                       
                                        {/* Preview Image */}
                                        <img className="img-fluid" src="/images/tablet-01.png" alt="video-preview" />
                                    </div>
                                </div>
                            </div>
                        </div>   {/* hero overlay */}
                    </div>    {/* End hero-21-wrapper */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
