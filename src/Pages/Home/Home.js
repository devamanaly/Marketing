import React from 'react'
import Head from '../../Sections/Header/Head'
import Heros from '../../Sections/Heros/Heros'
import Work from '../../Sections/Work/Work'
import HiddenTxt from '../../Sections/Txt/HiddenTxt'
import How from '../../Sections/How/How'
import Star from '../../Sections/Star/Star'
import Expertise from '../../Sections/Expertise/Expertise'
import Frequent from '../../Sections/frequent/Frequent'
import Explore from '../../Sections/Explore/Explore'
import Foot from '../../Sections/footer/Foot'
const Home = () => {
  return (
    <div>
  
        <Heros/>
        <Work/>
        <HiddenTxt/>
        <How/>
        {/* <Star/> */}
        <Expertise/>
        <Frequent/>
        {/* <Explore/> */}
        <Foot/>
        
      
    </div>
  )
}

export default Home
