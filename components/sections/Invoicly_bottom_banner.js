
import Link from "next/link"
export default function Invoicly_bottom_banner() {
    return (
        <>
            <section id="banner-13" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-13 WRAPPER */}
                    <div className="banner-13-wrapper bg--green-100  bg--scroll r-16 block-shadow">
                        <div className="banner-overlay">
                            <div className="row d-flex align-items-center">
                                {/* BANNER-5 TEXT */}
                                <div className="col-md-7">
                                    <div className="banner-13-txt">
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Ready to Simplify Your Accounting?</h2>
                                        {/* Text */}
                                        <p className="p-lg">Join thousands of businesses using Invoicly to manage finances effortlessly.
                                        </p>
                                       
                                         {/* Button */}
                                        <div className="btns-group mt-15">
                                            <Link href="#" className="btn color--theme-green color-white  hover--green-400    r-04  ">Start Free Trial</Link>
                                            <Link href="#" className="btn r-04 btn--tra-black hover--black">Contact Sales</Link>
                                        </div>
                                    </div>
                                </div>	{/* END BANNER-13 TEXT */}
                                {/* BANNER-13 IMAGE */}
                                <div className="col-md-5">
                                    <div className="banner-13-img text-center">
                                        <img className="img-fluid" src="/images/img-04.png" alt="banner-image" />
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>   {/* End banner overlay */}
                    </div>    {/* END BANNER-13 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
