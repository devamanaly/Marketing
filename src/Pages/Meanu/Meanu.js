import React, { useState,useEffect } from 'react'
import { LeftSOl, RIghtSol, Sol, SolCancel, SolHead, SolIcon, SolLink, SolList, SolMain, Solution } from './MeanuStyle'
import BrandP from '../Brand/BrandP'
import Pic from './blennd-b-white (1) 1.png'
import { Icon } from '@iconify/react';
import { Navigate, useNavigate } from 'react-router-dom';
import MeanuMain from './MeanuMain';
const Meanu = (props) => {
  const [state, setState] = useState();
  const navigate = useNavigate();
  // const clicked = () => {
  // }
  const Open = () => {
    navigate('/');

    props.funx(false)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true)

    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Sol>

      <Solution>
        <SolHead>
          <SolIcon>
            <img src={Pic} alt="" />
          </SolIcon>
          <SolCancel>
            <Icon icon="iconoir:cancel" style={{ width: "51px", height: "60px" }} onClick={Open} />
          </SolCancel>

          </SolHead>
          {

            state == true ? <MeanuMain fuk={props.funx} /> : ""
          }






      </Solution>
    </Sol>

  )
}

export default Meanu
