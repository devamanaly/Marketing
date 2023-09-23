import { styled } from "styled-components";

export const PCard=styled.div`
/* width: 100%; */
min-height:413px ;
display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* flex-direction: row; */
    row-gap: 48px;

`;

export const PimageCont=styled.div`
width: 413px;
height: 360px;


`;
export const Pimage=styled.img`
width: 100%;
height: 100%;

`;

export const PTxtCont=styled.div`
min-height: 30px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
row-gap: 12px;

`;


export const PCardHead=styled.p`
color: rgba(0, 0, 0, 0.80);
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;
export const PCardWork=styled.p`
color: rgba(0, 0, 0, 0.70);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;
