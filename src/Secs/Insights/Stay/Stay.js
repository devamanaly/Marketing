import React from 'react'
import { Input, InputRight, Stays, StaysMain, StaysTOp } from './StayStyle'
import './style.css'
import { Icon } from '@iconify/react';
import Pic1 from './Rectangle 48.png'
const Stay = () => {
  return (
    <Stays className='stay'>
        <StaysMain >
            <StaysTOp>
                <h3>Stay in the Know.</h3>
                <p>Do your email up to date  with our ideal projects and industry insights.</p>            
            </StaysTOp>

          <Input>
          <input type="email" placeholder='Email address'/>
          <InputRight>
          <Icon icon="mingcute:right-line"  style={{fontSize:"22px" ,color:"white"}}/>
          </InputRight>
          </Input>
        </StaysMain>

      
    </Stays>
  )
}

export default Stay
