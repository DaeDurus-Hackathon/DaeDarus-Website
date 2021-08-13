import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

import '../JM/JM.css'

import Aanchal from '../../jm-pictures/Judges/Aanchal Mishra.jpg'
import Bhargav from '../../jm-pictures/Judges/Bharjav Joshi.jpg'
import Sarah from '../../jm-pictures/Judges/Sarah Williams.jpg'
import Ronak from '../../jm-pictures/Judges/Ronak Sahuja.jpg'
import Jen from '../../jm-pictures/Judges/Jen Looper.jpg'
import anna from '../../jm-pictures/Judges/anna.jpeg'
import sndeep from '../../jm-pictures/Judges/sndeep.jpeg'


import Rishit from '../../jm-pictures/Judges/Rishit Dagil.jpg'
import Pratyush from '../../jm-pictures/Speakers/Pratyush Agrawal.jpg'
import AmanMittal from '../../jm-pictures/Judges/Aman Mittal.jpg'

export default function JM() {
    return (
        <div className="jm" id="jm">
        <Container className="py-5">
        <br></br>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="jm-text text-left grad-text">Judges and Mentors</h1>
            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-partner">Judges</span></h1>
            <Row className="my-5">
                <Col><img class="speak-logos" src={Aanchal}/><h2>Aanchal Mishra</h2><SocialIcon url="https://www.linkedin.com/in/mishra-aanchal/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={Bhargav}/><h2>Bhargav Joshi</h2><SocialIcon url="https://www.linkedin.com/in/bhargavjoshi55/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={Sarah}/><h2>Sarah Williams</h2><SocialIcon url="https://www.linkedin.com/in/williams-k-sarah/" target="_blank"/></Col>
            </Row>
            <Row className="my-5">
            <Col><img class="speak-logos" src={Jen}/><h2>Jen Looper</h2><SocialIcon url="https://www.linkedin.com/in/jen-looper-3442413/" target="_blank"/></Col>
            <Col><img class="speak-logos" src={AmanMittal}/><h2>Aman Mittal</h2><SocialIcon url="https://www.linkedin.com/in/aman-mittal-05a239117/" target="_blank"/></Col>
            <Col><img class="speak-logos" src={Rishit}/><h2>Rishit Dagli</h2><SocialIcon url="https://www.linkedin.com/in/rishit-dagli/" target="_blank"/></Col>
            
            </Row>

            <Row className="my-5">
            <Col><img class="speak-logos" src={Ronak}/><h2>Ronak Sakhuja</h2><SocialIcon url="https://www.linkedin.com/in/ronaksakhuja/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={anna}/><h2>Anna Godfrey</h2><SocialIcon url="https://www.linkedin.com/in/anna-godfrey-7b79485a/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={sndeep}/><h2>Sandeep Singh</h2><SocialIcon url="https://www.linkedin.com/in/sandybcsald/" target="_blank"/></Col>
            </Row>


            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-partner">Mentors</span></h1>
            <Row className="my-5">
                <Col><img class="speak-logos" src={Pratyush}/><h2>Pratyush Agarwal</h2><SocialIcon url="https://www.linkedin.com/in/pratsy/" target="_blank"/></Col>
                <Col><img class="speak-logos" src="https://media-exp1.licdn.com/dms/image/C4E03AQH5x3tg4T3yNQ/profile-displayphoto-shrink_800_800/0/1627162318765?e=1634169600&v=beta&t=vtlglY1a1aqTnm28OIe7aw5LD-WLcy5AjJdOzdWAA0Q"/><h2>Rajatav Dutta</h2><SocialIcon url="https://www.linkedin.com/in/rajatavdutta/" target="_blank"/></Col>
            </Row>

            </Container>  
        </div>
    )
}
