import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';



const NAVbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h3 style={{color:"white"}}>FOOD FLEET</h3>
            <Nav className='ms-auto'>
                <LinkContainer to="/" activeClassName>
                    <Nav.Link>HOME |</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about" activeClassName>
                    <Nav.Link>About Us |</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact" activeClassName>
                    <Nav.Link>Contact us |</Nav.Link>
                </LinkContainer>
                
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NAVbar