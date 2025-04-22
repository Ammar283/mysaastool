

import Link from "next/link"
export default function PostlyIntegration() {
    return (
        <>
            <section id="integrations-2" className=" pb-100 integrations-section">
                <div className="container">
                    {/* INTEGRATIONS-2 WRAPPER */}
                    <div className="integrations-2-wrapper bg--02 r-16 text-center">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-50">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Seamless Integrations with Your Favorite Tools </h2>
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
                                        <img className="img-fluid" src="/images/png_icons/tool-1.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700 mb-3">Facebook - Social Media Platform</h6>
                                </Link>
                            </div> {/* END TOOL #1 */}
                            {/* TOOL #2 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-2 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-2.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700 mb-3">Instagram - Social Media Platform </h6>
                                </Link>
                            </div> {/* END TOOL #2 */}
                            {/* TOOL #3 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-3 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-3.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700 mb-3">Twitter - Social Media Platform</h6>
                                </Link>
                            </div> {/* END TOOL #3 */}
                                     {/* TOOL #4 */}
                                     <div className="col">
                                <Link href="#" className="in_tool it-4 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-4.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700 mb-3">LinkedIn - Social Media Platform</h6>
                                </Link>
                            </div> 
                            {/* END TOOL #4 */}

                            {/* TOOL #5 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-4 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-4.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700 mb-3">Google Analytics - Analytics Tool</h6>
                                </Link>
                            </div> {/* END TOOL #5 */}
                            {/* TOOL #6 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-5.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Canva - Design Tool </h6>
                                </Link>
                            </div> {/* END TOOL #6 */}
                    
                            <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-5.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Zapier - Automation Tool</h6>
                                </Link>
                            </div> {/* END TOOL #7 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-5.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Hootsuite - Social Media Management</h6>
                                </Link>
                            </div> {/* END TOOL #8 */}
                        </div> {/* END TOOLS ROW */}
                        {/* MORE BUTTON */}
                      
                    </div> {/* END INTEGRATIONS-2 WRAPPER */}
                </div> {/* End container */}
            </section>
        </>
    )
}
