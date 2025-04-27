import Layout from "@/components/layout/Layout"
import Hero9 from "@/components/sections/Hero9"
import Evently_meta from "@/components/sections/Evently_meta"
import Evently_whychoose from "@/components/sections/Evently_whychoose"
import Evently_Features from "@/components/sections/Evently_features"
import Evently_benefits from "@/components/sections/Evently_benefits"
import Evently_pricing from "@/components/sections/Evently_pricing"
import Evently_integrations from "@/components/sections/Evently_integrations"
import Evently_reviews from "@/components/sections/Evently_reviews"
import Evently_bottom_banner from "@/components/sections/Evently_bottom_banner"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark">
                <Evently_meta />
              
                <Hero9 />
                <Evently_whychoose />
                <Evently_Features />
                <Evently_benefits  />
                <Evently_pricing />
                <Evently_integrations />
                <Evently_reviews />
                <Evently_bottom_banner />
            </Layout>
        </>
    )
}