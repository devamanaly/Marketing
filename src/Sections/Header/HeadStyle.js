// import { styled } from "styled-components";
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';


const HeadLogoAnimation = keyframes`
  from {
    width: 40%;
  }
  to {
    width: 62%;
  }
`;
const HeadLogoUnhoverAnimation = keyframes`
  from {
    width: 62%;
  }
  to {
    width: 40%;
  }
`;
export const Header =styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 10vh;
/* border: 1px solid ; */
justify-content: space-between;
/* position: fixed; */
width: 100%;
/* background-color: ; */


#top-logo{
  background-color: black;
  width: max-content;
  height: max-content;
}
#top-logo:hover{
  /* border: 1px solid ; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(-45deg, yellow 0%, yellow 25%, yellow 51%, #ff357f 100%);
  -webkit-animation: AnimateBG 2s ease infinite;
          animation: AnimateBG 2s ease infinite;
}

@-webkit-keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


`;
export const HeadLogo =styled.svg`
width: 50px;
height: 50px;
flex-shrink: 0;




`;
export const Navbar =styled.div`
/* display: flex; */
/* flex-direction: ; */
width: 502px;
height: 34px;
/* border: 1px solid; */

`;

export const NavList =styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 100%;
list-style: none;


`;
export const NavItem =styled.li`
display: flex;

/* justify-content: center; */
height: 100%;
/* align-items: center; */
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #212529;
  font-family: sofia-pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 25%;
    height: 2px;
    background-color: #000;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before,
  &.active::before { 
    transform: translate(-50%, 0) scaleX(1);

  }
  &.active{
    /* border: 1px sol; */
  }
`;
export const MenuLogo=styled.div`

width: 59px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
/* border: 1px solid; */
row-gap: 10px;

#h-logo1{
  border-bottom: 2.5px solid black;
  width: 62%;
  border-radius: 13px;
  margin-right: 10px;
}

`;


export const  Hlogo2 =styled.div`


border-bottom: 2.5px solid black;
width: 40%;
border-radius: 13px;
margin-right: 10px;




${MenuLogo}:hover & {
    animation: ${HeadLogoAnimation} .3s linear 1 alternate forwards;
  }
  ${MenuLogo}:not(:hover) & {
    animation: ${HeadLogoUnhoverAnimation} .3s linear 1 alternate forwards;
  }




`;