import React from 'react'
import Head from '../../Sections/Header/Head'
import Dheros from '../../Secs/Carrier/Dheros/Dheros'
import OverView from '../../Secs/Carrier/overview/OverView'
import { Opening } from '../../Secs/Carrier/Openings/OpeningsStyle'
import Openings from '../../Secs/Carrier/Openings/Openings'
import Perks from '../../Secs/Carrier/Perks/Perks'
import Foot from '../../Sections/footer/Foot'

const Carrier = () => {
  return (
    <div>
        {/* <Head/> */}
        <Dheros/>
        <OverView/>
        <Openings/>
        <Perks/>
        <Foot/>


      
    </div>
  )
}

export default Carrier
