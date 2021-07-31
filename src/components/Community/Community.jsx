import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import '../Community/community.css'
import CFCLogo_Dark from '../../community-partner-logos/CFCLogo_Dark.png'
import techsahead from '../../community-partner-logos/techsahead.png'
import hcvit from '../../community-partner-logos/hcvit.png'
import hnitr from '../../community-partner-logos/hnitr.png'

export default function Community() {
    return (
        <div id="cp">
        <Container className="py-5 cp" style={{fontFamily: 'Poppins'}}>
        <br></br>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="grad-header text-right grad-text">Community Partners</h1>
            
            <Row className="my-5">
                <Col><img id="comlogo" className="com-logo" src={CFCLogo_Dark}/><h4>Code for Cause</h4></Col>
                <Col><img id="comlogo" className="com-logo" src="https://yt3.ggpht.com/a/AATXAJzRRhdZXMpfWAxD0y8-eTEftyA7aNWw8U35tSJL=s900-c-k-c0x00ffffff-no-rj"/><h4>KIIT Kaksha</h4><h5>YouTube Partner</h5></Col>
                <Col><img id="comlogo" className="com-logo" src={techsahead}/><h4>Techsahead</h4></Col>
                {/* <Col><img id="comlogo" className="com-logo" src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/><h4>KIIT Kaksha</h4></Col> */}
            </Row>
            <Row className="my-5">
                <Col><img id="comlogo" className="com-logo" src={hcvit}/><h4>Hackclub VIT B</h4></Col>
                <Col><img id="comlogo" className="com-logo" src={hnitr}/><h4>Hack NIT R</h4></Col>
            </Row>
            {/* <Row className="my-5">
                <Col><img id="comlogo" className="com-logo" src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/><h4>KIIT Kaksha</h4></Col>
                <Col><img id="comlogo" className="com-logo" src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/><h4>KIIT Kaksha</h4></Col>
                <Col><img id="comlogo" className="com-logo" src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/><h4>KIIT Kaksha</h4></Col>
                <Col><img id="comlogo" className="com-logo" src="https://media-exp3.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s"/><h4>KIIT Kaksha</h4></Col>
            </Row> */}
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="grad-text">Interested in being a Community Partner?</h1>
            <Button variant="light" size="xxl" className="m-2" style={{fontFamily: 'Poppins'}} href="https://forms.gle/Y22opUKLgDdk4shc7" target="__blank">
                Contact Us
            </Button>
            </Container>               
        </div>
    )
}
