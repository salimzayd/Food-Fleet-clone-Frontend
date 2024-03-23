import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import { BiSolidOffer } from "react-icons/bi";


const NAVbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6 className='text-light'> 
            <BiSolidOffer  className='text-warning'/> &nbsp;&nbsp; Free Home Delivery on order above 1000/- rupees</h6>
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