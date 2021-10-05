import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const Teachers = () => {
    return (
        <Container>
            <h3 className="text-center my-5 text-warning">Our dedicated teachers are:</h3>
            <Row>
                <Col md={4}>
                    <Card className="h-100 bg-dark rounded">
                        <Card.Img className="rounded-circle" variant="top" src="https://cse.buet.ac.bd/faculty/photos/toufikuzzamanprofile.jpg" />
                        <Card.Body>
                            <Card.Title className="text-info">Kamruzzaman Khan</Card.Title>
                            <Card.Text className="text-white">
                                Teaching at Computer Science
                            </Card.Text>
                            <Button variant="outline-info" size="sm">Contact now! </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="h-100 bg-dark rounded">
                        <Card.Img className="rounded-circle" variant="top" src="http://vu.edu.bd/uploads/employee/profile/cse-molla-sirjpg.JPG" />
                        <Card.Body>
                            <Card.Title className="text-info">Rakib Khan</Card.Title>
                            <Card.Text className="text-white">
                                Teaching at Arttificial Intelligence
                            </Card.Text>
                            <Button variant="outline-info" size="sm">Contact now! </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="h-100 bg-dark rounded">
                        <Card.Img className="rounded-circle" variant="top" src="https://cse.pust.ac.bd/wp-content/uploads/2018/05/mmh.jpg" />
                        <Card.Body>
                            <Card.Title className="text-info">Rasel Khan</Card.Title>
                            <Card.Text className="text-white">
                                Teaching at Software Development
                            </Card.Text>
                            <Button variant="outline-info" size="sm">Contact now! </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Teachers;