import { styled } from "styled-components";
export const Meshs = styled.div`
       position: absolute;
    border: 1px solid;
    width: 186px;
    height: 350px;
    filter: blur(69px);
    transform: translate(478px, 47px);
`;
export const SubMesh1 = styled.div`
width: 150px;
    height: 150px;
    border-radius: 99px;
    position: absolute;
    background-color: orange;
    transform: translate(200px, 35%);
     animation-name: mash1;
    animation-duration:10s ;
    animation-timing-function: ease;
    animation-iteration-count:infinite;    
    @keyframes mash1 { 
        33%{
            transform: translate(0%,0%);
        }
        66%{
            transform: translate(0%,100%);
        }       
    }
`;
export const SubMesh2 = styled.div`
width: 150px;
    height: 150px;
background-color: red;
    border-radius: 99px;
    transform: translateX(0px);
     position: absolute;
    animation-name: mash2;
    animation-duration:10s ;
    animation-timing-function: linear;
    animation-iteration-count:infinite;
    @keyframes mash2 { 
   33% {
    transform: translateX(0%) translateY(100%);
  } 
  66%{
    transform: translate(100%,35%);
  }
  } 
`;
export const SubMesh3 = styled.div`
    width: 150px;
    height: 150px;
    background-color: green;
    border-radius: 99px;
    transform: translate(0%,100%);
    position: absolute;
    animation-name: mash3;
    animation-duration:10s ;
    animation-timing-function: linear;
    animation-iteration-count:infinite;
    @keyframes mash3 {
   15%{
    transform: translate(100%,35%);
}
66%{
    transform: translate(0%,0%);
}

}
`;
