import React from 'react'
import { NavLink, HeadLogo } from '../Sections/Header/HeadStyle'
const Bacground = () => {
  return (
    <NavLink to="/" style={{ marginLeft: "19px" }}>

      <HeadLogo width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" fill="black" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0748 24.24V24.1438C37.1917 23.052 39.956 20.486 39.9551 16.7327C39.9551 9.41789 32.3395 8.18182 25.3468 8.18182H10.4565V18.4704H8.18182L14.8445 24.0819L21.5064 18.4696H19.2561V14.4538H25.2335C27.9986 14.4538 31.1573 15.1661 31.1573 17.9657C31.1573 20.673 28.3368 21.6243 25.6269 21.6243H20.7493V27.8932H25.908C28.7856 27.8932 33.0158 28.4169 33.0158 31.5999C33.0158 34.5446 29.9143 35.5424 27.15 35.5424H19.2534V31.5434H21.5036L14.8445 25.9333L8.18273 31.5434H10.4556V41.8182H26.8137C33.9207 41.8182 41.8182 39.4888 41.8182 32.4595C41.8182 28.0886 38.3196 24.8095 33.0748 24.24Z" fill="white" />

      </HeadLogo>
    </NavLink>
  )
}

export default Bacground
