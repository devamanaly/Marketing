import React, { useState } from 'react'
import { FrequentHead, FrequentList, FrequentItem, FrequentMain, FrequentText, FrequentTxt, Frequents } from './FrequentStyle'
import FDatas from './Data/FrequentData'
import FData from './Data/FData'
import { Icon } from '@iconify/react';
import HidenFrequent from './HidenFrequent';
// import FrequentData from './Data/FrequentData'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




import './style.css'
const Frequent = () => {
    const [Txt, UseText] = useState(false);
    const Open = () => {
        UseText(!Txt);
    }
    // const [openIndex, setOpenIndex] = useState(-1); // -1 indicates no answer is open

    // const handleOpen = (index) => {
    //     setOpenIndex(openIndex === index ? -1 : index); // Toggle the index if it's already open, otherwise set it to the clicked index
    // };

    return (
        <Frequents>
            <FrequentMain style={{ textAlign: "left" }}>
                <FrequentHead >
                    Do you offer brand designing and logo design serviece
                </FrequentHead>

                <FrequentText>
                    <FrequentList>
                        
                        <Accordion style={{ boxShadow: "none" ,    paddingTop: "20px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ borderBottom: "1px solid black" }}
                            >
                                <Typography >Do you offer brand designing and logo design serviece</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We get this question a lot. There are many competent Denver web design agencies and countless more throughout the world. This is a saturated industry, making it a formidable challenge to stand out from the crowd.",
                                    para2:"So, what sets us apart? Firstly, it’s the sheer quality of our UX/UI design work and the meticulous craftsmanship it entails. Our digital products and user interfaces are not only visually appealing but also incredibly user-friendly, effectively showcasing your brand in the best possible way. Additionally, it’s the people behind your project who make a significant difference. Our team consists of a multidisciplinary group of senior UX/UI designers, developers, SEO specialists and marketing consultants all led by our co-founders
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ boxShadow: "none",paddingTop: "20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ borderBottom: "1px solid black" }}
                            >
                                <Typography >Do you offer brand designing and logo design serviece</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We get this question a lot. There are many competent Denver web design agencies and countless more throughout the world. This is a saturated industry, making it a formidable challenge to stand out from the crowd.",
                                    para2:"So, what sets us apart? Firstly, it’s the sheer quality of our UX/UI design work and the meticulous craftsmanship it entails. Our digital products and user interfaces are not only visually appealing but also incredibly user-friendly, effectively showcasing your brand in the best possible way. Additionally, it’s the people behind your project who make a significant difference. Our team consists of a multidisciplinary group of senior UX/UI designers, developers, SEO specialists and marketing consultants all led by our co-founders
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ boxShadow: "none",paddingTop: "20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ borderBottom: "1px solid black" }}
                            >
                                <Typography >Do you offer brand designing and logo design serviece</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We get this question a lot. There are many competent Denver web design agencies and countless more throughout the world. This is a saturated industry, making it a formidable challenge to stand out from the crowd.",
                                    para2:"So, what sets us apart? Firstly, it’s the sheer quality of our UX/UI design work and the meticulous craftsmanship it entails. Our digital products and user interfaces are not only visually appealing but also incredibly user-friendly, effectively showcasing your brand in the best possible way. Additionally, it’s the people behind your project who make a significant difference. Our team consists of a multidisciplinary group of senior UX/UI designers, developers, SEO specialists and marketing consultants all led by our co-founders
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ boxShadow: "none", paddingTop: "20px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ borderBottom: "1px solid black" }}
                            >
                                <Typography >Do you offer brand designing and logo design serviece</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We get this question a lot. There are many competent Denver web design agencies and countless more throughout the world. This is a saturated industry, making it a formidable challenge to stand out from the crowd.",
                                    para2:"So, what sets us apart? Firstly, it’s the sheer quality of our UX/UI design work and the meticulous craftsmanship it entails. Our digital products and user interfaces are not only visually appealing but also incredibly user-friendly, effectively showcasing your brand in the best possible way. Additionally, it’s the people behind your project who make a significant difference. Our team consists of a multidisciplinary group of senior UX/UI designers, developers, SEO specialists and marketing consultants all led by our co-founders
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ boxShadow: "none",paddingTop: "20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ borderBottom: "1px solid black" }}
                            >
                                <Typography >Do you offer brand designing and logo design serviece</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We get this question a lot. There are many competent Denver web design agencies and countless more throughout the world. This is a saturated industry, making it a formidable challenge to stand out from the crowd.",
                                    para2:"So, what sets us apart? Firstly, it’s the sheer quality of our UX/UI design work and the meticulous craftsmanship it entails. Our digital products and user interfaces are not only visually appealing but also incredibly user-friendly, effectively showcasing your brand in the best possible way. Additionally, it’s the people behind your project who make a significant difference. Our team consists of a multidisciplinary group of senior UX/UI designers, developers, SEO specialists and marketing consultants all led by our co-founders
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ boxShadow: "none" ,paddingTop: "20px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ borderBottom: "1px solid black" }}
                            >
                                <Typography >Do you offer brand designing and logo design serviece</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We get this question a lot. There are many competent Denver web design agencies and countless more throughout the world. This is a saturated industry, making it a formidable challenge to stand out from the crowd.",
                                    para2:"So, what sets us apart? Firstly, it’s the sheer quality of our UX/UI design work and the meticulous craftsmanship it entails. Our digital products and user interfaces are not only visually appealing but also incredibly user-friendly, effectively showcasing your brand in the best possible way. Additionally, it’s the people behind your project who make a significant difference. Our team consists of a multidisciplinary group of senior UX/UI designers, developers, SEO specialists and marketing consultants all led by our co-founders
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ boxShadow: "none",paddingTop: "20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ borderBottom: "1px solid black" }}
                            >
                                <Typography >Do you offer brand designing and logo design serviece</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We get this question a lot. There are many competent Denver web design agencies and countless more throughout the world. This is a saturated industry, making it a formidable challenge to stand out from the crowd.",
                                    para2:"So, what sets us apart? Firstly, it’s the sheer quality of our UX/UI design work and the meticulous craftsmanship it entails. Our digital products and user interfaces are not only visually appealing but also incredibly user-friendly, effectively showcasing your brand in the best possible way. Additionally, it’s the people behind your project who make a significant difference. Our team consists of a multidisciplinary group of senior UX/UI designers, developers, SEO specialists and marketing consultants all led by our co-founders
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </FrequentList>
                </FrequentText>









            </FrequentMain>

        </Frequents>
    )
}

export default Frequent
