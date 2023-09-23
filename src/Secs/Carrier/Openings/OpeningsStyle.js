import { styled } from "styled-components";

export const Opening =styled.div`
width: 1465px;
min-height: 100vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;
export const OpeningMain =styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
/* border: 1px solid white; */
min-width:90% ;
padding-top: 200px;
    padding-bottom: 200px;
min-height: 400px;
`;

export const OpeningHead=styled.h2`
color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-top: 50px;
padding-bottom: 50px;


`;

export const OpeningBody=styled.div`
width: 100%;
height: auto;
/* border: 1px solid white; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 
    justify-content: flex-start;
    list-style: none;
/* padding-left: 30px; */
   width: 100%;
    height: 100%;
}
li{
    width: 100%;
    height: 158px;
    border-top:1px solid white ;
    border-bottom: 1px solid white;
    padding: 0px;
  display: flex;
    flex-direction: row;
    align-items: flex-start;
 row-gap: 12px;
    justify-content: center;
    column-gap: 700px;
}




`;



export const OpeningLeft=styled.div`
  display: flex;
    flex-direction: column;
    align-items: flex-start;
 row-gap: 12px;
    justify-content: center;
height: 100%;
width: 20%;

`;
export const OpeningIhead=styled.h2`
color: #FFF;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
/* margin-left: 40px; */
`;
export const OpeningIText=styled.a`
color: #FFF;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
/* margin-left: 40px; */
/* border: non; */
text-decoration: none;
`;
export const OpeningRight=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 100%;
column-gap: 20px;

`;
export const Icons=styled.div`
display:flex;
/* flex-direction: ; */
justify-content: center;
align-items: center;
width: 40px;
cursor: pointer;
height: 40px;
border: 1px solid #383636;
border-radius: 50px;

`;

export const OpeningImage=styled.div`
height: 660px;
width: 100%;
overflow: hidden;
width: 100%;


`;