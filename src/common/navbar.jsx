import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";

const NAVbar = () => {
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <h3><span style={{ color: "orange" }}>FOOD</span> <span style={{ color: "skyblue" }}>FLEET</span></h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <MdAdminPanelSettings style={{ width: "30px", height: "30px" }} />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/" >
                <Nav.Link>HOME </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" >
                <Nav.Link>ABOUT US </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" >
                <Nav.Link>CONTACT US </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/dishes" >
                <Nav.Link>DISHES</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NAVbar;
