import { styled } from "styled-components";
export const TxtCont=styled.div`
/* width: 90%; */
min-height:89px ;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: flex-start;
/* margin-left: 136px; */
    text-align: left;
    /* transform: translate(-470px, 0px); */
   /* border: 1px solid; */
`;
export const  InnerTxt =styled.p`

color: black;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;


export const InnerHead=styled.h2`
color: #FFF;
font-family: Roboto;
font-size: 32px;
width: 366px;
font-style: normal;
font-weight: 500;
line-height: normal;


`;


export const ReadMoreCont=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
column-gap: 7px;
`;
export const ReadMore=styled.a`
color: black    ;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration: none;
`;
export const ParaTxt=styled.div`
color: rgba(0, 0, 0, 0.70);
font-family: sans-serif;

font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

export const FeatureIcon=styled.div`
width: 38px;
height: 38px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color: rgba(255, 255, 255, 0.70);;
border-radius: 30px;
display:flex;
justify-content: center;
align-items: center;

`;