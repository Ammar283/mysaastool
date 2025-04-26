import Layout from "@/components/layout/Layout"
import Hero23 from "@/components/sections/Hero23"
import Invoicly_bottom_banner from "@/components/sections/Invoicly_bottom_banner"
import Invoicly_faq from "@/components/sections/Invoicly_faq"
import Invoicly_features from "@/components/sections/Invoicly_features"
import Invoicly_for from "@/components/sections/Invoicly_for"
import Invoicly_integrations from "@/components/sections/Invoicly_integrations"
import Invoicly_meta from "@/components/sections/Invoicly_meta"
import Invoicly_pricing from "@/components/sections/Invoicly_pricing"
import Invoicly_review from "@/components/sections/Invoicly_review"
import Invoicly_whychoose from "@/components/sections/Invoicly_whychoose"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark">
                <Invoicly_meta />
                <Hero23 />
                <Invoicly_whychoose />
                <Invoicly_features />
                <Invoicly_for />
                <Invoicly_pricing />
                <Invoicly_integrations />
                <Invoicly_review />
                <Invoicly_faq  />
                <Invoicly_bottom_banner />
                <hr className="divider" />
            </Layout>
        </>
    )
}