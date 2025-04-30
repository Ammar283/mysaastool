import Layout from "@/components/layout/Layout"

import Features2_13 from "@/components/sections/Features2_13"
import Hero15 from "@/components/sections/Hero15"
import Lnk2_15 from "@/components/sections/Lnk2_15"
import Whychoose from "@/components/sections/Whychoose"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark light-hero-header">
                <Hero15 />
                {/*   <Statistic1_12 /> */}
                <hr className="divider" />
                <Features2_13 />
                <hr className="divider" />
                  <Whychoose />
                <hr className="divider" />
                <Lnk2_15 />
              
            </Layout>
        </>
    )
}