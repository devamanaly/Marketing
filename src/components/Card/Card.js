import React ,{useEffect}from 'react'
import { CardBtn, CardImage, CardImageCont, CardLink, CardLinksCont, CardTxt, Cards } from './CardStyle'
import CardData from './Data/CardData'
import Pux from './Data/Rectangle 5.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Card = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);


    return (

        CardData.map((ele) => {
            return (
                <>
                    <Cards data-aos="fade-up">


                        <CardImageCont style={{ transform:`${ele.pos}`}}>
                            <img src={ele.img} alt="" />
                            <CardBtn>
                                Work
                            </CardBtn>



                        </CardImageCont>
                        <CardLinksCont style={{transform:`${ele.pos}`}}>
                            <CardLink>
                                Brand Strategy
                            </CardLink>
                            <CardLink>
                                UX/UI/Web Desiging
                            </CardLink>
                            <CardLink>
                                Custom Web Development
                            </CardLink>

                        </CardLinksCont >
                        <CardTxt style={{transform:`${ele.pos}`}}>
                            Renaissance Patio
                        </CardTxt>
                    </Cards>
                </>
            )
        })

    )
}

export default Card
