import React, {useEffect} from 'react'
import { OverViewGet, OverViewPara, OverViews, OverviewLeft, OverviewMain, OverviewRight, OverviewTxt } from './OveriewStyle'
import { InnerHead, ParaTxt } from '../../../Common'
import { Icon } from '@iconify/react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const OverView = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <OverViews>
      <OverviewMain>
        <OverviewLeft data-aos="fade-up" data-aos-once="true">
          <InnerHead style={{ color: "black" }}>
            /OVERVIEW
          </InnerHead>
          <OverviewTxt >
            Make the
            Impossible
            Possible.
          </OverviewTxt>
        </OverviewLeft>

        <OverviewRight data-aos="fade-down" data-aos-once="true">
          <OverViewPara>
            <ParaTxt>
              Blennd is more than a website design agency. It’s where talented people
              and businesses go to grow. Where we don’t just take clients or hire for
              jobs, we help professionals find freedom. Together we make the
              impossible, possible. Whether you’re a Fortune 500, a
              tech startup, or a talented human; this is a place you go to build, make
              change, and scale to unprecedented heights.
            </ParaTxt>
          </OverViewPara>
          <OverViewPara>
            <ParaTxt>
              Blennd is more than a website design agency. It’s where talented people
              and businesses go to grow. Where we don’t just take clients or hire for
              jobs, we help professionals find freedom. Together we make the
              impossible, possible. Whether you’re a Fortune 500, a
              tech startup, or a talented human; this is a place you go to build, make
              change, and scale to unprecedented heights.
            </ParaTxt>
          </OverViewPara>
          <OverViewPara>
            <ParaTxt>
              Blennd is more than a website design agency. It’s where talented people
              and businesses go to grow. Where we don’t just take clients or hire for
              jobs, we help professionals find freedom. Together we make the
              impossible, possible. Whether you’re a Fortune 500, a
              tech startup, or a talented human; this is a place you go to build, make
              change, and scale to unprecedented heights.
            </ParaTxt>
          </OverViewPara>






        </OverviewRight>
      </OverviewMain>

    </OverViews>
  )
}

export default OverView
