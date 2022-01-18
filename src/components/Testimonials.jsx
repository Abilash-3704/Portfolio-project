import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Testimonials() {
    return (
        <div className='testimonials' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once>
            <h1>TESTIMONIALS</h1>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
            }} pagination={{
            "clickable": true
            }} navigation={true} className="mySwiper">
            <SwiperSlide className="t-box">
                {/* <div className="t-box"> */}
                    <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-4.jpg" alt="" className='testimonial-img'/>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam expedita mollitia, architecto deleniti neque omnis maxime corporis! Dicta, suscipit.</p>
                {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="t-box">
            {/* <div className="t-box"> */}
                <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-1.jpg" alt="" className='testimonial-img'/>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam expedita mollitia, architecto deleniti neque omnis maxime corporis! Dicta, suscipit.</p>

            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="t-box">
            {/* <div className="t-box"> */}
                <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-3.jpg" alt="" className='testimonial-img'/>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam expedita mollitia, architecto deleniti neque omnis maxime corporis! Dicta, suscipit.</p>

            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="t-box">
            {/* <div className="t-box"> */}
                <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-2.jpg" alt="" className='testimonial-img'/>
                    <h3>Sara Wilson</h3>
                    <h4>Designer</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam expedita mollitia, architecto deleniti neque omnis maxime corporis! Dicta, suscipit.</p>

            {/* </div> */}
            </SwiperSlide>
            
            </Swiper>
    
    

            
        </div>
    )
}
