import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import 'styles/header.scss';

function Header() {
    return (
        <header id="header">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink></Nav.Item>

                        <NavDropdown title="Games" className="basic-nav-dropdown">
                            <NavLink className="nav-link" to="/games/tictactoe">Tictactoe</NavLink>
                            <NavLink className="nav-link" to="/games/sudoku">Sudoku</NavLink>
                        </NavDropdown>

                        <NavDropdown title="Algorithm" className="basic-nav-dropdown">
                            <NavLink className="nav-link" to="/algorithm/search">Search</NavLink>
                            <NavLink className="nav-link" to="/algorithm/sort">Sort</NavLink>
                        </NavDropdown>
                        
                        <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to="/weather">Weather</NavLink></Nav.Item>
                    </Nav>
                    <Nav className="ml-auto">
                    {/*
                        <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink></Nav.Item>
                    */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
  
export default Header