import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Ready/ready.css'
import daedarus from '../../images/daedarus.png'

export default function Ready() {
    return (
        <div className="ready">
            <Container>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="header text-left pt-5 grad-text">We are Ready!</h1>
            <Row>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm={8} className="py-5 text-left">
                    <h3 className="text-right para" id="ready">With the preparations going on for months, this home-stitched Hackathon, organized in collaboration with Microsoft Student Community KIIT CHAPTER, is a fun Hackathon that is aimed at including everyone from the community and promoting sustainable development. Whether you are a newbie or a hackathon veteran, your experience shouldn’t stop you from learning. Aimed at creating awareness towards diversity and inclusion, who knows your idea might be the next big thing in the world?</h3>
                </Col>

                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm={4} className="py-5">
                    <img className="imaze" src={daedarus}/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
