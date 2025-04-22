import Layout from "@/components/layout/Layout"
import Banner3_1 from "@/components/sections/Banner3_1"
import Features12_1 from "@/components/sections/Features12_1"
import Features6_1 from "@/components/sections/Features6_1"
import Hero1 from "@/components/sections/Hero1"
import PostlyIntegration from "@/components/sections/Postly-integration"
import Lnk1_1 from "@/components/sections/Lnk1_1"
import PostlyMeta from "@/components/sections/postly-meta"
import PostlyPricing from "@/components/sections/postly-pricing"
import PostlyReviews from "@/components/sections/Postly-Reviews"
import PostlyFaq from "@/components/sections/PostlyFaq"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} headerCls="navbar-light">
                <PostlyMeta/>
                <Hero1 />
                <Features6_1 />
                <hr className="divider" />
                <Lnk1_1 />
                <Features12_1 />
                <PostlyPricing/>
                <PostlyIntegration />
                <PostlyReviews />
                <PostlyFaq/>
                <Banner3_1 />
            </Layout>
        </>
    )
}