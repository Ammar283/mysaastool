import Layout from "@/components/layout/Layout"
import ConnectlyMeta from "@/components/sections/Connectly_meta"
import Hero11 from "@/components/sections/Hero11"
import Connectly_why_choose from "@/components/sections/Connectly_why_choose"
import Connectly_growth from "@/components/sections/Connectly_growth"
import Connectly_for from "@/components/sections/Connectly_for"
import Connectly_pricing from "@/components/sections/Connectly_pricing"
import Connectly_Integration from "@/components/sections/Connectly_Integration"
import Connectly_reviews from "@/components/sections/Connectly_reviews"
import Connectly_Faq from "@/components/sections/Connectly_Faq"
import Connectly_banner_bottom from "@/components/sections/Connectly_banner_bottom"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark white-menu">
                <ConnectlyMeta />
                <Hero11 />
                <hr className="divider" />
                <Connectly_why_choose />    
                <Connectly_growth/>
                <Connectly_for />
                <Connectly_pricing />
                <Connectly_Integration />
                <Connectly_reviews/>
                <Connectly_Faq  />
                <Connectly_banner_bottom />

            </Layout>
        </>
    )
}