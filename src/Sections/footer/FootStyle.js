import { styled } from "styled-components";

export const Foots = styled.div`
width: 100%;
height: 738px;
display: flex;
justify-content: center;
align-items: center;
background: #000;
`;
export const FootMain = styled.div`
width: 86%;
height: 100%;
/* border: 1px solid white; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
row-gap: 140px;
`;
export const FootTop = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
min-height:150px ;
justify-content: flex-start;
row-gap: 50px;
`;
export const FootGoogCont = styled.div`
width: 258px;
height: 52px;
border: 1px solid white;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
column-gap: 20px;
`;
export const FootGoogText = styled.p`
font-size: 16px;
color: #fff;
`;
export const Stars = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
export const FootTextMain = styled.h2`
color: rgba(255, 255, 255, 0.70);
font-family: sans-serif;
font-size: 70px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 100%;
    height: max-content;

text-align: left;


a {
    color: rgba(255, 255, 255, 0.70);
font-family: Roboto;
font-size: 70px;

font-style: normal;
font-weight: 400;
line-height: normal;
  position: relative;
}

a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.70);
  transform-origin: bottom right;
  text-decoration: none;
  transform: scaleX(0);
  border: none;
  transition: transform 0.5s ease;
}

a:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
  border: none;
  text-decoration: none;
  


}
a:hover{
    text-decoration: none;
}

`;
export const FootBotm = styled.div`
min-height: 200px;
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
row-gap: 67px;

`;
export const FootBLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
row-gap: 67px;

`;
export const FootBotmText = styled.p`
color: #FFF;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const FootInputCont = styled.div`
width: 215px;
height: 48px;
/* border: 1px solid white; */
display: flex;
flex-direction: row;
align-items: center;


`;
export const FootInput = styled.input`
width: 165px;
height: 100%;
background: #292929;
color: white;
border: none;
padding-left: 10px;
&:focus-visible{
    border: 0px;
    outline: none;
}
`;

export const FootInputRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
width: 48px;
height: 100%;
cursor:pointer;
`;
export const Flinks = styled.a`
color: rgba(255, 255, 255, 0.60);
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const FootTRight = styled.div`
width: 216px;
display: flex;
flex-direction: column;
align-items:flex-end;
justify-content: space-around;
height: 100%;

`;


export const FootEmailCont = styled.div`
min-height:60px ;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
row-gap: 10px;
`;
export const FootBRText = styled.p`
color: #FFF;
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const FootBIcons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
column-gap: 30px;


#facebok{
  font-size: 24px;
   color: #fff;
   cursor:pointer;
   &:hover{
    color: #39569c;
    transition: all 0.5s ease;
   }
  }


   #Linkdin{
    font-size: 24px;
   color: #fff;
   cursor:pointer;
   &:hover{
    webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background: linear-gradient(225deg,#b900b4,#f20407,#ffd521);
    -webkit-background-clip: text;
    /* color: #39569c; */
    transition: all 0.5s ease;
   }
   }
   #instagram{
    font-size: 24px;
   color: #fff;
   cursor:pointer;
   &:hover{
    color: #39569c;
    transition: all 0.5s ease;
   }
   }





`;
// export const =styled.``;