

export default function Bizworks_for() {
    return (
        <>
            <section id="features-2" className=" mt-100 py-100 bg--blue-100  features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Who is it for? </h2>
                                {/* Text */}
                                <p className="s-21 color--grey">BizWorks is designed for businesses of all sizes looking to consolidate their operations and drive growth with a single, powerful platform.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-4">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img  h-175">
                                        <img className="img-fluid light-theme-img" src="/images/f_01.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_01_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 pb-2 w-700">Small Businesses</h6>
                                        <p>Simplify accounting, inventory, and customer management with an affordable, all-in-one solution.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img h-175">
                                        <img className="img-fluid light-theme-img" src="/images/f_06.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_06_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 pb-2  w-700">Growing Enterprises</h6>
                                        <p>Scale operations with advanced project management, HRM, and CRM tools tailored to your needs.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img  h-175">
                                        <img className="img-fluid light-theme-img" src="/images/f_08.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_08_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 pb-2  w-700">Retail & POS Operators</h6>
                                        <p>Streamline point-of-sale transactions, inventory tracking, and barcode printing for seamless retail operations.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                             {/* FEATURE BOX #4 */}
                             <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img  h-175">
                                        <img className="img-fluid light-theme-img" src="/images/f_08.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_08_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 pb-2  w-700">Freelancers & Agencies
                                        </h6>
                                        <p>Manage projects, clients, and invoicing efficiently to focus on delivering exceptional services.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #4 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
