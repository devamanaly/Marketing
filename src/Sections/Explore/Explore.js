import React from 'react'
import { EHead, ETopText, EheadText, ExploreMain, Explores } from './ExploreStyle'
import ESlider from './Slider/ESlider'

const Explore = () => {
  return (
    <Explores>
        <ExploreMain>
    <EHead>
        <ETopText>
            /THE LATEST
        </ETopText>
        <EheadText>
        Explore Our Insights.
        </EheadText>



    </EHead>
        <ESlider/>
        </ExploreMain>
      
    </Explores>
  )
}

export default Explore
