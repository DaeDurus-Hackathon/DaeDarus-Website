import React from 'react'
import { Button } from 'react-bootstrap'

export default function CTA() {
    return (
        <div>
            <h1>Be a part of the DaeDarus' Hacks today!</h1>
            <div className="my-5">
                <Button variant="primary" size="lg">
                Large button
                </Button>{' '}
                <Button variant="secondary" size="lg">
                Large button
                </Button>
            </div>
        </div>
    )
}
