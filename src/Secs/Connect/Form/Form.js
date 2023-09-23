import React from 'react'
import { FormMain, Forms, Input, InputContainer, InputNum, Label, Submit, SubmitTxt } from './FormStyle'
import { Icon } from '@iconify/react';
import './style.css'
import FHead from '../Head/FHead';
const Form = () => {
    return (
        <>

        {/* <FHead/> */}

      
        <Forms action='backend.php'>
            <FormMain>


            <InputContainer>
                <Label htmlFor="#">First Name<span className='str'>*</span></Label>
                <Input  type='text'>


                </Input>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="#">Work Email<span className='str'>*</span></Label>
                <Input type='text'>


                </Input>
            </InputContainer>
            <InputContainer>
            <Label htmlFor="#">Phone Number<span className='str'>*</span> </Label>

                <Input className='InputNum' type='number'>


                </Input>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="#">Company Name<span className='str'>*</span> </Label>
                <Input  type='text'>


                </Input>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="#">Message<span className='str'>*</span> </Label>
                <Input type='text'>


                </Input>
            </InputContainer>
            <InputContainer style={{ justifyContent: 'flex-start',marginTop:"38px", alignItems: "flex-start", border: "none" }}>
                <Submit >
                    <SubmitTxt>
                        Submit
                    </SubmitTxt>
                    <Icon icon="icon-park-outline:right-c" />
                </Submit>
            </InputContainer>
            <div class="image-curtain scroll-reveal animate"></div>
            </FormMain>
        </Forms>
        </>

    )
}

export default Form
