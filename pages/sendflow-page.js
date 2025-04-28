import Layout from "@/components/layout/Layout"
import Hero21 from "@/components/sections/Hero21"
import Sendflow_for from "@/components/sections/Sendflow_for"
import Sendflow_growth from "@/components/sections/Sendflow_growth"
import Sendflow_meta from "@/components/sections/Sendflow_meta"
import Sendflow_pricing from "@/components/sections/Sendflow_pricing"
import Sendflow_why_choose from "@/components/sections/Sendflow_whychoose"
import Sendflow_integrations from "@/components/sections/Sendflow_integrations"
import Sendflow_reviews from "@/components/sections/Sendflow_reviews"
import Sendflow_faq from "@/components/sections/Sendflow_faq"
import Sendflow_bottom_banner from "@/components/sections/Senflow_bottom_banner"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark light-hero-header">
                <Sendflow_meta />
                <Hero21 />
                <Sendflow_why_choose />
                <Sendflow_growth />
                <Sendflow_for />
                <Sendflow_pricing />
                <Sendflow_integrations />
                <Sendflow_reviews />
                <Sendflow_faq />
                <Sendflow_bottom_banner />
            </Layout>
        </>
    )
}