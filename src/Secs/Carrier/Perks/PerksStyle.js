import { styled } from "styled-components";

export const Perk=styled.div`
width: 100%;
min-height: 100vh;
display: flex;
/* flex-direction: ; */
justify-content: center;
align-items: center;
padding-top: 100px;
padding-bottom: 100px;
background-color: black;
`;
export const ProfileMain=styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 60px;

`;


export const ProfilesHead=styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
    `;
export const PHeadRight=styled.p`
color: rgba(0, 0, 0, 0.70);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
height: 84px;
width: 588px;
border: 1px solid;
text-align: left;

`;

export const ProfileCard=styled.div`
width: 100%;
min-height:100vh ;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
row-gap: 30px;
`;