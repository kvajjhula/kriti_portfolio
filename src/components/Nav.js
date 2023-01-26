import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


export function NavBar(props) {
    return (
        <>
            <Navbar variant="light" expand="lg">
                <Navbar.Brand className="title" href="/">Kriti Vajjhula</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-right-container ms-auto">
                        <Nav.Link as={Link} to='/Projects' >Projects</Nav.Link>
                        {/* <Nav.Link>CV</Nav.Link>
                        <Nav.Link>Contact</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </>
    )
}

