import React, { useEffect } from 'react'
import { Flinks, FootBIcons, FootBLeft, FootBRText, FootBotm, FootBotmText, FootEmailCont, FootGoogCont, FootGoogText, FootInput, FootInputCont, FootInputRight, FootMain, FootTRight, FootTextMain, FootTop, Foots, Stars } from './FootStyle'
import { Icon } from '@iconify/react';
import Star from '../Star/Star';
import 'animate.css';
import { Elinks } from '../Explore/ExploreStyle';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Foot = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    return (
        <Foots>
            <FootMain>
                <FootTop>

                    <FootGoogCont>
                        <Icon icon="flat-color-icons:google" style={{ fontSize: "32px" }} />
                        <Stars>

                            <FootGoogText>5.0</FootGoogText>
                            <Icon icon="material-symbols:star" style={{ color: "#f9e217", fontSize: "32px" }} />
                            <Icon icon="material-symbols:star" style={{ color: "#f9e217", fontSize: "32px" }} />
                            <Icon icon="material-symbols:star" style={{ color: "#f9e217", fontSize: "32px" }} />
                            <Icon icon="material-symbols:star" style={{ color: "#f9e217", fontSize: "32px" }} />
                        </Stars>

                    </FootGoogCont>
                    <FootTextMain className='animate__animated animate__fadeInUp'>
                        Your project could be our next
                        success story.
                        <a href="#">

                            Let’s Talk.
                        </a>
                    </FootTextMain>

                </FootTop>

                <FootBotm>
                    <FootBLeft>

                        <FootBotmText>
                            STAY CONNECTED
                        </FootBotmText>
                        <FootInputCont>
                            <FootInput placeholder='Enter your Email'>

                            </FootInput>
                            <FootInputRight>
                                <Icon icon="ant-design:right-outlined"style={{color:"black"}}/>
                            </FootInputRight>
                        </FootInputCont>

                        <Elinks style={{ marginLeft: "0px" }}>
                            <Flinks>
                                All Right Reserved
                            </Flinks>
                            <Flinks>
                                Privacy policy
                            </Flinks>

                            <Flinks >
                                Sitemap
                            </Flinks>

                        </Elinks>
                    </FootBLeft>
                    <FootTRight>

                        <FootEmailCont>
                            <FootBRText>
                                hello@blennd.com
                            </FootBRText>
                            <FootBRText>
                                123-123-1234
                            </FootBRText>
                        </FootEmailCont>

                        <FootBIcons>
                            <Icon icon="ri:facebook-fill" id='facebok'  />
                            <Icon icon="ri:linkedin-fill" id='instagram' />
                            <Icon icon="mdi:instagram" id='Linkdin'  />
                        </FootBIcons>
                    </FootTRight>




                </FootBotm>

            </FootMain>

        </Foots >

    )
}

export default Foot
