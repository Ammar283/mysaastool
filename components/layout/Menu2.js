import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu2() {
    const router = useRouter()

    return (
        <>

            <ul className="wsmenu-list nav-theme">
                {/* DROPDOWN SUB MENU */}
               
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true"><Link href="#" className="h-link">Tools</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="#" className="h-link">About</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="#" className="h-link">Contact</Link></li>
                
               <Link href="#banner-7" className=" btn-top r-04 btn--theme hover--tra-black">Get Started</Link>
              
             
            </ul>
        </>
    )
}
