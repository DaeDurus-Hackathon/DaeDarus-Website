import React from 'react'
import { Button } from 'react-bootstrap'

export default function CTA() {
    return (
        <div>
            <h1 className="grad-text">Be a part of the DaeDarus' Hacks today!</h1>
            <div className="my-5">
                <Button variant="primary" size="xxl" className="mx-2">
                Register Now!
                </Button>{' '}
                <Button variant="light" size="xxl" className="mx-2">
                <img src="https://discord.com/assets/ff41b628a47ef3141164bfedb04fb220.png" style={{maxHeight: '35px'}}/>
                </Button>
            </div>
        </div>
    )
}
