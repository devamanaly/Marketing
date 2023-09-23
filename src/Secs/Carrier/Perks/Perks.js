import React from 'react'

import { PHeadRight, ProfileCard, ProfileMain, Profiles, ProfilesHead } from './PerksStyle'
import { InnerHead, InnerTxt, TxtCont } from '../../../Common'
import Card from './Card/Card'
import { Perk } from './PerksStyle'
const Perks = () => {
    return (
        <Perk>
            <ProfileMain>
                <ProfilesHead>
                    <TxtCont style={{ justifyContent: "flex-end" }}>

                        <InnerTxt style={{ color: "black" }}>
                            /OUR TEAM
                        </InnerTxt>


                    </TxtCont>


                </ProfilesHead>
                <ProfileCard>
                    <Card />
                </ProfileCard>



            </ProfileMain>

        </Perk>
    )
}

export default Perks
