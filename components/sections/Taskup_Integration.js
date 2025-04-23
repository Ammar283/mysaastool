

import Link from "next/link"
export default function Taskup_Integration() {
    return (
        <>
            <section id="integrations-2" className=" integrations-section">
                <div className="container">
                    {/* INTEGRATIONS-2 WRAPPER */}
                    <div className="integrations-2-wrapper bg--white-400 r-12 text-center">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-50">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Seamless Integrations with Your Favorite Tools
                                    </h2>
                                    {/* Text */}
                                  
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
                                        <img className="img-fluid" src="/images/png_icons/tool-9.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Slack - Communication</h6>
                                </Link>
                            </div>	{/* END TOOL #1 */}
                            {/* TOOL #2 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-2 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-7.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Google Drive - File Storage</h6>
                                </Link>
                            </div>	{/* END TOOL #2 */}
                            {/* TOOL #3 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-3 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-13.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Dropbox - File Storage</h6>
                                </Link>
                            </div>	{/* END TOOL #3 */}
                            {/* TOOL #4 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-4 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-12.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Zapier - Automation</h6>
                                </Link>
                            </div>	{/* END TOOL #4 */}
                            {/* TOOL #5 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-11.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Trello - Project Management</h6>
                                </Link>
                            </div>	{/* END TOOL #5 */}
                             {/* TOOL #6 */}
                             <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-11.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Stripe - Payments </h6>
                                </Link>
                            </div>	{/* END TOOL #6 */}
                             {/* TOOL #7 */}
                             <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-11.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">QuickBooks - Accounting </h6>
                                </Link>
                            </div>	{/* END TOOL #7 */}
                              {/* TOOL #8 */}
                              <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-11.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">PayPal - Payments </h6>
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
