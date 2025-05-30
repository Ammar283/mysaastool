

import Link from "next/link"
export default function Bookeasy_integrations() {
    return (
        <>
            <section id="integrations-2" className=" integrations-section">
                <div className="container">
                    {/* INTEGRATIONS-2 WRAPPER */}
                    <div className=" integrations-2-wrapper mb-100 bg--red-100 r-12 text-center">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-50">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Seamless Integrations  </h2>
                                    {/* Text */}
                                   <p>Connect BookEasy with your favorite tools to enhance productivity.</p>
                                </div>
                            </div>
                        </div>
                        {/* TOOLS ROW */}
                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5">
                              {/* TOOL #1 */}
                              <div className="col">
                                <Link href="#" className="in_tool it-1 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-1.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Google Calendar - Calendar Sync </h6>
                                </Link>
                            </div>	{/* END TOOL #1 */}
                              {/* TOOL #2 */}
                              <div className="col">
                                <Link href="#" className="in_tool it-1 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-1.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Zoom - Virtual Meetings</h6>
                                </Link>
                            </div>	{/* END TOOL #2 */}
                            {/* TOOL #3 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-1 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-1.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">PayPal - Payment Processing</h6>
                                </Link>
                            </div>	{/* END TOOL #3 */}
                            {/* TOOL #4 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-2 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-2.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Stripe - Payment Processing</h6>
                                </Link>
                            </div>	{/* END TOOL #4 */}
                            {/* TOOL #5 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-3 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-3.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Slack - Team Communication</h6>
                                </Link>
                            </div>	{/* END TOOL #5 */}
                            {/* TOOL #6 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-4 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-4.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Mailchimp - Email Marketing</h6>
                                </Link>
                            </div>	{/* END TOOL #6 */}
                            {/* TOOL #7 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-5.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Zapier - Workflow Automation</h6>
                                </Link>
                            </div>	{/* END TOOL #7 */}
                             {/* TOOL #8 */}
                             <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-5.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">QuickBooks - Accounting</h6>
                                </Link>
                            </div>	{/* END TOOL #8 */}
                        </div>	{/* END TOOLS ROW */}
                        {/* MORE BUTTON */}
                       
                    </div>	{/* END INTEGRATIONS-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
