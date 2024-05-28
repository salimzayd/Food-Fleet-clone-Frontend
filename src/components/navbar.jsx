import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NAVbar = () => {
 
  const name = localStorage.getItem('name')

  const navigate = useNavigate()

  useEffect(() =>{
    AOS.init()
  },[])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    // toast.success("removed user")
    navigate('/')
  }
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg" data-aos = "fade-up">
        <Container fluid>
          <Navbar.Brand>
            <h3><span style={{ color: "orange" }}>FOOD</span> <span style={{ color: "skyblue" }}>FLEET</span></h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
            <NavDropdown
              title={name ? <>{name}</> : <>Login</>}
              id='responsive-nav'
              >
                {!name && (
                  <NavDropdown.Item onClick={() => navigate('/login')}>
                  Login
                </NavDropdown.Item>
                )}
                {name && (
                  <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
                )}
                <NavDropdown.Item onClick={() => navigate(`/profile`)}>
                  user Profile
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to='/adminlogin'>
                <Nav.Link>
                  <MdAdminPanelSettings style={{ width: "30px", height: "30px" }} />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/" >
                <Nav.Link>HOME </Nav.Link>
              </LinkContainer>
               <LinkContainer to="/dishes" >
                <Nav.Link>DISHES</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" >
                <Nav.Link>ABOUT US </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" >
                <Nav.Link>CONTACT US </Nav.Link>
              </LinkContainer>
              
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NAVbar;
