
import ReviewSlider1 from "../slider/Orderly_slider"
export default function Orderly_review() {
    return (
        <>
            <section id="reviews-1" className="pt-100 shape--06 shape--gr-whitesmoke reviews-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Discover how Orderly has transformed food ordering for businesses worldwide.</h2>
                                {/* Text */}
           
                            </div>
                        </div>
                    </div>
                    {/* TESTIMONIALS CONTENT */}
                    <div className="row">
                        <div className="col">
                        <ReviewSlider1 />
                        </div>
                    </div>	{/* END TESTIMONIALS CONTENT */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
