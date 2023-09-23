import { styled } from "styled-components";


export const Wheros = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start ;

`;
export const WherosMain = styled.div`
display: flex;
/* flex-direction: ; */
width: 100%;
flex-direction: row;
align-items: flex-start;

justify-content: space-between;
height: 80vh;
margin-top: 40px;


`;


export const WherosLeft = styled.div`
width: 522px;
margin-left: 72px;
display: flex;
flex-direction: column;
align-items: flex-end;
text-align: left;
/* border: 1px solid black; */
`;


export const WherosHeadText = styled.div`

width: 100%;
color: #000;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const WherosText = styled.div`

color: rgba(0, 0, 0, 0.95);
font-family: Roboto;
font-size: 85px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

export const WherosImage = styled.div`
width: 840px;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;

p{
    font-family: Roboto;
font-size: 200px;
font-style: normal;
font-weight: 700;
line-height: normal;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;


    /* stroke: black; */
    animation: textAnimation 5s;

    @keyframes textAnimation {
        0%{
stroke-dasharray: 0 50%;
        }
        100%{
stroke-dasharray: 50% 0;
        }
        
    }

}
/* overflow: hidden;


    position: relative;
animation-name: upwords;
animation-duration: .5s;
animation-iteration-count: 1;
animation-fill-mode:backwards;
animation-direction: alternate-reverse;
/* width: 100%; */
@keyframes upwords{
from{
    height: 522px;
}
to{
    height: 0px;
}
} 


`;
export const WherosLogo = styled.div`
width: 100%;
height: 40vh;
display: flex;
justify-content: center;
align-items: center;


    font-family: sans-serif;
font-size: 200px;
font-style: normal;
font-weight: 700;
line-height: normal;
  color: black;
  /* -webkit-text-fill-color: white; Will override color (regardless of order) */
  /* -webkit-text-stroke-width: 1px; */
  /* -webkit-text-stroke-color: black; */

svg path{
    stroke: black;
    animation: textAnimation 5s;

    @keyframes textAnimation {
        0%{
stroke-dasharray: 0 50%;
        }
        100%{
stroke-dasharray: 50% 0;
        }
        
    }

}


`;