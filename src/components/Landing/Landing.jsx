import React from 'react'
import '../Landing/Landing.css'
import { Button } from 'react-bootstrap'
import discord from '../../images/discord.png'

export default function Landing() {
    return (
        <div className="landing" id="home">
              <style type="text/css">
                    {`
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>

            <h3 className="topline" style={{fontFamily: 'Poppins'}}>Your search for a thrilling Hackathon ends here!</h3>
            <h1 className="mainhead">Daedarus' Hack</h1>
            <span className="date" style={{fontFamily: 'Poppins'}}>13th - 15th August, 2021</span>

            <div className="my-5">
                <Button variant="outline-light" size="xxl" className="m-2" style={{fontFamily: 'Poppins'}}>
                Register Now!
                </Button>{' '}
                <Button variant="outline-light" size="xxl" className="m-2">
                <img src={discord} style={{maxHeight: '30px'}}/>
                </Button>
            </div>
        </div>
    )
}
