import { styled } from "styled-components";

export const Stays = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;



`;

export const StaysMain = styled.div`
min-width:  462px;;
min-height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 60px;


`;
export const StaysTOp = styled.div`
width: 100%;
min-height:103px;

display: flex;
flex-direction: column;
align-items: center;
row-gap: 16px;
justify-content: center;

h3{
    color: #FFF;
font-family: Inter;
font-size: 85px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
p{
    color: #FFF;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}


`;

export const Input = styled.div`
width: 462px;
height: 48px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

input{
    width: 83%;
    height: 100%;
    padding-left: 20px;
    /* padding-top: 16px; */
    border: none;

}

`;
export const InputRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 13%;
background-color: black;
height: 100%;
`;
