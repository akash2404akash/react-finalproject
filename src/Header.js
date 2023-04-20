import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap';
import {Outlet} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar variant="dark" fixed="top" style={{backgroundColor:"blues"}}>
        <Container>
          <Navbar.Brand href="#home"><h1>Quote Generator</h1></Navbar.Brand>
          <Nav>
            <LinkContainer to="/Home">
              <Nav.Link><h2>Home</h2></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link><h2>About</h2></Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default Header