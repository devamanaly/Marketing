import { styled } from "styled-components";

export const Frequents=styled.div`
display: flex;
/* flex-direction: r; */
justify-content: center;
align-items: center;

`;

export const FrequentMain=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 85%;
min-height: 100vh;


`;

export const FrequentHead=styled.h2`
color: rgba(0, 0, 0, 0.85);
font-family: Roboto;
font-size: 60px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 953px;

text-align: left;
`;


export const FrequentText=styled.ul`
min-height: 30px;
display: flex;
flex-direction:column ;
align-items: flex-start;
justify-content: flex-start;
/* height: 80px; */
width: 100%;
/* border-bottom: 1px solid black; */


`;


export const FrequentList=styled.div`
width: 100%;
min-height: 80px;
`;
export const FrequentItem=styled.li`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid;

`;

export const FrequentTxt=styled.p`
color: rgba(0, 0, 0, 0.70);
font-family: Roboto;
font-size: 18px;
    width: 100%;
font-style: normal;
font-weight: 500;
line-height: normal;

`;

export const HiddenTxts=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 100px;
padding-bottom: 100px;


`;
export const HidenFrequents=styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100px;
text-align: left;
row-gap: 30px;
`;
