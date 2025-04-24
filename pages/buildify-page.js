import Layout from "@/components/layout/Layout"
import Buildify_meta from "@/components/sections/Buildify_meta"
import Hero14 from "@/components/sections/Hero14"
import Buildify_whychoose from "@/components/sections/Buildify_whychoose"
import Buildify_features from "./Buildify_features"
import Buildify_for from "@/components/sections/Buildify_for"
import Buildify_pricing from "@/components/sections/Buildify_pricing"
import Buildify_integrations from "@/components/sections/Buildify_integrations"
import Buildify_reviews from "@/components/sections/Buildify_reviews"
import Buildify_faq from "@/components/sections/Buildify_faq"
import Buildify_bottom_banner from "@/components/sections/Buildify_bottom_banner"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark">
                <Buildify_meta />
                <Hero14 />
               
                <hr className="divider" />
                <Buildify_whychoose/>
                <Buildify_features />
               
                <Buildify_for />
                <Buildify_pricing />
                <Buildify_integrations />
                <Buildify_reviews />
                <Buildify_faq />
                <Buildify_bottom_banner />
            </Layout>
        </>
    )
}