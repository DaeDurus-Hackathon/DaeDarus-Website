import React from 'react'
import '../Landing/Landing.css'
import { Button } from 'react-bootstrap'
import discord from '../../images/discord2.png'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
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

            <div className="my-4">
                <Button data-aos="fade-right" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}} href="https://daedarus-hack.devpost.com/" target="__blank" disabled>
                Registrations Closed
                </Button>{' '}
                <Button data-aos="fade-left" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}} href="https://discord.gg/5MfkFAsEeS" target="__blank"   >
                <img src={discord} style={{maxHeight: '30px'}} alt={"discord img"}/>{' '}Discord
                </Button>
                <div>
                <Button data-aos="fade-left" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}} href="https://www.youtube.com/watch?v=tSpXTc4ig6M" target="__blank"   >
                <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" style={{maxHeight: '30px'}} alt={"discord img"}/>{' '}Live Now
                </Button>
                </div>
            </div>
            {/* <div>
            <Button className="btn m-2" variant="outline-light" data-aos-duration="500" size="xxl" style={{fontFamily: 'Poppins', fontSize: '24px'}} href="https://www.youtube.com/watch?v=Y94pYiJjP5c" target="__blank">
            <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" style={{maxHeight: '30px'}} alt={"yt img"}/>{' '}Live Now
            </Button>
            </div>
             */}
        </div>
        
    )
}
// https://www.youtube.com/watch?v=Y94pYiJjP5c
