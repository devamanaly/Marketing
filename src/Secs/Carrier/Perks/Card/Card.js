import React from 'react'
import { PCard, PCardHead, PCardWork, PTxtCont, Pimage, PimageCont } from './CardStyle'
import PData from './PData'
// import Pic1 from "./Images/Rectangle 40 (2).png"
import { Icon } from '@iconify/react';
const Card = () => {
    return (

        PData.map((e) => {
            return (


                <PCard data-aos="fade-down" data-aos-once="true" data-aos-duration="1000" >
                    <PimageCont>
                    <Pimage src={e.img} alt="" />
                    </PimageCont>

                    <PTxtCont>
                        <PCardHead>
                            {e.name}
                        </PCardHead>
                        <PCardWork>
                            {e.work}
                        </PCardWork>

                    </PTxtCont>

                </PCard>
            )
        })

    )
}

export default Card
