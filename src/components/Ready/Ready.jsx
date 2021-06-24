import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Ready/ready.css'

export default function Ready() {
    return (
        <div className="ready">
            <h1 className="pt-5 grad-text">We are Ready!</h1>
            <Container>
            <Row>
                <Col data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm={8} className="py-5 text-left">
                    <h3 className="text-center para" id="ready">With the preparations going on for months, this home-stitched Hackathon, organized in collaboration with MSA & MSAC from KIIT University, is a fun Hackathon that is aimed at including everyone from the community and to promote sustainable development. Whether you are a newbie or a hackathon veteran, your experience shouldn’t stop you from learning. Aimed at creating awareness towards diversity and inclusion, who knows your idea might be the next big thing in the world?</h3>
                </Col>

                <Col data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm={4} className="py-5">
                    <img className="imaze" src="https://avatars.githubusercontent.com/u/85678928?s=400&u=716bc6dcb0b5243293da4d6adb5584388b6fda71&v=4" />
                </Col>
            </Row>
            </Container>
        </div>
    )
}
