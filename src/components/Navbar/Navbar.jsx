import React from 'react'
import '../Navbar/navbar.css'
import daedarus from '../../images/daedarus.png'

import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark" fixed="top">
            <Navbar.Brand href="/">
                <img
                    src={daedarus}
                    width="70"
                    height="70"
                    className="d-inline-block align-top md:ml-5"
                    alt="DaeDarus logo"
                />{' '}
                </Navbar.Brand>

                <Navbar.Brand className="nav-name" href="/">
                <span style={{fontSize: '36px', fontFamily: 'poppins'}} className="grad-text">DaeDarus' Hack</span>
                </Navbar.Brand>
            <Navbar.Toggle className="toggler" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
                <Nav className="ml-auto" style={{fontFamily: 'Poppins'}}>
                <Nav.Link className="nav-toggles" href="/#tracks">Tracks</Nav.Link>
                <Nav.Link className="nav-toggles" href="/#sponsors">Sponsors</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link className="nav-toggles" href="/#cp">Community Partners</Nav.Link>
                <Nav.Link className="nav-toggles" href="/#speakers">Speakers</Nav.Link>
                <Nav.Link className="nav-toggles" href="/organizers">Organizers</Nav.Link>
                <Nav.Link className="nav-toggles" href="/#prizes">Prizes</Nav.Link>
                <Nav.Link className="nav-toggles" href="/#faq">FAQs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>         
        </div>
    )
}
