import React from 'react'
import '../Prizes/Prizes.css'
import { Container, Col, Row } from 'react-bootstrap'
import Rahee from '../../sponsor-logos/Raahee.png'
import sawo from '../../sponsor-logos/sawo.png'

export default function Prizes() {
    return (
        <div id="prizes">
        <Container className="py-5">
        <br></br>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="prizes-text text-right grad-text">Prizes</h1>
            <Row>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                <div class="flip-card-prize">
                    <div class="flip-card-inner-prize">
                            <div class="flip-card-front-prize">
                                <h1 className="mainhead1-prize">Daedalus' Reward</h1>
                            </div>
                            <div class="flip-card-back-prize">
                            <h4>Create Technology to help create awareness and ultimately help in the inclusion of the less identified minor communities like LGBTQIA+, WIT, etc., establishing a sense of belonging among people coming from different walks of life.</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                    <div class="flip-card-prize">
                        <div class="flip-card-inner-prize">
                            <div class="flip-card-front-prize">
                            <h1 className="mainhead1-prize">Icarus' Reward (10)</h1>
                            </div>
                            <div class="flip-card-back-prize">
                            <h4>Technology isn’t restrictive, and neither are we. Even if you have an idea that does not fit in our primary themes, you’re welcome to portray any idea that creates a good social impact on society in any manner.</h4>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                    <div class="flip-card-prize">
                        <div class="flip-card-inner-prize">
                            <div class="flip-card-front-prize">
                            <Row className="mainhead2-prize">
                                <Col>
                                <h1 style={{fontSize: '4rem'}}>Built For SAWO</h1>
                                </Col>
                                <Col>
                                <h3 style={{textAlign: 'center'}}>sponsored by</h3>
                                <img src={sawo} style={{width: '12vmax', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                </Col>
                            </Row>
                            </div>
                            <div class="flip-card-back-prize">
                            <h4>Amidst the world in a pandemic, the healthcare systems of every country have been overburdened. With several avenues open for exploration and research, come up and dominate the world with ideas to boost the healthcare sector’s productivity. Give new insights to improve the overall quality of care provided. </h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                    <div class="flip-card-prize">
                        <div class="flip-card-inner-prize">
                            <div class="flip-card-front-prize">
                            <Row className="mainhead2-prize">
                                <Col>
                                <h1 style={{fontSize: '4rem'}}>Built For Raahee</h1>
                                </Col>
                                <Col>
                                <h3 style={{textAlign: 'center'}}>sponsored by</h3>
                                <img src={Rahee} style={{width: '12vmax', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                </Col>
                            </Row>
                            </div>
                            <div class="flip-card-back-prize">
                            <h4>To revolutionize the way technology is being molded, as it has great effects on the world’s effort of a greener and richer environment. Bring your innovative minds to work towards a greener future and a sustainable environment.</h4>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>        
        </Container>
        </div>
        
    )
}
