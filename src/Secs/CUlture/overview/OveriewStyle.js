import { styled } from "styled-components";
    import { ExpertRight, ExpertTxt, Expertleft } from "../../../Secs/BrandStratrgy/Expert/ExpertStyle"
export const OverViews=styled.div`
min-height: 100vh;
width: 1465px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
border: 1px solid;
padding-bottom: 150px;
    padding-top: 100px;

`;
export const OverviewMain=styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
/* border: 1px solid; */


`;
export const OverviewLeft=styled(Expertleft)`


`;
export const OverviewTxt=styled(ExpertTxt)`


`;
export const OverviewRight=styled(ExpertRight)`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
row-gap: 32px;
`;
export const OverViewPara=styled.span`
width: 600px;
min-height: 100px;
text-align: left;

`;
export const OverViewGet=styled.a`
display: flex;
justify-content: center;
align-items: flex-end;
color: rgba(0, 0, 0, 0.70);
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration: none;
`;