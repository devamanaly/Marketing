import { type } from "@testing-library/user-event/dist/type";
import { styled } from "styled-components";

export const Forms=styled.form`

min-height: 572px;
width: 955px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
/* border: 1px solid; */
`;
export const FormMain=styled.div`
height: 100%;
row-gap: 48px;
width: 955px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-left: 80px;
`;

export const InputContainer=styled.div`
width: 100%;
height: 17%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

`;
export const Label=styled.label`
color: rgba(0, 0, 0, 0.90);
font-family: sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 300;
line-height: normal;
.str{
    color: rgba(198, 28, 28, 0.70);
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
`;
// export const Input=styled.`
export const Input=styled.input`
width: 100%;

height: 48px;
border: none;
/* outline: none; */
color: rgba(0, 0, 0, 0.90);
font-family: sans-serif;
font-size: 20px;

font-style: normal;
font-weight: 300;
-webkit-appearance: none;
  -moz-appearance: textfield; /* Firefox uses a different property */
  appearance: textfield;
  
border-bottom: 1px solid lightgrey;
/* box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1); */

line-height: normal;
&:focus-visible{
    outline: none;
    border: 2px solid black;

}

`;

export const Submit=styled.div`
color: rgba(0, 0, 0, 0.90);
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: normal;
width: 121px;
color: white;
height: 51px;
border: 1px solid;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
column-gap: 4px;
cursor: pointer;
&:hover{
    background-color: #565656;
    transition: all .5s ease-in-out;
}

`;
export const SubmitTxt=styled.p`
color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;