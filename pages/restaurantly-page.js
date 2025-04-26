import Layout from "@/components/layout/Layout"
import Hero26 from "@/components/sections/Hero26"
import Restaurantly_meta from "@/components/sections/Restaurantly_meta"
import Restaurantly_whychoose from "@/components/sections/Restaurantly_whychoose"
import Restaurantly_features from "@/components/sections/Restaurantly_features"
import Restaurantly_for from "@/components/sections/Restaurantly_for"
import Restaurantly_pricing from "@/components/sections/Restaurantly_pricing"
import Restaurantly_integrations from "@/components/sections/Restaurantly_integrations"
import Restaurantly_reviews from "@/components/sections/Restaurantly_reviews"
import Restaurantly_faq from "@/components/sections/Restaurantly_faq"
import Restaurantly_bottom_banner from "@/components/sections/Restaurantly_bottom_banner"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-light">
                <Restaurantly_meta />
                <Hero26 />
                <Restaurantly_whychoose />
                <Restaurantly_features />
                <hr className="divider" />
                <Restaurantly_for />
                <Restaurantly_pricing  />
                <Restaurantly_integrations />
                <Restaurantly_reviews />
                <hr className="divider" />
                <Restaurantly_faq />
                <Restaurantly_bottom_banner />   
            </Layout>
        </>
    )
}