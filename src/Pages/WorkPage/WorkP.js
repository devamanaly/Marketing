import React from 'react'
import Head from '../../Sections/Header/Head'
import Heros from '../../Secs/Work/Heros'
import Work from '../../Sections/Work/Work'
import Frequent from '../../Sections/frequent/Frequent'
import Foot from '../../Sections/footer/Foot'

const WorkP = () => {
  return (
    <div>
        {/* <Head/> */}
        <Heros/>
        <Work/>
        <Frequent/>
        <Foot/>
      
    </div>
  )
}

export default WorkP
