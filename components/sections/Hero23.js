
import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero23() {
    return (
        <>
            <section id="hero-23" className="bg--scroll hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-10">
                            <div className="hero-23-txt wow fadeInUp">
                                {/* Hero Logo  */}
                                <div className="hero-square-logo">
                                    <img className="img-fluid" src="/images/square-logo.png" alt="hero-logo" />
                                </div>
                                {/* Title */}
                                <h2 className="s-58 w-700">
                                Simplify Your Business with Invoicly
                                </h2>
                                {/* Text */}
                                <p className="p-xl">Streamline invoicing, expense tracking, and business management with our all-in-one SaaS accounting solution.
                                </p>
                                <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04  color--theme-green color-white  hover--green-400 ">Get started Now</Link>
                                    <Link href="#features-5" className="btn r-04 btn--white hover--black">Request a Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>	{/*END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-23-img video-preview wow fadeInUp">
                                {/* Play Icon */}
                             
                                {/* Preview Image */}
                                <img className="img-fluid" src="/images/dashboard-03.png" alt="video-preview" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity={1} d="M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,277.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
