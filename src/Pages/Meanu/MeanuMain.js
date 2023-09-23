import React from 'react'
import { LeftSOl, RIghtSol,SolLinkNum, Sol, SolCancel, SolHead, SolIcon, SolLink, SolList, SolMain, Solution } from './MeanuStyle'
import BrandP from '../Brand/BrandP'
import Pic from './blennd-b-white (1) 1.png'
const MeanuMain = (props) => {
  const clik=()=>{
    props.fuk(false)


    
  }
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
        <SolLink to='/work' element={<BrandP />} id="title-text" onClick={clik}>

      Work
        </SolLink>
      </SolList>
      <SolList>
      {/* <SolLinkNum>
            02
          </SolLinkNum> */}
        <SolLink id='title-text2' to='/culture' onClick={clik}>
  About
        </SolLink>
      </SolList>
      <SolList>
      {/* <SolLinkNum>
            03
          </SolLinkNum> */}
        <SolLink id='title-text3' to='/insight' onClick={clik}>
         Insight
        </SolLink>
      </SolList>
      <SolList>
      {/* <SolLinkNum>
            04
          </SolLinkNum> */}
        <SolLink id='title-text4' to='/carrier' onClick={clik}>
          Carrier
        </SolLink>
      </SolList>
      <SolList>
        <SolLink id='title-text5' to='/contact' onClick={clik}>
         Contact
        </SolLink>
      </SolList>
    </RIghtSol>
  </SolMain>

  )
}

export default MeanuMain

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