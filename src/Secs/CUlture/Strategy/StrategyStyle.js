import { styled } from "styled-components";

export const Strategys=styled.div`

height: 720px;
width: 1465px;
border: 1px solid;
/* background: rgba(120, 88, 88, 0.22); */
background-color: black;

display: flex;
justify-content: center;
align-items: center;
`;
export const StrategyMain=styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
row-gap: 140px;

text-align: left;
`;
export const StrategyMainTxt=styled.p`
color: #FFF;
font-family: Roboto;
font-size: 210px;
font-style: normal;
font-weight: 700;  
  font-family: monospace;
line-height: normal;`;

export const StrategyTopTxt=styled.div`
width:100%;
height: max-content;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
text-align: left;


`;
export const StrategyTxt=styled.p`
color: #FFF;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
font-family: monospace;

`;