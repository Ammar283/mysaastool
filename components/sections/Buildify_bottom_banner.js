

import Link from "next/link"
export default function Buildify_bottom_banner() {
    return (
        <>
            <section id="banner-7" className="mt-100 bg--purple-400  bg--scroll banner-section">
                <div className="banner-overlay py-100">
                    <div className="container">
                        {/* BANNER-7 WRAPPER */}
                        <div className="banner-7-wrapper">
                            <div className="row justify-content-center">
                                {/* BANNER-7 TEXT */}
                                <div className="col-md-8">
                                    <div className="banner-7-txt color--white text-center">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Start Creating with Buildify AI Today     </h2>
                                     
                                    
                                        {/* Button Text */}
                                        <p className="p-sm btn-txt ico-15">
                                           Join thousands of businesses and creators using Buildify AI to transform their workflows. Try it free and see the difference!
                                        </p>
                                        <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--tra-white   r-04  ">Get Started Free</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black hover--black">Explore Features</Link>
                                </div>
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>    {/* END BANNER-7 WRAPPER */}
                    </div>    {/* End container */}
                </div>     {/* End banner overlay */}
            </section>
        </>
    )
}
