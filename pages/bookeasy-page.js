import Layout from "@/components/layout/Layout"
import Bookeasy_Features from "@/components/sections/Bookeasy_features"
import BookEasy_Meta from "@/components/sections/bookeasy_meta"
import Bookeasy_whychoose from "@/components/sections/Bookeasy_whychoose"
import Hero13 from "@/components/sections/Hero13"
import Bookeasy_benefits from "@/components/sections/Bookeasy_benefits"
import Bookeasy_pricing from "@/components/sections/Bookeasy_pricing"
import Bookeasy_integrations from "@/components/sections/Bookeasy_integrations"
import Bookeasy_review from "@/components/sections/Bookeasy_review"
import Bookeasy_faq from "@/components/sections/Bookeasy_faq"
import Bookeasy_bottom_banner from "@/components/sections/Bookeasy_bottom_banner"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark">
                <BookEasy_Meta />
                <Hero13 />
                <Bookeasy_whychoose/>
                <Bookeasy_Features/>
                <hr className="divider" />
                <Bookeasy_benefits />
                <Bookeasy_pricing />
                <Bookeasy_integrations />
                <Bookeasy_review />
                <Bookeasy_faq />
                <Bookeasy_bottom_banner />
            </Layout>
        </>
    )
}