import { styled } from "styled-components";

export const Expertises = styled.div`
width: 1465px;
height: 100vh;
flex-shrink: 0;
background: #5F2BE1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 30px;
`;

export const ExpertisesHead = styled.h1`
color: rgba(255, 255, 255, 0.85);
font-family: Inter;
font-size: 60px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 85%;
text-align: left;
;
`;

export const ExpertisesList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 85%;
list-style: none;
column-gap:100px;
row-gap: 30px;

`;

export const ExpertiseItems = styled.li`
width: 340px;
height: 50px;
border-bottom: 1px solid white;
display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

&::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #39FFAC;
  transform-origin: bottom left;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  border: none;
}

&:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
  border: none;

}

&:not(:hover)::before {
  transform-origin: bottom right; /* Change to bottom right */
  transform: scaleX(0); /* Reset to scaleX(0) */
  border:none;
}

`;

export const ExpertiseLinks = styled.a`
color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
text-decoration:none ;
line-height: normal;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
    align-items: center;
    background-image: linear-gradient(
    to right,
    #39FFAC,
    #39FFAC 50%,
    #fff 50%
  );
  /* background-size: 200% 100%;
  background-position: -100%; */
  background-size: 200% 100%;
  background-position: 100%;
  /* display: inline-block; */
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;


&::before{
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

&:hover {
 background-position: 0%;
}

a:hover::before{
  width: 100%;
  background: #5c36dc;
}


`;
