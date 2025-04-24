import ReviewSlider1 from "../slider/ConnectlySlider"

export default function Connectly_reviews() {
    return (
        <>
            <section id="reviews-1" className="gr--whitesmoke pt-100 reviews-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-45 w-700">Hear from businesses who transformed their operations with Connectly CRM.</h2>
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
