import React from 'react'
import { Check } from './Checkstyle'
// import 'style.css'
// import {Check} from './Checkstyle'
const Checks = () => {
  return (
<>
<Check class="front-page full-page">
  <span id="title-text">Hi asdfasdfdsafasdf</span>


</Check>
</ >
  )
}

export default Checks




























// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Scrollbar } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import './style.css';

// SwiperCore.use([Scrollbar]);

// const Check = () => {
//   const [progress, setProgress] = useState(0);

//   const handleSlideChange = (swiper) => {
//     const newProgress = (swiper.realIndex / (swiper.slides.length - 1)) * 100;
//     setProgress(newProgress);
//   };

//   return (
//     <div className='check'>
//       <Swiper
//         onSlideChange={handleSlideChange}
//         scrollbar={{ draggable: true }}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         {/* Add more slides */}
//       </Swiper>
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progress}%`, maxWidth: '300px' }}></div>
//       </div>
//     </div>
//   );
// }

// export default Check;
