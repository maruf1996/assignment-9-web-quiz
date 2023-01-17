import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='shadow-sm px-3 border-bottom-1 bg'>
          <Container fluid> 
          <Navbar.Brand>
              <Link className='heading fw-bold text-dark'>Web Quiz</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="nav my-2 my-lg-0 ms-auto">
                <Link to="/">Home</Link>
                <Link to="/topic">Topic</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default Header;