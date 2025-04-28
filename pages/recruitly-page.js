import Layout from "@/components/layout/Layout"
import Hero25 from "@/components/sections/Hero25"
import Recruitly_features from "@/components/sections/Recruitly_features"
import Recruitly_for from "@/components/sections/Recruitly_for"
import Recruitly_integrations from "@/components/sections/Recruitly_integrations"
import Recruitly_meta from "@/components/sections/Recruitly_meta"
import Recruitly_pricing from "@/components/sections/Recruitly_pricing"
import Recruitly_reviews from "@/components/sections/Recruitly_reviews"
import Recruilty_whychoose from "@/components/sections/Recruitly_whychoose"
import Recruitly_bottom_banner from "@/components/sections/Recruitly_bottom_banner"
import Recruitly_faq from "@/components/sections/Recruitly_faq"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark light-hero-header">
                <Recruitly_meta />
                <Hero25 />
                <Recruilty_whychoose />
                <Recruitly_features />
                <Recruitly_for />
                <Recruitly_pricing />
                <Recruitly_integrations />
                <Recruitly_reviews />
               <Recruitly_faq/>
                <Recruitly_bottom_banner />
            </Layout>
        </>
    )
}