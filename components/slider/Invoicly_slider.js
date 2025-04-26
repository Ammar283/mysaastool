
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


export default function InvoiclySlider() {
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
                        <p>"Invoicly has transformed how we manage client billing. It's fast, intuitive, and saves us hours every week!"
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-1.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Jane D.</h6>
                                <p className="p-sm"> Freelancer</p>
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
                        <p>"The multi-currency feature is a game-changer for our international clients. Highly recommend!"
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-2.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Mike S.</h6>
                                <p className="p-sm">Agency Owner</p>
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
                        <p>"From invoicing to reporting, Invoicly handles it all. Our team loves the simplicity."
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-3.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Sarah L. </h6>
                                <p className="p-sm">Small Business Owner</p>
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
                        <p>"The cloud-based platform lets us access our data anywhere. It's secure and reliable."
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                                <img src="/images/review-author-4.jpg" alt="review-avatar" />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                                <h6 className="s-18 w-700">Tom R.</h6>
                                <p className="p-sm"> Enterprise CFOr</p>
                            </div>
                        </div> {/* End Author */}
                    </div> {/* End Text */}
                </SwiperSlide> {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
     
            
      
            </Swiper>
        </>
    )
}
