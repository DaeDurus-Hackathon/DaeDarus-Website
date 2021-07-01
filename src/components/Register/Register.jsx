
import React from 'react'
import '../Register/Register.css'
// import { Button } from 'react-bootstrap'
// import discord from '../../images/discord2.png'
import FooterBackground from '../FooterBackground/FooterBackground'
// import ParticleBackground from '../ParticleBackground/ParticleBackground'
// import Particles from 'react-particles-js';
// import particlesConfig from '../../config/particle-config';

export default function Register() {
    return (
        
        <div className="register" id="home">
            <FooterBackground />
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
            <h1 className="register-title" >Registrations Will Open Soon!</h1>

            
        </div>
        
    )
}
