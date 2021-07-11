import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

import '../JM/JM.css'

import Aanchal from '../../jm-pictures/Judges/Aanchal Mishra.jpg'
import Bhargav from '../../jm-pictures/Judges/Bharjav Joshi.jpg'
import Sarah from '../../jm-pictures/Judges/Sarah Williams.jpg'
import Ronak from '../../jm-pictures/Judges/Ronak Sahuja.jpg'
import Jen from '../../jm-pictures/Judges/Jen Looper.jpg'


import Rishit from '../../jm-pictures/Judges/Rishit Dagil.jpg'
import Pratyush from '../../jm-pictures/Speakers/Pratyush Agrawal.jpg'

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
                <Col><img class="speak-logos" src={Ronak}/><h2>Ronak Sahuja</h2><SocialIcon url="https://www.linkedin.com/in/ronaksakhuja/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={Jen}/><h2>Jen Looper</h2><SocialIcon url="https://www.linkedin.com/in/jen-looper-3442413/" target="_blank"/></Col>
            </Row>


            <h1 data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" ><span className="text-partner">Mentors</span></h1>
            <Row className="my-5">
                <Col><img class="speak-logos" src={Rishit}/><h2>Rishit Dagli</h2><SocialIcon url="https://www.linkedin.com/in/mishra-aanchal/" target="_blank"/></Col>
                <Col><img class="speak-logos" src={Pratyush}/><h2>Pratyush Agarwal</h2><SocialIcon url="https://www.linkedin.com/in/bhargavjoshi55/" target="_blank"/></Col>
                <Col><img class="speak-logos" src="https://media-exp1.licdn.com/dms/image/C4E03AQG0mtRxvZyNSA/profile-displayphoto-shrink_400_400/0/1608149412407?e=1631750400&v=beta&t=AwgapwRfkLH81eFVjvqa8e0mokW4Y3xvoHn6cTfHk5k"/><h2>Rajatav Dutta</h2><SocialIcon url="https://www.linkedin.com/in/williams-k-sarah/" target="_blank"/></Col>
            </Row>

            </Container>  
        </div>
    )
}
