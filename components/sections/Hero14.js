import Link from "next/link"

export default function Hero14() {
    return (
        <>
            <section id="hero-17" className="bg--scroll hero-section  ">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-14-txt color--black wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-60 w-700">Unleash Creativity with Buildify AI</h2>
                                {/* Text */}
                                <p className="s-21">Buildify AI is your all-in-one SaaS platform to generate high-quality text, images, code, and chat instantly. Transform your workflow with cutting-edge AI technology.
                                </p>
                                <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--purple-400    r-04  ">Get Started Free</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black hover--black">Explore Features</Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-14-img wow fadeInUp">
                                <img className="img-fluid" src="/images/dashboard-02.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM 
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190"><path fillOpacity={3} d="M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div> */}
            </section>
        </>
    )
}
