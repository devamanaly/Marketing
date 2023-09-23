import { styled } from "styled-components";

export const Check = styled.div`
/* background-color:black; */
width: 30vw;
height: 30vh;
#title-text {
  position: absolute;
  /*Color the text with background*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/
  /*The animated layer*/
  background-image:linear-gradient(#000,#000);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 90px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation: stroke-rainbow 13s linear infinite,
             text-rainbow 13s linear infinite;
}

#title-text:hover {
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
#title-text {
  position: absolute;
  /*Color the text with background*/
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/
  /*The animated layer*/
  background-image:linear-gradient(#000,#000);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 90px;
  -webkit-text-stroke: 2px var(--main-front-color);
  animation: stroke-rainbow 13s linear infinite,
             text-rainbow 13s linear infinite;
}

#title-text:hover {
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
  background-image:linear-gradient(#000,#000);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 90px;
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
  background-image:linear-gradient(#000,#000);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 90px;
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
  background-image:linear-gradient(#000,#000);
  background-size:100% 100%;
  background-position:right;
  background-repeat:no-repeat;
  /**/
  transition:1s all;
  font-weight: bold;
  text-align: center;
  font-size: 90px;
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
    background-color: gray;
  }

  100% {
    background-color: Gray;
  }
}



`;
/*    
            margin: 0;
            padding: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 5em;
            color: #ccc;
        
  
        &::before {
            /* This will create the layer
               /* over original text*/
            /* content:"sdakljfasldkjfl" ;
            position: absolute;
            top: 0;
            left: 0; */
  
            /* Setting different color than
               that of original text  */
            /* color: green;
            overflow: hidden;
   */
            /* Setting width as 0*/
            /* width: 0%;
            transition: 1s;
        } */
   
        /* &:hover::before {
  
            /* Setting width to 100 on hover*/
            /* width: 100%;
        } */ 