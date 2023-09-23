import { styled } from "styled-components";

export const TextsContainer=styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: black;


`;


export const Texts =styled.p`
  position: absolute;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  background-image:linear-gradient(#ffff,#ffff);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 58px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation:text-rainbow 13s linear infinite;


  &:hover{
    animation:   hov .5s alternate forwards,
         ;
    @keyframes hov {
        from{
        transform: translate(0px);  
        }    
        to{
            transform: translate(10px);    
        }
      }
  background-size:0% 100%;

  }
  @keyframes text-rainbow {
  0% {
    background-color: gray;
  }

  100% {
    background-color: Gray;
  }
}

`;