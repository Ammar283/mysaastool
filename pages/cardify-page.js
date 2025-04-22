import Layout from "@/components/layout/Layout"
import Banner7_1 from "@/components/sections/Banner7_1"
import Features11_14 from "@/components/sections/Features11_14"
import CardifyFeatures2 from "@/components/sections/CardifyFeatures2"
import CardifyFeatures from "@/components/sections/CardifyFeatures"
import Hero5 from "@/components/sections/Hero5"
import Cardifypricing from "@/components/sections/cardify-pricing"
import CardifyFaq from "@/components/sections/CardifyFaq"
import CardifyMeta from "@/components/sections/cardify-meta"
import Integrations2_1 from "@/components/sections/Cardify-Integration"
import CardifyReviews from "@/components/sections/Cardify-Reviews"


export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark light-hero-header">
                <CardifyMeta/>
                <Hero5 />
                <Features11_14 />
                <CardifyFeatures />
                <hr className="divider" />
                <CardifyFeatures2 />
                <Cardifypricing />
                <Integrations2_1/>
                <CardifyReviews />
                <CardifyFaq/>
                <hr className="divider" />
                <Banner7_1 />
                <hr className="divider" />
            </Layout>
        </>
    )
}