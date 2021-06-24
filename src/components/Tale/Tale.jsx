import React from 'react'
import '../Tale/Tale.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Tale() {
    return (
        <div className="tale">

            <h1 className="grad-text">DaeDalus' Tale</h1>
            <Container className="pt-5">
            <Row>
                <Col data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                    <img className="daed-img" src="https://www.worldhistory.org/img/r/p/500x600/5052.jpg?v=1610998538" alt="daed-img" />
                </Col>
                <Col data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                    <h3 className="text-center para" id="tale">
                    Daedalus was a skillful architect and craftsman from the Greek mythology, regarded as a man of wisdom and knowledge. Amongst his most popular creations was the Labyrinth which was used as a means to imprison the Minotaur. Daedarus is the amalgamation of Daedalus and Icarus (his son). 
                    <br/><br/>
                    With Daedarus’ Hack, create your own labyrinth of ideas, and use it to trap your desired project and help promote sustainable development for the greater good. 
                    
                    </h3>
                </Col>
            </Row>
            </Container> 
        </div>
    )
}
