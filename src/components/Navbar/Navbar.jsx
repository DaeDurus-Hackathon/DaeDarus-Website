import React from 'react'
import '../Navbar/navbar.css'

import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
                <img
                    src="https://avatars.githubusercontent.com/u/85678928?s=400&u=716bc6dcb0b5243293da4d6adb5584388b6fda71&v=4"
                    width="70"
                    height="70"
                    className="d-inline-block align-top md:ml-5"
                    alt="React Bootstrap logo"
                />{' '}
                </Navbar.Brand>

                <Navbar.Brand className="nav-name" href="#home">
                <span style={{fontSize: '36px', fontFamily: 'poppins'}}>DaeDarus' Hacks</span>
                </Navbar.Brand>
            <Navbar.Toggle className="toggler" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
                <Nav className="ml-auto" style={{fontFamily: 'Poppins'}}>
                <Nav.Link className="nav-toggles" href="#tracks">Tracks</Nav.Link>
                <Nav.Link className="nav-toggles" href="#sponsors">Sponsors</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link className="nav-toggles" href="#cp">Community Partners</Nav.Link>
                <Nav.Link className="nav-toggles" href="#organizers">Organizers</Nav.Link>
                <Nav.Link className="nav-toggles" href="#prizes">Prizes</Nav.Link>
                <Nav.Link className="nav-toggles" href="#faq">FAQs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>         
        </div>
    )
}
