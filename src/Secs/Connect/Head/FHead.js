import React ,{useEffect}from 'react'
import { FHeadText, FHeading, FHeads, FTxtBotm, FheadSubTxt } from './Fstyle'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const FHead = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <FHeads>
            <FHeadText data-aos="fade-up">
                /CONTACT
            </FHeadText>
            <FHeading data-aos="fade-up">
                LET’S CONNECT.
            </FHeading>
            <FTxtBotm data-aos="fade-down">

            <FHeadText >
                Tell us about your next growth initiative.
            </FHeadText>
            <FheadSubTxt >
                We tackle your most pressing business challenges through innovative web design, branding, development,
                search engine optimization and digital marketing strategies. Fill out the form or email 
                <a href="#">

                hello@blennd.com.
                </a>
            </FheadSubTxt>

            </FTxtBotm>

        </FHeads>
    )
}

export default FHead
