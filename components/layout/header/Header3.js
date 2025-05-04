import Link from "next/link"
import Menu2 from "../Menu2"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, headerCls }) {
    return (
        <>
            <header id="header" className={`tra-menu white-scroll ${headerCls ? headerCls : ""}`}>
                <div className="header-wrapper">
                    {/* MOBILE HEADER */}
                    <div className="wsmobileheader clearfix">
                   
                         <span className="smllogo"><img src="/images/mysasstools.png" alt="mobile-logo" /></span> 
                        <a id="wsnavtoggle" className="wsanimated-arrow" onClick={handleMobileMenu}><span /></a>
                    </div>
                    {/* NAVIGATION MENU */}
                    <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
                        <div className="wsmainwp clearfix">
                            {/* HEADER BLACK LOGO */}
                            <div className="desktoplogo">
                                <Link href="#hero-1" className="logo-black">
                               
                                    <img className="light-theme-img" src="/images/mysasstools.png" alt="logo" />
                                    <img className="dark-theme-img" src="/images/mysasstools-white.png" alt="logo" /> 
                                </Link>
                            </div>
                            {/* HEADER WHITE LOGO */}
                            <div className="desktoplogo">
                           
                                <Link href="#hero-1" className="logo-white"><img src="/images/mysasstools-white.png" alt="logo" /></Link> 
                            </div>
                            {/* MAIN MENU */}
                            <nav className="wsmenu clearfix" style={{ height: `${isMobileMenu ? "100vh" : ""}` }}>
                                {isMobileMenu ? <Menu2 /> : <Menu2 />}
                            </nav> {/* END MAIN MENU */}
                        </div>
                    </div> {/* END NAVIGATION MENU */}
                </div> {/* End header-wrapper */}
            </header>

        </>
    )
}
