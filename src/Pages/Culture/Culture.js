import React from 'react'

import Dheros from '../../Secs/CUlture/Dheros/Dheros'
import Card from '../../Secs/CUlture/Cards/Card/Card'
import Profile from '../../Secs/CUlture/Profiles/Profile'
import OverView from '../../Secs/CUlture/overview/OverView'
import Strategy from '../../Secs/CUlture/Strategy/Strategy'
import Foot from '../../Sections/footer/Foot'

const Culture = () => {
  return (
    <div>
        <Dheros/>
        <OverView/>
        <Card/>
        <Profile/>
      <Strategy />
      <Foot/>
    </div>
  )
}

export default Culture
