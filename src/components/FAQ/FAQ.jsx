import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default function FAQ() {
    return (
        <div>
            <h1>FAQ's</h1>

            <Accordion className="mx-5">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>            
        </div>
    )
}
