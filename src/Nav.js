import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


export function NavBar(props) {
    return (
        <>
            <Navbar variant="light" expand="lg">
                <Navbar.Brand className="title" href="/">Kriti Vajjhula</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link as={Link} to='/QuestionTemplate'>Quiz</Nav.Link>
                        <Nav.Link as={Link} to='/Calendar'>Calendar</Nav.Link>
                        <Nav.Link as={Link} to='/Explore'>Explore</Nav.Link>
                        <Nav.Link as={Link} to='/About'>About</Nav.Link> */}
                        <Nav.Link>Projects</Nav.Link>
                        <Nav.Link>CV</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </>
    )
}

