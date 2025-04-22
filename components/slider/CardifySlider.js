
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


export default function CardifySlider() {
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
                        <p>Cardify made it so easy to create and share my digital business card. The QR code feature is a game-changer!
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
                                <p className="p-sm"> Freelance Designer</p>
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
                        <p>Our team loves the centralized dashboard. Managing multiple cards has never been this simple.
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-2.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700"> John K.</h6>
                                <p className="p-sm">Small Business Owner</p>
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
                        <p>The NFC support is fantastic! Clients are impressed with the tap-to-share feature.
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-3.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Emily R.</h6>
                                <p className="p-sm">Marketing Manager</p>
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
                        <p>Cardify’s analytics helped me understand how my card performs, allowing me to optimize my outreach.
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-4.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Michael T.</h6>
                                <p className="p-sm">Event Organizer</p>
                            </div>
                        </div> {/* End Author */}
                    </div> {/* End Text */}
                </SwiperSlide> {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
     
            
      
            </Swiper>
        </>
    )
}
