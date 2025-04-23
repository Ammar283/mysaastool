import Layout from "@/components/layout/Layout"
import Hero3 from "@/components/sections/Hero3"
import Whatspro_why_choose from "@/components/sections/Whatspro_why_choose"
import Whatspro_powerful_features from "@/components/sections/Whatspro_powerful_features"
import Whatspro_benefits from "@/components/sections/Whatspro_benefits"
import Whatspro_pricing from "@/components/sections/whatspro-pricing"
import Whatspro_integration from "@/components/sections/Whatspro_integration"
import Whatspro_reviews from "@/components/sections/Whatspro_reviews"
import Whatspro_faq from "@/components/sections/Whatspro_faq"
import Whatspro_banner from "@/components/sections/Whatspro_banner"
import Whatspro_meta from "@/components/sections/Whatspro_meta"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-light">
                <Whatspro_meta />
                <Hero3 />
                <Whatspro_why_choose />
                <Whatspro_powerful_features/>
                <Whatspro_benefits />
                <Whatspro_pricing />
                <Whatspro_integration/>
                <Whatspro_reviews />
                <Whatspro_faq />
                <Whatspro_banner />
            </Layout>
        </>
    )
}