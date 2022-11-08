import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <div>
      <Navbar collapseOnSelect
        className="mb-4"
        expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tanni's World
          </Navbar.Brand>
          <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/'>Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/blogs'>Blogs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Nav.Item>
        
      </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;