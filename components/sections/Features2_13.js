

import Link from "next/link"
export default function Features2_13() {
    return (
        <>
            <section id="features-2" className="pt-100 pb-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Our SaaS Solutions </h2>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/cardify.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/cardify.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Cardify</h6>
                                        <p className="mb-2">Create, share, and update your business card—all in digital format.</p>
                                            <Link href="/cardify-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/postly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/postly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Postly</h6>
                                        <p className="mb-2">Plan, schedule, and manage posts across all platforms from one dashboard.</p>
                                            <Link href="/postly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/linkify.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/linkify.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Linkify</h6>
                                        <p className="mb-2">Create custom, trackable short links for your online content.</p>
                                            <Link href="/linkify-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/whatspro.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/whatspro.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">WhatsPro</h6>
                                        <p className="mb-2">Connect with customers, send promotions, and automate responses on WhatsApp.</p>
                                            <Link href="/whatspro-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/taskup.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/taskup.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">TaskUp</h6>
                                        <p className="mb-2">Boost team productivity with task lists, priorities, and deadlines.</p>
                                            <Link href="/taskup-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/qreat.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/qreat.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">QREats</h6>
                                        <p className="mb-2">Empower diners to order with ease—scan, order, and enjoy!</p>
                                            <Link href="/qreat-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/connectly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/connectly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Connectly</h6>
                                        <p className="mb-2">Manage contacts, nurture leads, and boost sales with streamlined CRM.</p>
                                            <Link href="/connectly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/cartify.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/cartify.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Cartify</h6>
                                        <p className="mb-2">Create, customize, and launch your eCommerce store with ease—no coding needed.</p>
                                            <Link href="/cartify-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/transactly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/transactly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Transactly</h6>
                                        <p className="mb-2">Secure, fast, and flexible payments—covering everything from wallets to QR payments.</p>
                                            <Link href="/transactly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/learnify.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/learnify.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Learnify</h6>
                                        <p className="mb-2">Deliver and manage courses with tools that empower learners.</p>
                                            <Link href="/learnify-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/bookeasy.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/bookeasy.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">BookEasy</h6>
                                        <p className="mb-2">Let clients book services in seconds with an intuitive, seamless interface.</p>
                                            <Link href="/bookeasy-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/buildifyai.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/buildifyai.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Buidify</h6>
                                        <p className="mb-2">Effortlessly generate content, text, images, video, chat, voice, and code with AI—all from a single platform.</p>
                                            <Link href="buildify-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/bizwork.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/bizwork.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">BizWorks</h6>
                                        <p className="mb-2">Manage operations, track resources, and drive efficiency across your organization.</p>
                                            <Link href="bizwork-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/sendflow.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/sendflow.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">SendFlow</h6>
                                        <p className="mb-2">Reach your audience with targeted campaigns that drive results.</p>
                                            <Link href="sendflow-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/restaurantly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/restaurantly.png..png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Restaurantly</h6>
                                        <p className="mb-2">Manage dine-in, takeaway, and delivery orders with ease using our all-in-one restaurant POS and ordering system.</p>
                                            <Link href="restaurantly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/orderly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/orderly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Orderly</h6>
                                        <p className="mb-2">Accept and manage online orders effortlessly with a customizable solution for food, retail, and services.</p>
                                            <Link href="orderly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/invoicely.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/invoicely.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Invoicly</h6>
                                        <p className="mb-2">Create, send, and track invoices in minutes—perfect for freelancers, small businesses, and teams.</p>
                                            <Link href="invoicly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/evently.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/evently.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Evently</h6>
                                        <p className="mb-2">Sell tickets, manage attendees, and promote events online with an intuitive ticketing solution.</p>
                                            <Link href="evently-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/supportly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/supportly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Supportly</h6>
                                        <p className="mb-2">Manage tickets, respond faster, and keep your customers happy with Supportly—your all-in-one helpdesk and support solution.</p>
                                            <Link href="supportly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/societyhub.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/societyhub.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">SocietyHub</h6>
                                        <p className="mb-2">From maintenance billing to resident communication—SocietyHub makes managing gated communities, apartments, and housing societies simple and organized.</p>
                                            <Link href="societyhub-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/sitezy.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/sitezy.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Sitezy</h6>
                                        <p className="mb-2">No code, no hassle. Just drag, drop, and launch your dream website with Sitezy.</p>
                                            <Link href="sitezy-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/whatseat.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/whatseat.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">WhatsEats</h6>
                                        <p className="mb-2">Let your customers browse, order, and get updates—all through WhatsApp. No apps, no downloads, just deliciously simple ordering.</p>
                                            <Link href="whatseat-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/resumely.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/resumely.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Resumly</h6>
                                        <p className="mb-2">Modern, professional resumes made easy—no design skills needed.</p>
                                            <Link href="resumly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/workly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/workly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Workly</h6>
                                        <p className="mb-2">Manage employee data, attendance, and payroll with Workly—your HR assistant.</p>
                                            <Link href="workly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/creatly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/creatly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Creately</h6>
                                        <p className="mb-2">Generate stunning content and images with the power of AI—fast, easy, and smart.</p>
                                            <Link href="creatly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/chatly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/chatly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Chatly</h6>
                                        <p className="mb-2">Automate conversations across Facebook, Instagram, eCommerce, and more with Chatly—your AI-powered assistant.</p>
                                            <Link href="chatly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/feedbackly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/feedbackly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Feedbackly</h6>
                                        <p className="mb-2">Streamline your product development with Feedbackly—gather insights, manage feedback, and build your roadmap seamlessly.</p>
                                            <Link href="feedbackly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                        <div className="row row-cols-1 row-cols-md-3 mb-4 ">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/whatsly.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/whatsly.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Whatsly</h6>
                                        <p className="mb-2">Harness the power of WhatsApp Business devices to automate bulk messaging, streamline engagement, and grow your business with Whatsly.</p>
                                            <Link href="whatsly-page" className="tra-link ico-20 color--theme">
                                                Learn More <span className="flaticon-next" />
                                            </Link>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                          
                          
                          
                         
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
