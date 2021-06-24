import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Container, Col, Row } from 'react-bootstrap'
import '../FAQ/faq.css'

export default function FAQ() {
    return (
        <div className="faq" id="faq">
        <Container className="py-5">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="pt-5 grad-text">FAQ's</h1>

            <Accordion data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="mx-5 accordion">
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="0">
                1. What is a Hackathon?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body-acc">Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="1">
                2. What are the dates and timings for the event? 

                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="2">
                3. How can I register?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="3">
                4. What are the prizes to be awarded? 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="4">
                5. What is the registration cost? 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="5">
                6. What is the submission process of the projects?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="6">
                7. Who is this hackathon for? I just graduated, can I still participate?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="7">
                8. Is my data secure?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="8">
                9. How do hackathons help in skill development?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="9">
                10. What if I am unable to reproduce any ideas? Am I still eligible for evaluation?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>      
        </Container>      
        </div>
    )
}
