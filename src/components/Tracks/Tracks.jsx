import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../Tracks/Tracks.css'

export default function Tracks() {
    return (
        <div>
            <h1 className="pt-5">Tracks</h1>
            <Container className="py-5">
            <Row>
                <Col sm className="pt-5">
                <div class="flip-card">
                    <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <h1 className="mainhead1">Track 1:</h1>
                            <h1 className="mainhead1">Diversity and Inclusion</h1>
                            </div>
                            <div class="flip-card-back">
                            <h4>Create Technology to help create awareness and ultimately help in the inclusion of the less identified minor communities like LGBTQIA+, WIT, etc., establishing a sense of belonging among people coming from different walks of life.</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm className="pt-5">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <h1 className="mainhead1">Track 2:</h1>
                            <h1 className="mainhead1">Open Innovation</h1>
                            </div>
                            <div class="flip-card-back">
                            <h4>Technology isn’t restrictive, and neither are we. Even if you have an idea that does not fit in our primary themes, you’re welcome to portray any idea that creates a good social impact on society in any manner.</h4>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm className="pt-5">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <h1 className="mainhead1">Track 3:</h1>
                            <h1 className="mainhead1">Health Care Tech</h1>
                            </div>
                            <div class="flip-card-back">
                            <h4>Amidst the world in a pandemic, the healthcare systems of every country have been overburdened. With several avenues open for exploration and research, come up and dominate the world with ideas to boost the healthcare sector’s productivity. Give new insights to improve the overall quality of care provided. </h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm className="pt-5">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <h1 className="mainhead1">Track 4:</h1>
                            <h1 className="mainhead1">Green Tech</h1>
                            </div>
                            <div class="flip-card-back">
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
