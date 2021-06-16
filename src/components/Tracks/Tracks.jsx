import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export default function Tracks() {
    return (
        <div>
            <h1>Tracks</h1>
            <Container className="py-5">
            <Row>
                <Col><img src="https://images.shiksha.com/mediadata/images/1572328331phpf7HGDW.png"/></Col>
                <Col><img src="https://images.shiksha.com/mediadata/images/1572328331phpf7HGDW.png"/></Col>
            </Row>
            <Row>
                <Col><img src="https://images.shiksha.com/mediadata/images/1572328331phpf7HGDW.png"/></Col>
                <Col><img src="https://images.shiksha.com/mediadata/images/1572328331phpf7HGDW.png"/></Col>
            </Row>
            </Container>            
        </div>
    )
}
