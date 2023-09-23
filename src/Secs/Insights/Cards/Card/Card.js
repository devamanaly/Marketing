import React from 'react'
import { Cads, CadsMain, Cards, DcardHead, DcardImage, DcardImageCont, DcardTxt, DcardTxtCont, Dcards, DcardsMain, InsightHead, InsightHeadMain, InsightLogo } from './CardStyle'
import CardData from './CardData'
import Pix from './INSIGHTS (1).png'
import { InnerHead, InnerTxt, TxtCont } from '../../../../Common'
const InsightCard = () => {
    return (
        <Cads>
            <CadsMain>

                <InsightLogo>
                    <img src={Pix}  />
                </InsightLogo>
            <InsightHeadMain>


            <InsightHead  >
            
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">DESIGN</a></li>
                    <li><a href="#">TECH</a></li>
                    <li><a href="#">STRATEGY</a></li>
                    <li><a href="#">TRAFFIC</a></li>
                </ul>

                

            </InsightHead>

            </InsightHeadMain>

            <DcardsMain>

                {
                    CardData.map((e) => {
                        return (









                            <Dcards style={{ transform: `${e.trans}` }}>

                                <DcardImageCont>
                                    <DcardImage src={e.img}>


                                    </DcardImage>
                                </DcardImageCont>


                                <DcardTxtCont>
                                    <DcardTxt>
                                        {e.CardBody}

                                    </DcardTxt>
                                    <DcardHead>
                                        {e.cardHead}

                                    </DcardHead>

                                </DcardTxtCont>





                            </Dcards>
                        )
                    }
                    )
                }

            </DcardsMain>
            </CadsMain>

        </Cads >

    )
}

export default InsightCard
