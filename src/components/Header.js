import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Navbar.Brand href="/">Inventory Tool</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className="active">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
