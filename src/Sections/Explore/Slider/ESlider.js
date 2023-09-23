import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
import EData from './ESliderData';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { EImage, EImageCon, ESlidTextCont, Eslider } from './EsliderStyle';
import Pic1 from './Rectangle 23.jpg';
import Pic2 from './Rectangle 24.jpg';
import { ETexts, Elinks, Etext } from '../ExploreStyle';

function ESlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };



  return (
    <>
      <Eslider>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
        //   breakpoints={{
        //     640: {
        //       slidesPerView: 2,
        //       spaceBetween: 20,
        //     },
        //     768: {
        //       slidesPerView: 4,
        //       spaceBetween: 40,
        //     },
        //     1024: {
        //       slidesPerView: 5,
        //       spaceBetween: 50,
        //     },
        //   }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000, // Change slide every 3 seconds (3000 milliseconds)
            disableOnInteraction: false, // Autoplay still works even if the user interacts with the slider
          }}
          className="mySwiper"
        >

            {
                EData.map((ele)=>{
                    return(

                        
                        <SwiperSlide>
                          <EImageCon>

                            <EImage src={ele.img} />
                          </EImageCon>
                          <ESlidTextCont>
                            <Elinks>
                              <Etext href='#'>Brand Stratgy</Etext>
                              <Etext href='#'>   custom</Etext>
                              <Etext href='#'>web development</Etext>
                            </Elinks>
                            <ETexts>
                            Top 10 designs for digital products
                            </ETexts>
                          </ESlidTextCont>
                        </SwiperSlide>
                        )
                    })
            }

        </Swiper>
      </Eslider>
    </>
  );
}

export default ESlider;
