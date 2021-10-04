import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CourseDetails = (props) => {
    const { name, price, img, date, duration } = props.course;

    return (
        <Col md={4}>
            <Card className="h-100 bg-dark">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-info"> {name} </Card.Title>
                    <Card.Text>
                        <p className="fw-light text-white"> {date} </p>
                        <p className="fw-light text-white"> {duration} </p>
                        <h2 className="text-warning">Price: ${price}</h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseDetails;