import React from 'react'
import { BotmTxtLeft, BotmTxtsMain, BotmTxtRight, BotmTxts, BotmTxtImage, BotmTxtLink } from './BotmTxtStyle'
import { InerTxtHead, Txt, TxtHead } from '../TopText/TopTextStyle'
import Pic1 from './Group-5694 1.png'
import BotmData from './BotmData/BotmData'
import { Icon } from '@iconify/react';
const BotmTxt = () => {
    return (
        
            BotmData.map((ele) => {
                return (

                    <>
                        <BotmTxts>
                            <BotmTxtsMain>
                                <BotmTxtLeft>
                                    <BotmTxtImage src={ele.img} style={{ width: "100%", height: "100%" }} />
                                </BotmTxtLeft>
                                <BotmTxtRight>
                                    <InerTxtHead>
                                        {ele.head}
                                    </InerTxtHead>
                                    <Txt>
                                        {ele.txt}
                                    </Txt>
                                    <BotmTxtLink href='#'>
                                        {ele.link}
                                        <Icon icon="ep:right" />
                                    </BotmTxtLink>
                                </BotmTxtRight>
                            </BotmTxtsMain>
                        </BotmTxts>
                    </>
                )
            })

        

    )
}

export default BotmTxt
