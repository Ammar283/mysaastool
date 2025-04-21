

export default function CardifyFeatures() {
    return (
        <>
            <section id="features-2" className="py-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Powerful Features to Elevate Your Networking </h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Cardify offers a robust set of tools to create and manage digital business cards that leave a lasting impression.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-2">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img mb-2" src="/images/f_01.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img mb-2" src="/images/f_01_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-start">
                                        <h6 className="s-22 w-700">Dynamic QR Code Generation</h6>
                                        <p className="mb-2">Generate unique QR codes for each card to enable instant sharing and contact saving.</p>
                                        <ul class="simple-list">
                                            <li class="list-item"><p><b>Instant Sharing:</b> Recipients scan to access your card details.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Editable Codes: </b>Update card info without changing the QR code.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Editable Codes: </b>Update card info without changing the QR code.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className=" fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className=" gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img mb-2" src="/images/f_06.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img mb-2" src="/images/f_06_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-start">
                                        <h6 className="s-22 w-700">Effortless Integration</h6>
                                        <p className="mb-2">Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat</p>
                                        <ul class="simple-list">
                                            <li class="list-item"><p><b>Instant Sharing:</b> Recipients scan to access your card details.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Editable Codes: </b>Update card info without changing the QR code.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Editable Codes: </b>Update card info without changing the QR code.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                      
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
