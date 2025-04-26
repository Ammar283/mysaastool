

export default function Evently_Features() {
    return (
        <>
            <section id="features-2" className="py-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Powerful Features to Elevate Your Events
                                </h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Evently provides everything you need to create, manage, and promote events with ease and efficiency.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-2">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="gr--whitesmoke cardify-h175 ">
                                        <img className="img-fluid light-theme-img mb-2" src="/images/f_01.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img mb-2" src="/images/f_01_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-start">
                                        <h6 className="s-22 w-700">Seamless Event Creation</h6>
                                        <p className="mb-2">Create and customize events with ease, from venues to online streams..</p>
                                        <ul class="simple-list">
                                            <li class="list-item"><p><b>Flexible Event Types:</b> Host in-person, virtual, or hybrid events.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Custom Branding: </b>  Add logos, colors, and themes to match your brand.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Event Scheduling:</b> Set single or recurring events with precise timings.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col mb-5">
                                <div className=" fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className=" gr--whitesmoke cardify-h175">
                                        <img className="img-fluid light-theme-img mb-2" src="/images/f_06.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img mb-2" src="/images/f_06_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-start">
                                        <h6 className="s-22 w-700">Advanced Ticketing System</h6>
                                        <p className="mb-2">Sell and manage tickets with a robust, secure system designed for scale.</p>
                                        <ul class="simple-list">
                                            <li class="list-item"><p><b>QR Code Tickets:</b>  Issue scannable tickets for quick check-ins.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Multiple Ticket Types:</b> Offer VIP, general, or early-bird options.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Payment Integration:</b> Accept payments via Stripe, PayPal, and more.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                              {/* FEATURE BOX #3 */}
                              <div className="col">
                                <div className=" fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className=" gr--whitesmoke cardify-h175">
                                        <img className="img-fluid light-theme-img mb-2" src="/images/f_06.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img mb-2" src="/images/f_06_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-start">
                                        <h6 className="s-22 w-700">Marketing & Promotions</h6>
                                        <p className="mb-2">Boost event visibility with built-in marketing tools and notifications.</p>
                                        <ul class="simple-list">
                                            <li class="list-item"><p><b>Push Notifications</b>  Send real-time updates to attendees.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Email Campaigns:</b> Automate personalized email reminders.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Coupon Management:  </b>Offer discounts to drive ticket sales.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                                {/* FEATURE BOX #4 */}
                                <div className="col">
                                <div className=" fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className=" gr--whitesmoke cardify-h175">
                                        <img className="img-fluid light-theme-img mb-2" src="/images/f_06.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img mb-2" src="/images/f_06_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-start">
                                        <h6 className="s-22 w-700">Comprehensive Reporting</h6>
                                        <p className="mb-2">Gain insights with detailed reports on sales, attendees, and performance.</p>
                                        <ul class="simple-list">
                                            <li class="list-item"><p><b>Revenue Tracking: </b> Monitor earnings by event or organizer.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Attendee Insights: </b> Analyze customer data for better targeting.</p></li>
                                            <li class="list-item"><p class="mb-0"><b>Exportable Reports: </b> Download data for external analysis.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #4 */}
                      
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
