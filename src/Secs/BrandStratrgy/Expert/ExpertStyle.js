import { styled } from "styled-components";

export const Experts=styled.div`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;

`;
export const ExpertMain=styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
/* border: 1px solid; */


`;
export const Expertleft=styled.div`
max-width: 499px;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
text-align: left;
row-gap: 16px;

`;
export const ExpertTxt=styled.p`
color: rgba(0, 0, 0, 0.85);
font-family: sans-serif;
font-size: 60px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

export const ExpertBtn=styled.div`
display: flex;
padding: 18px 29px;
justify-content: center;
align-items: center;
/* gap: 10px; */
background: #5F2BE1;
color: #FFF;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 20px;
`;
export const ExpertRight=styled.div`
width: 690px;

height: 100%;
`;
export const ExpertImage=styled.img`
width: 100%;
height: 100%;

`;