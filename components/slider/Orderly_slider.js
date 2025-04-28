
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}


export default function OrderlySlider() {
    return (
        <>

            {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}
            <Swiper {...swiperOptions} className="reviews-1-wrapper">
                {/* TESTIMONIAL #1 */}
                <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
                    {/* Quote Icon */}
                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                    {/* Text */}
                    <div className="review-txt">
                        {/* Text */}
                        <p>""Orderly made it incredibly easy to launch our restaurant’s online ordering system. The QR menu feature is a game-changer!""
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-1.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Sarah M.</h6>
                                <p className="p-sm">  Restaurant Owner</p>
                            </div>
                        </div> {/* End Author */}
                    </div> {/* End Text */}
                </SwiperSlide> {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
                    {/* Quote Icon */}
                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                    {/* Text */}
                    <div className="review-txt">
                        {/* Text */}
                        <p>"The multilingual support and payment gateways helped us expand our food delivery platform to new markets effortlessly."
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-2.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700"> Ahmed K. </h6>
                                <p className="p-sm">Food Delivery Startup</p>
                            </div>
                        </div> {/* End Author */}
                    </div> {/* End Text */}
                </SwiperSlide> {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
                    {/* Quote Icon */}
                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                    {/* Text */}
                    <div className="review-txt">
                        {/* Text */}
                        <p>"As a SaaS provider, white-labeling Orderly allowed us to offer a robust solution to our clients with minimal effort."
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-3.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Priya S.</h6>
                                <p className="p-sm">SaaS Entrepreneur</p>
                            </div>
                        </div> {/* End Author */}
                    </div> {/* End Text */}
                </SwiperSlide> {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
                    {/* Quote Icon */}
                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                    {/* Text */}
                    <div className="review-txt">
                        {/* Text */}
                        <p>"The flexibility of the subscription plans and the PWA feature have significantly improved our customer experience."
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-4.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">James L. </h6>
                                <p className="p-sm"> Restaurant Chain Manager</p>
                            </div>
                        </div> {/* End Author */}
                    </div> {/* End Text */}
                </SwiperSlide> {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
     
            
      
            </Swiper>
        </>
    )
}
