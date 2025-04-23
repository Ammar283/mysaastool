import Layout from "@/components/layout/Layout"
import Hero4 from "@/components/sections/Hero4"
import Taskup_why_choose from "@/components/sections/Taskup_why_choose"
import Taskup_powerful_features from "@/components/sections/Taskup_powerful_features"
import Taskup_for from "@/components/sections/Taskup_for"
import Taskup_pricing from "@/components/sections/Taskup_pricing"
import Taskup_Integration from "@/components/sections/Taskup_Integration"
import Taskup_reviews from "@/components/sections/Taskup_reviews"
import Taskup_faq from "@/components/sections/Taskup_faq"
import Taskup_banner_bottom from "@/components/sections/Taskup_banner_bottom"
import Taskup_meta from "@/components/sections/Taskup_meta"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-dark">
                <Taskup_meta/>
                <Hero4 />
                <hr className="divider" />
                <Taskup_why_choose />
                <hr className="divider" />
                <Taskup_powerful_features/>
                <Taskup_for/>
                <Taskup_pricing />
                <Taskup_Integration />
                <Taskup_reviews />
                <Taskup_faq/>
                <Taskup_banner_bottom />
               
            </Layout>
        </>
    )
}