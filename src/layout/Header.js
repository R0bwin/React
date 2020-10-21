import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import '../styles/header.scss';

class Header extends Component {

    constructor() {
        super();
    }

    componentDidMount() {}

    render() {
        return (
            <header id="header">
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to={this.props.rootPath}>Home</NavLink></Nav.Item>

                                <NavDropdown title="Games" className="basic-nav-dropdown">
                                    <NavLink className="nav-link" to={this.props.rootPath + "/games/tictactoe"}>Tictactoe</NavLink>
                                    <NavLink className="nav-link" to={this.props.rootPath + "/games/sudoku"}>Sudoku</NavLink>
                                </NavDropdown>
                                
                                <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to={this.props.rootPath + "/weather"}>Weather</NavLink></Nav.Item>
                            </Nav>
                            <Nav className="ml-auto">
                            {/*
                                <Nav.Item><NavLink exact activeClassName="active" className="nav-link" to={this.props.rootPath + "/about"}>About</NavLink></Nav.Item>
                            */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </header>
        )
    }
}
  
export default Header;