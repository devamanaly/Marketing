import { styled } from "styled-components";

export const PCard=styled.div`
/* width: 100%; */
 height: 409px ;
display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* flex-direction: row; */
    row-gap: 48px;
/* border: 1px solid white; */
width: 413px;
`;

export const PimageCont=styled.div`
width: 50px;
height: 50px;
margin-top: 32px;

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
text-align: left;
`;


export const PCardHead=styled.p`
color: #FFF;
font-family: Roboto;
font-size: 38px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;
export const PCardWork=styled.p`
color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;
