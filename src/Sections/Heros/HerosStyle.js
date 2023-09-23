import { styled } from "styled-components";
import { keyframes } from 'styled-components';

const changeBorderColor = keyframes`
  from {
    border-bottom-color: #54b3d6;
  }
  to {
    border-bottom-color: #5c36dc;
  }
`;
export const Hero = styled.div`
width: 1465px;
height: 132vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 30px;

`;
export const HerosMain = styled.div`
/* border: 1px solid; */
width: 61%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding-top: 30px;
    padding-bottom: 35px;
`;
export const HerosTop = styled.div`
/* border: 1px solid; */
height: 200px;

display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 22px;

`;

// export const HerosBtom=styled.div`
// height: 230px;
// `;

export const HerosLink = styled.a`
color: #5F2BE1;
font-family: sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const HerosHead = styled.h3`
color: rgba(0, 0, 0, 0.95);
text-align: center;
font-family: sans-serif;
font-size: 55px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const HerosText = styled.p`
color: #000;
text-align: center;
font-family: sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const HerosBook = styled.button`
display: flex;
padding: 15px 25px;
justify-content: center;
align-items: center;
/* gap: 10px; */
color: #FFF;
text-align: center;
font-family:sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: #5F2BE1;
transition: all .5s ease;


  &:hover{
    webkit-animation: rainbow 13s ease infinite;
    animation: rainbow 13s ease infinite;
    background: linear-gradient(124deg,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840,#1ddde8,#2b1de8,#dd00f3,#dd00f3);
    background-size: 400% 400%;
    color: #fff;

  }
`;


export const HerosBoxs = styled.div`
width: 870px;
height: 230px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
flex-wrap: wrap;
`;
export const Boxs = styled.a`
  width: 433px;
  height: 115px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    border: none;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #5F2BE1;
    transform-origin: bottom left;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  &:not(:hover)::before {
    transform-origin: bottom right; /* Change to bottom right */
    transform: scaleX(0); /* Reset to scaleX(0) */
  }
`;
export const BoxLeft = styled.div`
width: 30px;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding-left: 14px;
    padding-top: 14px;
`;
export const BoxLeftText = styled.p`
color: #5F2BE1;
text-align: center;
font-family: sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;`;
export const BoxRightText = styled.p`
color: #000;
text-align: center;
font-family: sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


 

 

    `;
export const BoxRight = styled.div`
display: flex;
/* flex-direction: ; */
justify-content: flex-start;
align-items: center;
height: 100%;
padding-left: 15px;
/* padding-left: 15px; */

`;



