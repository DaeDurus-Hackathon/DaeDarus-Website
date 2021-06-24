import React from 'react'
import '../Landing/Landing.css'
import { Button } from 'react-bootstrap'
import discord from '../../images/discord2.png'

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

            <h3 data-aos="fade-up" data-aos-duration="2000" className="topline" style={{fontFamily: 'Poppins'}}>Your search for a thrilling Hackathon ends here!</h3>
            <h1 data-aos="fade-up" data-aos-duration="2000" className="mainhead">DaeDarus' Hack</h1>
            <h3 data-aos="fade-up" data-aos-duration="2000" className="date" style={{fontFamily: 'Poppins'}}>13th - 15th August, 2021</h3>

            <div className="my-5">
                <Button data-aos="fade-up" data-aos-duration="2000" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}}>
                Register Now!
                </Button>{' '}
                <Button data-aos="fade-up" data-aos-duration="2000" variant="outline-light" size="xxl" className="btn m-2">
                <img src={discord} style={{maxHeight: '30px'}} alt={"discord img"}/>{' '}Discord
                </Button>
            </div>
        </div>
    )
}
