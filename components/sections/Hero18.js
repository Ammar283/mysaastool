import Link from "next/link"
export default function Hero18() {
    return (
        <>
            <section id="hero-18" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="hero-18-img wow fadeInRight">
                                <img className="img-fluid" src="/images/hero-18-img.png" alt="hero-image" />
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="hero-18-txt wow fadeInLeft">
                                {/* Title */}
                                <h2 className="s-56 w-700">Transform Your Business with BizWorks</h2>
                                {/* Text */}
                                <p className="p-xl">BizWorks is your all-in-one SaaS ERP solution, seamlessly 
                                    integrating accounting, HRM, CRM, POS, and project management to drive efficiency and growth.
                                </p>
                                {/* Button */}
                                <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--blue-400 hover--blue-400  r-04  ">Get Started Free</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black hover--blue-400">Book a Demo</Link>
                                </div>
                             
                               
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
