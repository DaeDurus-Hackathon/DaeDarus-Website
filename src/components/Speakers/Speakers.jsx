import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

import '../Speakers/Speakers.css'

import arkodyuti from '../../speakers-photos/Arkodyuti.jpg'
import ashish from '../../speakers-photos/ashish.png'
import logan from '../../speakers-photos/Logan Kilpatrick.jpg'
import caroline from '../../speakers-photos/caroline.jpeg'
import abhishek from '../../speakers-photos/Abhishek Kumar.jpg'
import prithvi from '../../speakers-photos/prithvi.jpeg'
import praveen from '../../speakers-photos/Praveen Kumar.jpg'
import shashank from '../../speakers-photos/Shashank Shekhar.jfif'


export default function Speakers() {
    return (
        <div className="speakers" id="speakers">
        <Container className="py-5">
        <br></br>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="speak-text text-left grad-text">Speakers</h1>
            <Row className="my-5">
                <Col><img class="speak-logos" src={arkodyuti}/><h2>Arkodyuti Saha</h2><h5>Developer Relations (Edu) at GitHub India</h5><SocialIcon url="https://www.linkedin.com/in/arkodyutisaha/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={ashish}/><h2>Aashish Barnwal</h2><h5>SDE II at Amazon Vancouver, Canada</h5><SocialIcon url="https://www.linkedin.com/in/aashishbarnwal/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={logan}/><h2>Logan Kilpatrick</h2><h5>Applied Machine Learning Engineer at Apple US</h5><SocialIcon url="https://www.linkedin.com/in/logankilpatrick/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={caroline}/><h2>Caroline McGuinness</h2><h5>Founder of Empowering Leading Women, Australia</h5><SocialIcon url="https://www.linkedin.com/in/caroline-mc-guinness/" target="_blank"/></Col>
            </Row>
            <Row className="my-5">
                <Col><img class="speak-logos" src={abhishek}/><h2>Abhishek Kumar</h2><h5>Google Summer Of Code Mentor at Jboss</h5><SocialIcon url="https://www.linkedin.com/in/abhishek-kr09/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={prithvi}/><h2>Prithvi Raj</h2><h3></h3><h5>Open Source Community Manager at ChaosNative</h5><SocialIcon url="https://www.linkedin.com/in/prithvi1307/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={shashank}/><h2>Shashank Shekhar</h2><h5>Associate Data Scientist at Celebal Technologies</h5><SocialIcon url="https://www.linkedin.com/in/shashank2806/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={praveen}/><h2>Praveen K. Purushothaman</h2><h5>Lead Consultant - Technology at Virtusa, UK</h5><SocialIcon url="https://www.linkedin.com/in/praveentech/" target="_blank"/></Col>
            </Row>

        {/* <h2 className="text-center grad-text tba">To be announced soon!</h2> */}

            </Container>  
        </div>
    )
}
