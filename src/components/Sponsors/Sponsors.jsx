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
import symbl from '../../sponsor-logos/symbl.png'
import sawo from '../../sponsor-logos/sawo.png'
import koi from '../../sponsor-logos/koi.png'
import Wolfram from '../../sponsor-logos/Wolfram.png'
import balsamiq from '../../sponsor-logos/balsamiq.png'
import egghead from '../../sponsor-logos/eggheaad.jfif'
import techBairn from '../../sponsor-logos/TechBairn.jpeg'
import noticebard from '../../sponsor-logos/noticebard.jpeg'



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
            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-silver">Platinum Sponsors</span></h1>
            <Row className="my-5">
                
                <Col className="spon-col">
                    <a href="https://symbl.ai/" target="__blank" >
                    <img  className="spon-logos" src={symbl}/>
                    </a>
                </Col>
                
                
                <Col className="spon-col">
                    <a href="https://sawolabs.com/" target="__blank">
                    <img  className="spon-logos" src={sawo}/>
                    </a>
                    </Col>
                
                <Col className="spon-col">
                    <a href="https://koii.network/" target="__blank">
                    <img  className="spon-logos" src={koi}/>
                    </a>
                    </Col>
            </Row>
            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-bronze">Gold Sponsors</span></h1>
            <Row className="my-5 d-flex align-items-center">
                
                <Col className="spon-col">
                    <a href="https://www.taskade.com/" target="__blank">
                    <img  className="spon-logos" src={taskade}/>
                    </a>
                    </Col>
                
                <Col className="spon-col">
                    <a href="https://raahee.in/" target="__blank">
                    <img  className="spon-logos" src={Rahee}/>
                    </a>
                    </Col>
                
                <Col className="spon-col">
                    <a href="https://draftbit.com/" target="__blank">
                    <img  className="spon-logos" src={draftbit}/>
                    </a>
                    </Col>
                
                <Col className="spon-col">
                    <a href="https://cppsecrets.com/" target="__blank">
                    <img  className="spon-logos" src={cppsecrets}/>
                    </a>
                    </Col>
                
                <Col className="spon-col">
                    <a href="https://gen.xyz/" target="__blank">
                    <img  className="spon-logos" src={xyz}/>
                    </a>
                    </Col>
                
                <Col className="spon-col">
                    <a href="https://techbairn.com/" target="__blank">
                    <img  className="spon-logos" src={techBairn}/>
                    </a>
                    </Col>

                    <Col className="spon-col">
                    <a href="https://egghead.io/" target="__blank">
                    <img  className="spon-logos" src={egghead}/>
                    </a>
                    </Col>
            </Row>

            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-bronze-real">Bronze Sponsors</span></h1>
            <Row className="my-5 d-flex align-items-center">
                
                <Col className="spon-col">
                    <a href="https://www.codingninjas.com/" target="__blank">
                    <img width="350" className="spon-logos" src={cn}/>
                    </a>
                    </Col>

                    <Col className="spon-col">
                    <a href="https://www.wolfram.com/" target="__blank">
                    <img  className="spon-logos" src={Wolfram}/>
                    </a>
                    </Col>

                    <Col className="spon-col">
                    <a href="https://balsamiq.com/" target="__blank">
                    <img  className="spon-logos" src={balsamiq}/>
                    </a>
                    </Col>
            </Row>

            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-partner">Partners</span></h1>
            <Row className="my-5 d-flex align-items-center">
                
                <Col className="spon-col">
                    <a href="https://www.givemycertificate.com/" target="__blank">
                    <img  className="spon-logos" src={GMC}/><h2>Give My Certificate</h2><h3>Certificate Partner</h3>
                    </a>
                    </Col>
                
                <Col className="spon-col">
                    <a href="https://www.noticebard.com/" target="__blank">
                    <img  className="spon-logos" src={noticebard}/><h2>Noticebard</h2><h3>Media Partner</h3>
                    </a>
                    </Col>
            </Row>

            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="grad-text">Interested in sponsoring us?</h1>
            <Button variant="light" size="xxl" className="m-2" style={{fontFamily: 'Poppins'}} href="https://forms.gle/Ca8Q4gAQM1xKQhAM6" target="__blank">
                Sponsor Us!
            </Button>
            </Container>               
        </div>
    )
}
