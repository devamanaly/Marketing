import React from 'react'
import { Feature,FLeftTop, FeatureLeft, FeatureLeftTxt, FeatureMain, FeatureRight, FeatureIcon } from './FeaturesStyle'
import { InnerTxt, ReadMore, ReadMoreCont } from '../../../Common'
import Pic1 from './ABM-4-1440x960 1.jpg'
import { Icon } from '@iconify/react';
const Features = () => {
    return (
        <Feature>
            <FeatureMain>
                <FeatureLeft>
                    <FLeftTop>

                    <InnerTxt>
                        / FEATURED
                    </InnerTxt>
                    <FeatureLeftTxt>
                        Marketing(ABM):
                        What it is and How
                        it Maximizes ROI
                    </FeatureLeftTxt>
                    </FLeftTop>
                    <ReadMoreCont>
                        <ReadMore href='#'>
                            ReadMore
                        </ReadMore>
                        <FeatureIcon>

                       <Icon icon="mingcute:right-line" />
                        </FeatureIcon>
                    </ReadMoreCont>


                </FeatureLeft>
                       
                <FeatureRight>
                    <img src={Pic1} alt="" style={{width:"100%",height:"100%"}}/>

                </FeatureRight>
            </FeatureMain>

        </Feature>
    )
}

export default Features
