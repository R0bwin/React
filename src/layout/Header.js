import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import ActiveLink from './Activelink';

function Header() {
    console.log(window.location.href);
    return (
        <header id="header">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Rob</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink></Nav.Item>
                        <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink></Nav.Item>
                        <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to="/contact">Contact</NavLink></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
  
export default Header