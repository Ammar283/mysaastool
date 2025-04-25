import Layout from "@/components/layout/Layout"
import Banner13_9 from "@/components/sections/Senflow_bottom_banner"
import Brands1_17 from "@/components/sections/Brands1_17"
import Ct02_38 from "@/components/sections/Ct02_38"
import Ct02_39 from "@/components/sections/Ct02_39"
import Ct02_40 from "@/components/sections/Ct02_40"
import Ct04_15 from "@/components/sections/Ct04_15"
import Faqs3_13 from "@/components/sections/Faqs3_13"
import Features11_8 from "@/components/sections/Features11_8"
import Features12_8 from "@/components/sections/Features12_8"
import Features2_19 from "@/components/sections/Features2_19"
import Features5_10 from "@/components/sections/Features5_10"
import Hero21 from "@/components/sections/Hero21"
import Integrations1_9 from "@/components/sections/Sendflow_integrations"
import Lnk1_21 from "@/components/sections/Lnk1_21"
import Reviews1_11 from "@/components/sections/Sendflow_reviews"
import Sendflow_for from "@/components/sections/Sendflow_for"
import Sendflow_growth from "@/components/sections/Sendflow_growth"
import Sendflow_meta from "@/components/sections/Sendflow_meta"
import Sendflow_pricing from "@/components/sections/Sendflow_pricing"
import Sendflow_why_choose from "@/components/sections/Sendflow_whychoose"
import Statistic1_17 from "@/components/sections/Statistic1_17"
import Statistic5_5 from "@/components/sections/Statistic5_5"
import Wswrapper_10 from "@/components/sections/Wswrapper_10"
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