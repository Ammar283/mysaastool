

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero4() {
    return (
        <>
            <section id="hero-4" className="bg--scroll hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-10">
                            <div className="hero-4-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-56 w-700">TaskUp: Your All-in-One Project Management Solution </h2>
                                {/* Buttons */}
                                <p className="p-sm btns-group-txt color--black">
                                Simplify teamwork, manage projects, and achieve results with TaskUp’s real-time collaboration and powerful task management tools. 
                                </p>
                                <div className="btns-group mt-15">
                                    <Link href="#" className="btn btn--violet-500 r-04    hover--black">Start Free Trial</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black hover--black">Watch Demo</Link>
                                </div>
                                {/* Buttons Group Text */}
                              
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-4-img video-preview wow fadeInUp">
                                {/* Play Icon */}
                              
                                {/* Preview Image */}
                                <img className="img-fluid" src="/images/dashboard-04.png" alt="video-preview" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>    {/* End container */}
            </section>
        </>
    )
}
