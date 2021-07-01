import React from 'react'
import '../Landing/Landing.css'
import { Button } from 'react-bootstrap'
// import discord from '../../images/discord2.png'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import { Link } from 'react-router-dom'
// import Particles from 'react-particles-js';
// import particlesConfig from '../../config/particle-config';

export default function Landing() {
    return (
        
        <div className="landing" id="home">
            <ParticleBackground />
              <style type="text/css">
                    {`
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
            <h3 data-aos="fade-up" data-aos-duration="1000" className="topline" style={{fontFamily: 'Poppins'}}>Your search for a thrilling Hackathon ends here!</h3>
            <h1 data-aos="fade-up" data-aos-duration="1000" className="mainhead">DaeDarus' Hack</h1>
            <h3 data-aos="fade-up" data-aos-duration="1000" className="date" style={{fontFamily: 'Poppins'}}>13th - 15th August, 2021</h3>

            <div className="my-5">
                <Link to="/register">
                <Button data-aos="fade-right" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}}>
                Register Now!
                </Button>{' '}
                </Link>
                <Button data-aos="fade-left" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}} href="https://discord.gg/NUeM8VrNpS" target="__blank"   >
                <img src="https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png" style={{maxHeight: '30px'}} alt={"discord img"}/>{' '}Discord
                </Button>
            </div>
            
        </div>
        
    )
}
