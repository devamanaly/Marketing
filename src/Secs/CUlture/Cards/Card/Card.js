// import React from 'react'
import { Cads, Cards, DcardHead, DcardImage, DcardImageCont, DcardTxt, DcardTxtCont, Dcards, DcardsMain } from './CardStyle'
import CardData from './CardData'
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

import { InnerHead, InnerTxt, TxtCont } from '../../../../Common'
// const [isVisible, setIsVisible] = useState(false);

//  useEffect(() => {
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         const elementOffset = []
//         if (scrollPosition > elementOffset) {
//             setIsVisible(true);
//         }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);

const Card = () => {
    return (
        <Cads>
            <TxtCont style={{ transform: "translate(-470px, 0px)" }}>

                <InnerTxt>
                    /OUR VALUES
                </InnerTxt>

                <InnerHead>
                    We believe in what we do,
                    and we have fun doing it.
                </InnerHead>

            </TxtCont>


            <DcardsMain>

                {
                    CardData.map((e) => {
                        return (









                            <Dcards >
                                <DcardImageCont>
                                    <DcardImage src={e.img}>


                                    </DcardImage>
                                </DcardImageCont>


                                <DcardTxtCont>
                                    <DcardHead>
                                        {e.cardHead}

                                    </DcardHead>
                                    <DcardTxt>
                                        {e.CardBody}

                                    </DcardTxt>

                                </DcardTxtCont>





                            </Dcards>
                        )
                    }
                    )
                }

            </DcardsMain>

        </Cads >

    )
}

export default Card
