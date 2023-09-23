import { styled } from "styled-components";

export const BotmTxts=styled.div`
width: 1465px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`;

export const BotmTxtsMain =styled.div`
width: 85%;
height: 100%;
width: 90%;
column-gap: 130px;
/* height: 430px; */
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
border-top: 1px solid black;
/* border-bottom: 1px solid black; */
`;
export const BotmTxtLeft =styled.div`
width: 390px;
height: 283px;
/* flex-shrink: 0; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
/* border: 1px solid; */
`;


export const BotmTxtRight=styled.div`
    width: 713px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* border: 1px solid; */
    text-align: left;
    row-gap: 19px;

`; 
 export const BotmTxtLink=styled.a`
 color: #5f2be1;
/* font-family: Inter; */
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal; 
font-family: sofia-pro,sans-serif;
text-decoration: none;
display: flex;
    align-items: flex-end;

`;


/* export const =styled.div` */

export const BotmTxtImage=styled.img`
width: 100%;
height: 100%;
`;