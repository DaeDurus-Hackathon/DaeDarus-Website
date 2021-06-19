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
                <Button variant="outline-primary" size="lg">
                Register Now!
                </Button>{' '}
                <Button variant="outline-light" size="lg">
                <img src="https://discord.com/assets/ff41b628a47ef3141164bfedb04fb220.png" style={{maxHeight: '30px'}}/>
                </Button>
            </div>
        </div>
    )
}
