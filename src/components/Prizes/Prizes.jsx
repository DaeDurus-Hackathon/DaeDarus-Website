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
                            <h4>
                                <ul>
                                    <li>Internship Opportunity at CPPSecrets</li>
                                    <li>Swags!</li>
                                    <li>ShoutOut</li>
                                    <li>Project Showcase!</li>
                                </ul>
                            </h4>
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
                            <h4>Top 10 Teams get to Intern at CPPSecrets (all team members inclusive!)</h4>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                    <div class="flip-card-prize">
                        <div class="flip-card-inner-prize">
                        <div class="flip-card-front-sawo">
                            <h1 className="mainhead1-prize sawo">Built for SAWO</h1>
                            </div>
                            <div class="flip-card-back-prize">
                            <h4>Use the SAWO Labs API as part of their project to be eligible for a reward like $100 Prize to winning team, 1-month free Inaugurate Tier access Feature in the Blogs & Articles. Social media shout Discord/Slack as well as SAWO funds 100% of the Playstore.</h4>
                            <img  src={sawo} style={{width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                    <div class="flip-card-prize">
                        <div class="flip-card-inner-prize">
                            <div class="flip-card-front-raahee">
                            <h1 className="mainhead1-prize">Built for RAAHEE</h1>
                            </div>
                            <div class="flip-card-back-prize">
                            <h4>Best team project in Mental Health Category gets internship opportunity from RAHEE.</h4>
                            <img  src={Rahee} style={{width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: '2rem'}}/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>        
        </Container>
        </div>
        
    )
}
