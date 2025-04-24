
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
                        <p>"Connectly has streamlined our project management and invoicing, saving us hours each week!"
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
                                <p className="p-sm"> Small Business Owner</p>
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
                        <p>"The lead tracking features helped us double our conversion rates in just three months."
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-2.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700"> James T.</h6>
                                <p className="p-sm">Marketing Agency</p>
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
                        <p>"The support system is a game-changer for keeping our clients happy."
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
                                <p className="p-sm">Freelance Consultant</p>
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
                        <p>"Connectly’s integrations make it easy to connect with our existing tools."
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-4.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Michael P.</h6>
                                <p className="p-sm">Tech Startup</p>
                            </div>
                        </div> {/* End Author */}
                    </div> {/* End Text */}
                </SwiperSlide> {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
     
            
      
            </Swiper>
        </>
    )
}
