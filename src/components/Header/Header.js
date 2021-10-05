import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="mb-5">
            <Navbar bg="dark" expand="lg">
                <Container className="p-5">

                    <Navbar.Brand href="#home" className="text-white fs-1">Online Technology</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto ms-5">

                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="text-decoration-none ms-5 fs-4"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/courses"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="text-decoration-none ms-5 fs-4"
                            >
                                Courses
                            </NavLink>

                            <NavLink
                                to="/teachers"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="text-decoration-none ms-5 fs-4"
                            >
                                Teachers
                            </NavLink>

                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                className="text-decoration-none ms-5 fs-4"
                            >
                                About us
                            </NavLink>

                            <h4><i class="fas fa-shopping-cart text-warning ms-5"></i></h4>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;