import Layout from "@/components/layout/Layout"
import Bizworks_for from "@/components/sections/Bizworks_for"
import Bizworks_meta from "@/components/sections/Bizworks_meta"
import Bizworks_powerful_features from "@/components/sections/Bizworks_powerful_features"
import Bizworks_pricing from "@/components/sections/Bizworks_pricing"
import Bizworks_whychoose from "@/components/sections/Bizworks_whychoose"
import Hero18 from "@/components/sections/Hero18"
import Bizworks_integrations from "@/components/sections/Bizworks_integrations"
import Bizworks_review from "@/components/sections/Bizworks_review"
import Bizworks_faq from "@/components/sections/Bizworks_faq"
import Bizworks_bottom_banner from "@/components/sections/Bizworks_bottom_banner"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark light-hero-header">
                <Bizworks_meta />
                <Hero18 />
                <Bizworks_whychoose />
                <hr className="divider" />
                <Bizworks_powerful_features />
                <Bizworks_for />
                <Bizworks_pricing />
                <Bizworks_integrations/>
                <Bizworks_review />
                <Bizworks_faq />
                <Bizworks_bottom_banner />
            </Layout>
        </>
    )
}