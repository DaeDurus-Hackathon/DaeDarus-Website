import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import '../Sponsors/Sponsors.css'

import taskade from '../../sponsor-logos/taskade.png'
import draftbit from '../../sponsor-logos/draftbit.png'
import cppsecrets from '../../sponsor-logos/cppsecrets.png'
import xyz from '../../sponsor-logos/xyz.svg'
import cn from '../../sponsor-logos/cn.svg'
import GMC from '../../sponsor-logos/GMC.png'
import Rahee from '../../sponsor-logos/Raahee.png'


export default function Sponsors() {
    return (
        <div className="sponsors" id="sponsors">
        <Container className="py-5">
        <br></br>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="header3 text-left grad-text">Sponsors</h1>

            {/* <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-gold">Diamond Sponsors</span></h1>
            <Row className="my-5">
                <Col className="spon-col"><img src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/></Col>
                <Col className="spon-col"><img src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/></Col>
                <Col className="spon-col"><img src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/></Col>
            </Row> */}
            {/* <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-silver">Platinum Sponsors</span></h1>
            <Row className="my-5">
                <Col className="spon-col"><img src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/></Col>
                <Col className="spon-col"><img src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/></Col>
                <Col className="spon-col"><img src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/></Col>
            </Row> */}
            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-bronze">Gold Sponsors</span></h1>
            <Row className="my-5 d-flex align-items-center">
                <Col className="spon-col"><img  className="spon-logos" src={taskade}/></Col>
                <Col className="spon-col"><img  className="spon-logos" src={Rahee}/></Col>
                <Col className="spon-col"><img  className="spon-logos" src={draftbit}/></Col>
                <Col className="spon-col"><img  className="spon-logos" src={cppsecrets}/></Col>
                <Col className="spon-col"><img  className="spon-logos" src={xyz}/></Col>
            </Row>

            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-bronze-real">Bronze Sponsors</span></h1>
            <Row className="my-5 d-flex align-items-center">
                <Col></Col>
                <Col className="spon-col"><img  className="spon-logos" src={cn}/></Col>
                <Col></Col>
            </Row>

            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-partner">Partners</span></h1>
            <Row className="my-5 d-flex align-items-center">
                <Col></Col>
                <Col className="spon-col"><img  className="spon-logos" src={GMC}/><h2>Give My Certificate</h2><h3>Cerificate Partner</h3></Col>
                <Col className="spon-col"><img  className="spon-logos" src="https://yt3.ggpht.com/a/AATXAJzRRhdZXMpfWAxD0y8-eTEftyA7aNWw8U35tSJL=s900-c-k-c0x00ffffff-no-rj"/><h2>KIIT Kaksha</h2><h3>YouTube Partner</h3></Col>
                <Col></Col>
            </Row>

            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="grad-text">Interested in sponsoring us?</h1>
            <Button variant="light" size="xxl" className="m-2" style={{fontFamily: 'Poppins'}} href="https://forms.gle/Ca8Q4gAQM1xKQhAM6" target="__blank">
                Sponsor Us!
            </Button>
            </Container>               
        </div>
    )
}
