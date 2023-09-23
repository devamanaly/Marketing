import React from 'react'
import { Icons, Opening, OpeningBody, OpeningHead, OpeningIText, OpeningIhead, OpeningImage, OpeningLeft, OpeningMain, OpeningRight, OpeningTOp } from './OpeningsStyle'
import { Icon } from '@iconify/react';
import OverView from '../overview/OverView'
import Pic1 from './Rectangle 52.png'
import './style.css'
const Openings = () => {
    return (
        <>
        <Opening>
            <OpeningMain>
                <OpeningHead>
                    /JOB OPENINGS
                </OpeningHead>
                <OpeningBody>
                    <ul>
                        <li style={{ borderTop: "none" }}>
                            <OpeningIhead style={{ width: "100%", textAlign: "left", marginTop: "30px" }} data-aos="fade-up" data-aos-once="true">
                                Join our team.
                            </OpeningIhead>
                        </li>



                        <li>
                            <OpeningLeft data-aos="fade-down">

                                <OpeningIhead>
                                    SEO Manager
                                </OpeningIhead>
                                <OpeningIText>
                                    Traffic
                                </OpeningIText>
                            </OpeningLeft>
                            <OpeningRight data-aos="fade-down" data-aos-once="true">
                                <OpeningIText style={{ paddingTop: "14px" }} href='#'>
                                    Explore Job
                                </OpeningIText>
                                <Icons>


                                    <Icon icon="mingcute:right-line" style={{ color: "white" }} />
                                </Icons>
                            </OpeningRight>





                        </li>
                        <li>
                            <OpeningLeft data-aos="fade-up" data-aos-once="true">

                                <OpeningIhead>
                                    SEO Manager
                                </OpeningIhead>
                                <OpeningIText>
                                    Traffic
                                </OpeningIText>
                            </OpeningLeft>
                            <OpeningRight data-aos="fade-up" data-aos-once="true">
                                <OpeningIText style={{ paddingTop: "14px" }} href='#'>
                                    Explore Job
                                </OpeningIText>
                                <Icons>


                                    <Icon icon="mingcute:right-line" style={{ color: "white" }} />
                                </Icons>
                            </OpeningRight>





                        </li>
                        <li>
                            <OpeningLeft data-aos="fade-up" data-aos-once="true">

                                <OpeningIhead>
                                    SEO Manager
                                </OpeningIhead>
                                <OpeningIText>
                                    Traffic
                                </OpeningIText>
                            </OpeningLeft>
                            <OpeningRight data-aos="fade-up" data-aos-once="true">
                                <OpeningIText style={{ paddingTop: "14px" }} href='#'>
                                    Explore Job
                                </OpeningIText>
                                <Icons>


                                    <Icon icon="mingcute:right-line" style={{ color: "white" }} />
                                </Icons>
                            </OpeningRight>





                        </li>
                        <li>
                            <OpeningLeft data-aos="fade-up" data-aos-once="true">

                                <OpeningIhead>
                                    SEO Manager
                                </OpeningIhead>
                                <OpeningIText>
                                    Traffic
                                </OpeningIText>
                            </OpeningLeft>
                            <OpeningRight data-aos="fade-up" data-aos-once="true">
                                <OpeningIText style={{ paddingTop: "14px" }} href='#'>
                                    Explore Job
                                </OpeningIText>
                                <Icons>


                                    <Icon icon="mingcute:right-line" style={{ color: "white" }} />
                                </Icons>
                            </OpeningRight>





                        </li>
                        <li>
                            <OpeningLeft data-aos="fade-up" data-aos-once="true">

                                <OpeningIhead>
                                    SEO Manager
                                </OpeningIhead>
                                <OpeningIText>
                                    Traffic
                                </OpeningIText>
                            </OpeningLeft>
                            <OpeningRight data-aos="fade-up" data-aos-once="true">
                                <OpeningIText style={{ paddingTop: "14px" }} href='#'>
                                    Explore Job
                                </OpeningIText>
                                <Icons>


                                    <Icon icon="mingcute:right-line" style={{ color: "white" }} />
                                </Icons>
                            </OpeningRight>





                        </li>
                    </ul>

                </OpeningBody>

      

            </OpeningMain>
          

        </Opening>
     <OpeningImage className='Open-Image'>
     {/* <img src={Pic1} alt="" /> */}
 </OpeningImage>



 </>
 )
}

export default Openings
