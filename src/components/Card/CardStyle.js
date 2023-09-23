import { styled } from "styled-components";

export const Cards = styled.div`
height: 650px;
width: 526px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
row-gap: 8px;

`;

export const CardImageCont = styled.div`

width: 526px;
height: 610px;
/* flex-shrink: 0; */
/* border: 1px solid; */
display: flex;
justify-content: flex-end;
align-items: flex-end;
/* padding-left: 20px; */
/* padding-bottom: 20px; */
/* background-position: center; */
/* background-size: cover; */
/* transition: all 2s ease-in-out; */
overflow: hidden;

img{
    position: relative;
animation-name: upwords;
animation-duration: .5s;
animation-iteration-count: 1;
animation-fill-mode:backwards;
animation-direction: reverse;
width: 100%;
@keyframes upwords{
from{
    height: 522px;
}
to{
    height: 0px;
}
}



&:hover{
    transition: all .5s ease-in-out;
    transform:scale(1.1);
}
}
`;
export const CardImage = styled.img`
width: 100%;
height: 100%;

`;
export const CardLinksCont = styled.div`
min-width: 100px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
column-gap: 10px;
`;

export const CardLink = styled.a`
color: rgba(0, 0, 0, 0.70);
text-align: center;
font-family: sans-serif;
font-size: 14px;
font-style: normal;
`;
export const CardTxt = styled.p`
color: rgba(0, 0, 0, 0.85);
text-align: center;
font-family: sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const CardBtn = styled.button`
width: 78px;
height: 40px;
color: #000;
font-family: sans-serif;
font-size: 16px;
font-style: normal;
position: absolute;
margin-left: 20px;
margin-bottom: 20px;
font-weight: 400;
line-height: normal;
background-color: #FFF;
border: none;
cursor: pointer;
/* border: 1px solid; */
/* flex-shrink: 0; */
transform: translate(-428px, 0px);
`;