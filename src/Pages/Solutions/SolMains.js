import React from 'react'
import { LeftSOl, RIghtSol,SolLinkNum, Sol, SolCancel, SolHead, SolIcon, SolLink, SolList, SolMain, Solution } from './SolutionStyle'
import BrandP from '../Brand/BrandP'

const SolMains = () => {
  return (
    <SolMain>
    <LeftSOl>
      /SOLUTIONS
    </LeftSOl>
    <RIghtSol>
      <SolList>
      {/* <SolLinkNum>
            01
          </SolLinkNum> */}
        <SolLink to='/' element={<BrandP />} id="title-text">

          Brand Strategy
        </SolLink>
      </SolList>
      <SolList>
      {/* <SolLinkNum>
            02
          </SolLinkNum> */}
        <SolLink id='title-text2'>
          UI / UX Web Design
        </SolLink>
      </SolList>
      <SolList>
      {/* <SolLinkNum>
            03
          </SolLinkNum> */}
        <SolLink id='title-text3'>
          Custom Web Development
        </SolLink>
      </SolList>
      <SolList>
      {/* <SolLinkNum>
            04
          </SolLinkNum> */}
        <SolLink id='title-text4'>
          Search Engine Optomization
        </SolLink>
      </SolList>
      <SolList>
        <SolLink id='title-text5'>
          Conversion Rate Optomization
        </SolLink>
      </SolList>
    </RIghtSol>
  </SolMain>
  )
}

export default SolMains
