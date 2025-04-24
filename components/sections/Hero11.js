

import Link from "next/link"
export default function Hero11() {
    return (
        <>
            <section id="hero-11" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-11-txt wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-50  w-700 mb-2">Connectly CRM:</h2>
                                <h2 className="s-35  w-700">Empower Your Business with Seamless Customer Management </h2>
                                {/* Text */}
                                <p className="p-lg">Streamline your customer relationships, projects, and invoicing with Connectly, the ultimate self-hosted CRM designed for businesses of all sizes.
                                </p>
                                {/* Button */}
                                <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--orange-500    r-04  ">Start Free Trial</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black hover--black">Explore Features</Link>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-11-img text-center wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-11-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
