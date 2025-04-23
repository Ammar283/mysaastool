
import Link from "next/link"
export default function Hero3() {
    return (
        <>
            <section id="hero-3" className="bg--fixed hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-8 ">
                            <div className="hero-3-txt color--white wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-60 w-700">WhatsPro: Your Ultimate WhatsApp Marketing Solution</h2>
                                {/* Text */}
                                <p className="p-lg">Empower your business with WhatsPro, a white-labeled SaaS platform for WhatsApp marketing. Launch bulk campaigns, automate chats, and manage contacts effortlessly.
                                </p>
                                {/* HERO DIGITS */}
                                  <div className="btns-group">
                                     <Link href="#" className="btn r-04 color--theme-green-white color-white color--theme-green-hover ">Get Started Now
                                     </Link>
                                     <Link href="#" className="btn r-04  color--theme-green-outline">Request a Demo</Link>
                                   </div>
                                <div className="hero-digits">
                                    {/* DIGIT BLOCK #1 */}
                            
                                    {/* DIGIT BLOCK #2 */}
                                 
                                </div>	{/* END HERO DIGITS */}
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-4">
                            <div className="hero-3-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/tablet-01.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
