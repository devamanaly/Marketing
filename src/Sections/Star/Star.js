import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import {  SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import the bundled CSS
import Pic1 from './png.png';
import { StarGoogle, StarTxt, Stars } from './StarStyle';
import './star.css';
import Swiper from 'swiper/bundle';
import SwiperCore from 'swiper/core'; // Adjust the path as needed

// import styles bundle
import 'swiper/css/bundle';
// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Star = () => {
    return (
        <Stars>
            <Swiper
                navigation={false}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                pagination={{ type: 'progressbar' }}
            >
                <SwiperSlide>
                    <StarGoogle className='starGoogle'>
                        <img src={Pic1} alt="" />
                    </StarGoogle>
                    <StarTxt>
                        Blennd has been great to work with. They understood the vision behind my brand and have consistently delivered
                        products that serve my needs. I’d recommend them to anyone looking for web/branding/graphic design needs.
                    </StarTxt>
                </SwiperSlide>
                <SwiperSlide>
                    <StarGoogle className='starGoogle'>
                        <img src={Pic1} alt="" />
                    </StarGoogle>
                    <StarTxt>
                        Another testimonial content here...
                    </StarTxt>
                </SwiperSlide>
                {/* Add more SwiperSlides as needed */}
            </Swiper>
        </Stars>
    );
}

export default Star;
