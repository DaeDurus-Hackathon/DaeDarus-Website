import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Container, Col, Row, Button } from 'react-bootstrap'
import '../FAQ/faq.css'

export default function FAQ() {
    return (
        <div className="faq" id="faq">
        <Container className="py-5">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="faq-text text-left pt-5 grad-text">FAQ's</h1>

            <Accordion data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="mx-2 accordion">
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="0">
                <div className="d-flex justify-content-between">
                <div>
                1. What is a Hackathon?
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body-acc">A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program. The word hackathon is a portmanteau of the words hacker, which means clever programmer, and marathon, an event marked by endurance.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="1">
                <div className="d-flex justify-content-between">
                <div>
                2. What are the dates and timings for the event? 
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body className="card-body-acc">The event will be held in the course of three days from 13th of August (9:00p.m) to 15th of August (12:00p.m) ,2021.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="2">
                <div className="d-flex justify-content-between">
                <div>
                3. How can I register?
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body className="card-body-acc">The registrations for the event will be held on Devpost.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="3">
                <div className="d-flex justify-content-between">
                <div>
                4. What are the prizes to be awarded? 
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body-acc">To be disclosed soon. Keep checking the website for detailed information.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="4">
                <div className="d-flex justify-content-between">
                <div>
                5. What is the registration cost? 
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <Card.Body className="card-body-acc">Zero. Zilch. Nada. Nothing. Registration for this hackathon is completely free.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="5">
                <div className="d-flex justify-content-between">
                <div>
                6. What is the submission process of the projects?
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                <Card.Body className="card-body-acc">All the submissions are to be made on the same platform where you registered, that is to say, all submissions shall be made to Devpost. To be eligible for judging, you have to make the submission before the event ends.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="6">
                <div className="d-flex justify-content-between">
                <div>
                7. Who is this hackathon for? I just graduated, can I still participate?
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                <Card.Body className="card-body-acc">This hackathon is for all the enthusiastic people out there. You can participate even if you have graduated or are still in school, provided you are aged 18 years or above.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="7">
                <div className="d-flex justify-content-between">
                <div>
                8. How big can a team be?
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                <Card.Body className="card-body-acc">The team size can vary from 2-3 people. However, the maximum number of participants in a team should not exceed 3 people. An advice, most teams prefer to have a variety of both design and development skills.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="8">
                <div className="d-flex justify-content-between">
                <div>
                9. How do hackathons help in skill development?
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                <Card.Body className="card-body-acc">Hackathons are a great way to analyze problem solving skills in a limited amount of time. It creates a requirement to think fast, work smartly and focus on key elements. It is the best platform to meet like-minded people, learn diverse tech skills, and enhance soft skills. Participants can learn new technology or tools while polishing up their communication, presentation, collaborative, and team-player skills that will increase the authentication of resumes.</Card.Body>
                </Accordion.Collapse>
            </Card>
            {/* <Card className="card-acc">
                <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="9">
                <div className="d-flex justify-content-between">
                <div>
                10. What if I am unable to reproduce any ideas? Am I still eligible for evaluation?
                </div>
                <span>+</span>
                </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                <Card.Body className="card-body-acc">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card> */}
            </Accordion>      
        </Container>      

        <div id="cp">
        <Container className="py-5 cp" style={{fontFamily: 'Poppins'}}>
        <br></br>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="org-header text-right grad-text">Organizers</h1>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="grad-text tba">Meet the amazing team behind DaeDarus' Hack !</h1>
            <Button variant="light" size="xxl" className="m-2" style={{fontFamily: 'Poppins'}} href="/organizers">
                Meet the Team
            </Button>
            </Container>               
        </div>
        </div>
    )
}
