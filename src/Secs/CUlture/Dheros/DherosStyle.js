import { styled } from "styled-components";

// export const =styled. ``;
// export const =styled. ``;
// export const =styled. ``;

export const Dhero = styled.div`
display: flex;
/* flex-direction: ; */
width: 100%;
justify-content: center;
align-items: center;
/* flex-direction: column; */
/* align-items: flex-start;

justify-content: space-between; */
min-height: 60vh;


`;
export const DheroMain = styled.div`
display: flex;
/* flex-direction: ; */
border: 1px solid;
width: 90%;
flex-direction: column;
align-items: flex-start;

justify-content: space-between;
height: 100%;


`;
export const DheroTop = styled.div`
width: 100%;
height: 20%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
text-align: left;
`;
export const DherosHeadText = styled.div`

width: 100%;
color: #000;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const DherosText = styled.div`
max-width: 1150px;
color: rgba(0, 0, 0, 0.95);
font-family: Roboto;
font-size: 85px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;
export const DherosVedio = styled.div`
width: 100%;
height: 600px;
border: 1px solid;
/* flex-shrink: 0; */
border: 1px solid;


`;

export const DherosLogoCont = styled.div`
width: 100%;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
`;
export const DherosLogo = styled.div`
font-family: Roboto;
font-size: 200px;
font-style: normal;
font-weight: 700;
line-height: normal;


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
