import React from 'react'
import { LeftSOl, RIghtSol,SolLinkNum, Sol, SolCancel, SolHead, SolIcon, SolLink, SolList, SolMain, Solution } from './Check1sty'
import BrandP from '../Pages/Brand/BrandP'
import Pic from '../Pages/Meanu/blennd-b-white (1) 1.png'
const Check1 = () => {
  return (
    <SolMain>
    <LeftSOl>
      /SOLUTIONS
    </LeftSOl>
    <RIghtSol>
      <SolList>
      <SolLinkNum>
            01
          </SolLinkNum>
        <SolLink to='/' element={<BrandP />} id="title-text">

          Brand Strategy
        </SolLink>
      </SolList>
      <SolList>
      <SolLinkNum>
            02
          </SolLinkNum>
        <SolLink id='title-text2'>
          UI / UX Web Design
        </SolLink>
      </SolList>
      <SolList>
      <SolLinkNum>
            03
          </SolLinkNum>
        <SolLink id='title-text3'>
          Custom Web Development
        </SolLink>
      </SolList>
      <SolList>
      <SolLinkNum>
            04
          </SolLinkNum>
        <SolLink id='title-text4'>
          Search Engine Optomization
        </SolLink>
      </SolList>
      <SolList>
        <SolLink id='title-tex'>
          Conversion Rate Optomization
        </SolLink>
      </SolList>
    </RIghtSol>
  </SolMain>

  )
}

export default Check1

// &::before {
//     /* This will create the layer
//        over original text*/
//     content:"sdakljfasldkjfl" ;
//     position: absolute;
//     top: 0;
//     left: 0;

//     /* Setting different color than
//        that of original text  */
//     color: green;
//     overflow: hidden;

//     /* Setting width as 0*/
//     width: 0%;
//     transition: 1s;
// }

// &:hover::before {

//     /* Setting width to 100 on hover*/
//     width: 100%;
// }