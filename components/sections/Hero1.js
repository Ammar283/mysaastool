

import Link from "next/link"
export default function Hero1() {
    return (
        <>
            <section id="hero-1" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-1-txt color--white wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-58 w-700">Automate Your Social Media with Postly  </h2>
                                {/* Text */}
                                <p className="p-xl">Effortlessly manage, schedule, and optimize your social media presence with Postly’s AI-powered SaaS platform. Save time, boost engagement, and grow your brand.
                                </p>
                                {/* Button */}
                                <div className="btns-group">
                                            <Link href="#" className="btn r-04 color--theme-white color-white color--theme-purple-hover ">Start Free Trial
                                            </Link>
                                            <Link href="#" className="btn r-04  color--theme-purple-hover">View Demo</Link>
                                        </div>
                               
                                   
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-1-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-1-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
