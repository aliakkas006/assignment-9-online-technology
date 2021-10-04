import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="mb-5">
            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Brand href="#home">Online Technology</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto ms-5">

                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="ms-5"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/courses"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="ms-5"
                            >
                                Courses
                            </NavLink>

                            <NavLink
                                to="/teachers"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="ms-5"
                            >
                                Teachers
                            </NavLink>

                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="ms-5"
                            >
                                About us
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;