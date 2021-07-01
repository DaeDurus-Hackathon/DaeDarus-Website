import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CTA() {
    return (
        <div>
            <h1 className="grad-text" style={{fontSize: '4rem'}}>Be a part of the DaeDarus' Hacks today!</h1>
            <div className="my-5">
                <Link to="/register">
                <Button variant="outline-light" size="xxl" className="m-2" style={{fontFamily: 'poppins'}}>
                Register Now!
                </Button>{' '}
                </Link>
                
                <Button variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}} href="https://discord.gg/NUeM8VrNpS" target="__blank">
                <img src="https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png" style={{maxHeight: '30px'}} alt={"discord img"}/>{' '}Discord
                </Button>
            </div>
        </div>
    )
}
