import React from 'react'
import { ExpertBtn, ExpertMain, ExpertTxt, ExpertImage, ExpertRight, Expertleft, Experts } from './ExpertStyle'
import { InnerHead, ParaTxt } from '../../../Common'
import Pic1 from './iMac-mockup-on-a-conference-table-Mockuuups-Studio-2048x1614 1.jpg'
const Expert = () => {
    return (
        <Experts>
            <ExpertMain>
                <Expertleft>
                    <InnerHead style={{ color: "black", width: "max-content" }}>
                        /CUSTOM WEB DEVELOPMENT
                    </InnerHead>
                    <ExpertTxt>
                        Expert Custom
                        Web Development
                        Services
                    </ExpertTxt>
                    <ParaTxt>
                        We embrace a holistic approach to custom web development
                        that includes rapid prototyping, iterative development, and
                        ongoing testing to maximize the value of your digital products.
                        We develop custom, user-driven websites and digital products
                        that address business problems, increase efficiency, and
                        streamline workflows. From custom front-end development to
                        sophisticated back-end solutions, our in-house team has the
                        expertise to deliver comprehensive custom web development
                        services tailored to meet your unique business goals.
                    </ParaTxt>
                    <ExpertBtn>
                        Contact Us
                    </ExpertBtn>
                </Expertleft>
                <ExpertRight>
                    <ExpertImage src={Pic1} />



                </ExpertRight>

            </ExpertMain>

        </Experts>
    )
}

export default Expert
