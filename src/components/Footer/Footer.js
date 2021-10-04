import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className="bg-dark mt-5">
            <div className="d-flex">

                <Container className="p-5">
                    <h3 className="text-danger">Purchase the course, please Sign in:</h3>
                    <Form className="w-50">
                        <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>

                <Container className="p-5">
                    <h5 className="text-danger">Follow us on:</h5>
                    <div>
                        <h3>
                            <i className="fab fa-linkedin me-3 text-white"></i>
                            <i className="fab fa-github-square me-3 text-white"></i>
                            <i class="fab fa-twitter-square me-3 text-white"></i>
                            <i class="fab fa-instagram-square me-3 text-white"></i>
                            <i class="fab fa-facebook-square text-white"></i>
                        </h3>
                    </div>
                </Container>

            </div>
            <p className="text-white text-center p-3"><i class="far fa-copyright"></i> Copyright 2021</p>
        </section>
    );
};

export default Footer;