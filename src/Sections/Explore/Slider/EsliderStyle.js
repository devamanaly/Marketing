import { styled } from "styled-components";

export const Eslider=styled.div`
width: 100%;
height: 400px;
/* flex-shrink: 0; */
/* border: 1px solid; */

`;


export const EImageCon=styled.div`
width: 100%;
height: 316px;
padding: 0px;
margin: 0px;
overflow: hidden;
`;
export const EImage=styled.img`
    width: 100%;
   height: 100%;
&:hover{

    transform: scale(1.1);
    transition: all 1s ease-in-out;
}
`;

export const ESlidTextCont=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
row-gap: 20p;

`;