

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero10() {
    return (
        <>
            <section id="hero-10" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-10-txt wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-52 w-700">Launch Your Food Ordering Platform with Orderly</h2>
                                {/* Text */}
                               
                                {/* Buttons */}
                              
                                {/* Buttons Text */}
                                <p className="p-sm btns-group-txt mb-2">
                                Empower restaurants to create stunning, multilingual food ordering websites in minutes with Orderly’s multi-tenant SaaS solution.
                                </p>
                                <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--red-400 color-white  hover--black ">Get started Now</Link>
                                    <Link href="#features-5" className="btn r-04 btn--white hover--black">Request a Demo</Link>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-10-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/dashboard-04.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
