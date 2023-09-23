import { styled } from "styled-components";
import { motion } from 'framer-motion';

export const Cads=styled.div`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
padding-top: 200px;
    padding-bottom: 200px;
    row-gap: 100px;

`;


export const DcardsMain=styled.div`
min-height: 100%;
width: 90%;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
flex-wrap: wrap;
row-gap: 48px;

`;
export const Dcards=styled(motion.div)`
width: 552px;
min-height: 552px;
display: flex;
flex-direction: column;
align-items:center ;
justify-content: flex-start;
background-color: black;
row-gap: 48px;


`;
export const DcardImageCont=styled.div`
width: 552px;
height: 446px;

overflow: hidden;

`;

export const DcardImage=styled.img`

width: 100%;
height: 100%;

position: relative;
animation-name: upword;
animation-duration: 2s;
animation-iteration-count: 1;
animation-fill-mode:reverse;
animation-direction: alternate;

@keyframes upword {
from{
    height: 0px;
}
to{
    height: 466px;
}
}

&:hover{
    transition: all .5s ease-in-out;
    transform:scale(1.1);
}
`;

export const DcardTxtCont=styled.div`
min-height: 50px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
text-align: left;
width: 100%;
row-gap: 8px;

`;
export const DcardHead=styled.h2`
color: #FFF;
font-family: Roboto;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;
export const DcardTxt=styled.p`
color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;