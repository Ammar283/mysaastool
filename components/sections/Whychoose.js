

export default function Whychoose() {
    return (
        <>
            <section id="lnk-2" className="bg--white-400 py-100 ct-04 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                          
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* CONTENT BOX #1 */}
                                <h3 className="s-50 w-700 mb-5">Why Choose mySaaS.tools?</h3>
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">1</div>
                                        <span className="cbox-2-line" />
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">All-in-One Platform</h5>
                                        <p>Access a full suite of tools to manage marketing, sales, operations, and more from a single hub.
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #1 */}
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">2</div>
                                        <span className="cbox-2-line" />
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Easy to Use</h5>
                                        <p>Intuitive interfaces designed for beginners and professionals—no steep learning curve.
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #2 */}
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">3</div>
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Scalable Solutions</h5>
                                        <p className="mb-0">Grow your business with tools that adapt to your needs, from startups to enterprises.
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #3 */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block wow fadeInLeft">
                                <img className="img-fluid" src="/images/tablet-02.png" alt="content-image" />
                            </div>
                        </div>
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
