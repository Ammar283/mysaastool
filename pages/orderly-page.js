import Layout from "@/components/layout/Layout"
import Hero10 from "@/components/sections/Hero10"
import Orderly_bottom_banner from "@/components/sections/Orderly_bottom_banner"
import Orderly_faq from "@/components/sections/Orderly_faq"
import Orderly_features from "@/components/sections/Orderly_features"
import Orderly_for from "@/components/sections/Orderly_for"
import Orderly_integrations from "@/components/sections/Orderly_integrations"

import Orderly_meta from "@/components/sections/Orderly_meta"
import Orderly_pricing from "@/components/sections/Orderly_pricing"
import Orderly_review from "@/components/sections/Orderly_reviews"
import Orderly_whychoose from "@/components/sections/Orderly_whychoose"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark">
                <Orderly_meta />
                <Hero10 />
              <Orderly_whychoose />
              <Orderly_features />
              <Orderly_for />
              <Orderly_pricing />
              <Orderly_integrations />
              <Orderly_review />
              <Orderly_faq />
              <Orderly_bottom_banner />
            </Layout>
        </>
    )
}