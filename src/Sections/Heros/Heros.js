import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hero, HerosTop, HerosMain, HerosLink, HerosHead, HerosText, HerosBook, HerosBoxs, Boxs, BoxLeft, BoxLeftText, BoxRight, BoxRightText } from './HerosStyle'
import Mesh from '../Mesh/Mesh';

const Heros = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <>
            <Hero>
                <HerosMain>
                    <HerosTop>
                        <HerosLink data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            Blennd   A Digital Product and Web Design Agency
                        </HerosLink>
                        <HerosHead data-aos="fade-up" data-aos-duration="1000">
                            Web designing and digital marketing
                        </HerosHead>
                        <HerosText data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            Accelerate business growth with our team of expert UI/UX website design, branding, web
                            development, search engine optimization (SEO) and conversion rate optimization (CRO) experts.
                        </HerosText>
                    </HerosTop>

                    <HerosBook>
                        Book a Consoltation
                    </HerosBook>

                    <HerosBoxs>
                        <Boxs>
                            <BoxLeft>
                                <BoxLeftText>
                                    01

                                </BoxLeftText>
                            </BoxLeft>

                            <BoxRight>
                                <BoxRightText>
                                    UI/UX  & Web Design
                                </BoxRightText>
                            </BoxRight>

                        </Boxs>
                        <Boxs>
                            <BoxLeft>
                                <BoxLeftText>
                                    02
                                </BoxLeftText>
                            </BoxLeft>

                            <BoxRight>
                                <BoxRightText>
                                    Web Development
                                </BoxRightText>
                            </BoxRight>

                        </Boxs>
                        <Boxs>
                            <BoxLeft>
                                <BoxLeftText>
                                    03
                                </BoxLeftText>
                            </BoxLeft>

                            <BoxRight>
                                <BoxRightText>
                                    SEO
                                </BoxRightText>
                            </BoxRight>

                        </Boxs>
                        <Boxs>
                            <BoxLeft>
                                <BoxLeftText>
                                    04
                                </BoxLeftText>
                            </BoxLeft>

                            <BoxRight>
                                <BoxRightText>
                                    Conversion Rate Optimization
                                </BoxRightText>
                            </BoxRight>

                        </Boxs>
                    </HerosBoxs>

            <Mesh />
                </HerosMain>

            </Hero>
        </>

    )
}

export default Heros
