import React from 'react'
import { PCard, PCardHead, PCardWork, PTxtCont, Pimage, PimageCont } from './CardStyle'
import PData from './PData'
import Pic1 from "./Images/Rectangle 40 (2).png"
const Card = () => {
    return (

        PData.map((e) => {
            return (


                <PCard>
                    <PimageCont>
                        <Pimage src={e.img} />
                    

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
