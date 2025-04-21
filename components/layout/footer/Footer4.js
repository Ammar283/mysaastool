
import Link from "next/link"
export default function Footer4() {
    return (
        <>
            <footer id="footer-4" className="pt-100 footer ft-3-ntr">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER LOGO */}
                        <div className="col-xl-4">
                            <div className="footer-info">
                                <h4>mySaaS.tools</h4>
                                 {/* FOOTER LOGO  <img className="footer-logo" src="/images/logo-pink.png" alt="footer-logo" /> */}
                                 {/* <img className="footer-logo-dark" src="/images/logo-pink-white.png" alt="footer-logo" />*/}
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-sm-6 col-lg-6 col-xl-4">
                            <div className="footer-links fl-1">
                                {/* Title */}
                                <h6 className="s-17 w-700">Quick Links</h6>
                                {/* Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="#">Our Tools</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="#">About us</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="#">Contact</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="#">Privacy Policy</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div> {/* END FOOTER LINKS */}
                        {/* FOOTER LINKS */}
                        <div className="col-sm-6 col-lg-6 col-xl-4">
                            <div className="footer-links fl-3">
                                {/* Title */}
                                <h6 className="s-17 w-700">Contact Us</h6>
                                {/* Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="#">Email: support@mysaas.tools</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="">Phone: +1-800-123-4567</Link></p>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div> {/* END FOOTER LINKS */}
                    
                    
                    </div> {/* END FOOTER CONTENT */}
                    <hr /> {/* FOOTER DIVIDER LINE */}
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col">
                                <div className="footer-copyright">
                                    <p className="p-sm">© 2025 mySaaS.tools. <span>All Rights Reserved</span></p>
                                </div>
                            </div>
                            {/* FOOTER SOCIALS */}
                            <div className="col">
                                <ul className="bottom-footer-socials ico-20 text-end">
                                    <li><Link href="#"><span className="flaticon-facebook" /></Link></li>
                                    <li><Link href="#"><span className="flaticon-twitter" /></Link></li>
                                    <li><Link href="#"><span className="flaticon-instagram" /></Link></li>
                                    <li><Link href="#"><span className="flaticon-youtube" /></Link></li>
                                </ul>
                            </div>
                        </div> {/* End row */}
                    </div> {/* END BOTTOM FOOTER */}
                </div> {/* End container */}
            </footer>

        </>
    )
}
