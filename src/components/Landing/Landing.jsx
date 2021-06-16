import React from 'react'
import '../Landing/Landing.css'
import { Button } from 'react-bootstrap'

export default function Landing() {
    return (
        <div className="landing">
            <h3 className="topline">Your search for a thrilling Hackathon ends here!</h3>
            <h1 className="mainhead">DaeDarus' Hack</h1>
            <span className="date">13 - 15 August</span>

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
