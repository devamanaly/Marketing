import React from 'react'
import { PHeadRight, ProfileCard, ProfileMain, Profiles, ProfilesHead } from './ProfileStyle'
import { InnerHead, InnerTxt, TxtCont } from '../../../Common'
import Card from './Card/Card'

const Profile = () => {
    return (
        <Profiles>
            <ProfileMain>
                <ProfilesHead>
                    <TxtCont style={{justifyContent:"flex-end"}}>

                        <InnerTxt style={{ color: "black" }}>
                            /OUR TEAM
                        </InnerTxt>
                        <InnerHead style={{ color: "black" }}>
                            Leading the way.
                        </InnerHead>

                    </TxtCont>
                    <PHeadRight>
                        Meet our team of talented, passionate and creative people. We
                        collaborate to shape best-in-class solutions for your technology brand.
                        Through connection and clarity, Blennd builds digital experiences that are
                        easy to navigate and impossible to ignore.
                    </PHeadRight>

                </ProfilesHead>
                <ProfileCard>
                    <Card/>
                </ProfileCard>

                

            </ProfileMain>

        </Profiles>
    )
}

export default Profile
