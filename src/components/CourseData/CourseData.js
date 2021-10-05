import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const CourseData = (props) => {
    // console.log(props.course);
    const { name, price, img, date, duration } = props.course;

    return (
        <Col md={4}>
            <Card className="h-100 bg-dark rounded">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-info"> {name} </Card.Title>
                    <Card.Text>
                            <p className="text-white fw-light" > {date} </p>
                            <p className="text-white fw-light" > {duration} </p>
                        <h2 className="text-warning">Price: ${price}</h2>
                    </Card.Text>
                    <Button variant="outline-info" size="sm">Buy now! </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseData;