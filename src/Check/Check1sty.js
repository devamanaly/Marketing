import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Sol = styled.div`
display: flex;
/* flex-direction: ; */
/* flex-direction: column; */
justify-content: flex-end;
align-items: flex-end;
/* width: 1465px; */
/* height: 100vh; */

/* transform-origin: top left; */


animation: ${slideInFromRight} .8s ease;


`;
export const Solution = styled.div`
width: 100%;
height: 100%;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 1465px;
height: 100vh;



`;
export const SolHead = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 9vh;
background-color: black;
color: white;
width: 100%;
margin-left: 67px;
margin-right: 67px;
`;

export const SolCancel = styled.div`
display: flex;
/* flex-direction: ; */
justify-content: center;
align-items: center;
width: 60px;
height: 51px;
margin-right: 67px;


`;
export const SolIcon = styled.div`
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 67px;

`;
export const SolMain = styled.div`
min-width:500px ;
min-height:340px ;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
/* border: 1px solid white; */
column-gap: 175px;
`;

export const LeftSOl = styled.h2`
color: #FFF;
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;

export const RIghtSol = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
min-width: 60%;
height: 100%;
/* border: 1px solid white; */
row-gap: 40px;

`;

export const SolList = styled.li`

width: 100%;
height: 52px;
text-align: left;
display: flex;
align-items: flex-start;
justify-content: flex-start;
&:hover{



a:first-child{
    animation-name: hov2;
animation-duration:.5s ;
animation-iteration-count: 1;
animation-fill-mode: forwards;
animation-direction: alternate;
display: block;

@keyframes hov2 {
    from{
      transform: translate(0px,10px);


    }

    to{
        transform: translate(-10px,10px);

    }
  }

 

}


a:last-child{
    /* 
    animation-name: hov;
animation-duration:.5s ;
animation-iteration-count: 1;
animation-fill-mode: forwards;
animation-direction: alternate;*/
/* animation: name duration timing-function delay iteration-count direction fill-mode; */
/* animation:hov .5s  alternate forward ; */


/* @keyframes hov {
    from{
    transform: translate(0px);


    }

    to{
        transform: translate(10px);

    }
  } */
 }
} 

/* #Mfirst{
position: relative;
/* margin: 0; */
            /* padding: 0; */
            /* position: absolute; */
            /* top: 50%; */
            /* left: 50%; */
            /* font-size: 5em; */
            /* color: gray; */
        

/* 
    
  &::before {
     
            content:"Brand Strategy" ;
            position: absolute;
            top: 0;
            left: 0; 
  
             color: white;
            overflow: hidden;
   
            Setting width as 0
             width: 0%;
            transition: 1s;
        }    
      &:hover::before {
        overflow: hidden;
  
 
             width: 100%;
        } 
  
} */
    

#title-text {
  position: absolute;
  /*Color the text with background*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/
  /*The animated layer*/
  background-image:linear-gradient(#8a8a8a,#8a8a8a);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 58px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation: stroke-rainbow 13s linear infinite,
           text-rainbow 13s linear infinite          ;

}
#title-text:hover {
    animation:   hov .5s alternate forwards,
    stroke-rainbow 13s linear infinite,
           text-rainbow 13s linear infinite,
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

@keyframes stroke-rainbow {
  0% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }

  100% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }
}

@keyframes text-rainbow {
  0% {
    background-color: gray;
  }

  100% {
    background-color: Gray;
  }
}
#title-text2 {
  position: absolute;
  /*Color the text with background*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/
  /*The animated layer*/
  background-image:linear-gradient(#8a8a8a,#8a8a8a);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 58px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation: stroke-rainbow 13s linear infinite,
             text-rainbow 13s linear infinite;
}

#title-text2:hover {
  background-size:0% 100%;
}

@keyframes stroke-rainbow {
  0% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }

  100% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }
}

@keyframes text-rainbow {
  0% {
    background-color: gray;
  }

  100% {
    background-color: Gray;
  }
}
#title-text3 {
  position: absolute;
  /*Color the text with background*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/
  /*The animated layer*/
  background-image:linear-gradient(#8a8a8a,#8a8a8a);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 58px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation: stroke-rainbow 13s linear infinite,
             text-rainbow 13s linear infinite;
}

#title-text3:hover {
  background-size:0% 100%;
}

@keyframes stroke-rainbow {
  0% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }

  100% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }
}

@keyframes text-rainbow {
  0% {
    background-color: gray;
  }

  100% {
    background-color: Gray;
  }
}
#title-text4 {
  position: absolute;
  /*Color the text with background*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/
  /*The animated layer*/
  background-image:linear-gradient(#8a8a8a,#8a8a8a);

  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 58px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation: stroke-rainbow 13s linear infinite,
             text-rainbow 13s linear infinite;
}

#title-text4:hover {
  background-size:0% 100%;
}

@keyframes stroke-rainbow {
  0% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }

  100% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }
}

@keyframes text-rainbow {
  0% {
    background-color: white;
  }

  100% {
    background-color: white;
  }
}
#title-text5 {
  position: absolute;
  /*Color the text with background*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/
  /*The animated layer*/
  background-image:linear-gradient(#8a8a8a,#8a8a8a);

  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 58px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation: stroke-rainbow 13s linear infinite,
             text-rainbow 13s linear infinite;
}

#title-text5:hover {
  background-size:0% 100%;
}

@keyframes stroke-rainbow {
  0% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }

  100% {
    border-color:black;
    -webkit-text-stroke-color:black;
  }
}

@keyframes text-rainbow {
  0% {
    background-color: white;
  }

  100% {
    background-color: white;
  }
}

   
`;

export const SolLink = styled.a`
color: gray;
font-family: Roboto;
font-size: 58px;
font-style: normal;
font-weight: 500;
line-height: normal;
/* overflow: hidden; */
      height: 67px;

`;
export const SolLinkNum = styled(SolLink)`
color: white;
font-size: 15px;
position: absolute;
transform: translate(0px,10px);
display: none;
&:hover{
    

}




`;
