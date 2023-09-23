import React from 'react'
import { BrandImage, Brandtxtcontainer, CadImage, Cads } from './CardStyle'
import Pic1 from './Rectangle 64.jpg'
import { CardLink, CardLinksCont, CardTxt } from '../../../../components/Card/CardStyle'
import BrandData from './CardData'
const BrandCard = () => {
    return (
        BrandData.map((e)=>{
            return(
   
        <Cads>
            <CadImage>
                <BrandImage src={e.img} />
            </CadImage>
            <Brandtxtcontainer>
            <CardLinksCont>
                <CardLink>
                    Brand Strategy
                </CardLink>
                <CardLink>
                    UX/UI/Web Desiging
                </CardLink>
                <CardLink>
                    Custom Web Development
                </CardLink>

            </CardLinksCont>

            <CardTxt>
                Renaissance Patio
            </CardTxt>
            </Brandtxtcontainer>



        </Cads>
                     
                     )
                    })
    )
}

export default BrandCard
