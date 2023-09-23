import React from 'react'
import Form from '../../Secs/Connect/Form/Form'
import Strategy from '../../Secs/Connect/Strategy/Strategy'
// import { Star } from '@mui/icons-material'
import Star from '../../Sections/Star/Star'
import Foot from '../../Sections/footer/Foot'
import { Contacts } from './ContactStyle'
import Head from '../../Sections/Header/Head'
import FHead from '../../Secs/Connect/Head/FHead'

const Contact = () => {
  return (
    <Contacts>
      <FHead/>
        {/* <Head/> */}
        <Form/>
        <Strategy/>
        {/* <Star/> */}
        <Foot/>

      
    </Contacts>
  )
}

export default Contact
