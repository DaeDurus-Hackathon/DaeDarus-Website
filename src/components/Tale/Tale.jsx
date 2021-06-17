import React from 'react'
import '../Tale/Tale.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Tale() {
    return (
        <div className="tale">

            <h1>DaeDalus' Tale</h1>
            <Container className="pt-5">
            <Row>
                <Col>
                    <img className="daed-img" src="https://www.worldhistory.org/img/r/p/500x600/5052.jpg?v=1610998538" />
                </Col>
                <Col>
                    <h3 className="text-left">
                        
                    Daedalus was a skillful architect and craftsman from the Greek mythology, regarded as a man of wisdom and knowledge. Amongst his most popular creations was the Labyrinth which was used as a means to imprison the Minotaur. Daedalus is the amalgamation of Daedalus and Icarus (his son). 
                        
                    With Daedarus’s Hack, create your own labyrinth of ideas, and use it to trap your desired project and help promote sustainable development for the greater good. 
                    
                    </h3>
                </Col>
            </Row>
            </Container> 
        </div>
    )
}