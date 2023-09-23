import { styled } from "styled-components";

export const Feature=styled.div`
min-height: 80vh;
width: 1465px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
/* border: 1px solid; */
padding-top: 70px;
`;
export const FeatureMain=styled.div`
width: 95%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
/* border: 1px solid; */

/* border: 1px solid; */

`;
export const FeatureLeft=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
width: 520px;
text-align: left;

row-gap: 77px;

`;
export const FLeftTop=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
text-align: left;

row-gap: 21px;
`;
export const FeatureRight=styled.div`
width: 700px;
height: 100%;


`;

export const FeatureLeftTxt=styled.p`
color: rgba(0, 0, 0, 0.95);

font-family: sans-serif;
font-size: 60px;
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
cursor: pointer;

`;