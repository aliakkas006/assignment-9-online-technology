import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleEmployee = () => {

    // show details in UI
    let { id } = useParams();
    // console.log(id);
    // Load data from json
    const [employeeDetails, setEmployeeDetails] = useState([]);

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch('/employeeDetails.json')
            .then(res => res.json())
            .then(data => setEmployeeDetails(data.employee));
    }, []);

    // Find specific data and add dependency
    useEffect(() => {
        const foundEmployee = employeeDetails.find(employee => employee.login.id === id);
        setEmployee(foundEmployee);
    }, [employeeDetails]);

    return (
        <div>
            <Container>
                <Row>

                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={employee?.picture?.thumbnail} />
                        </Card>
                    </Col>

                    <Col md={5}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{employee?.name}</Card.Title>
                                <Card.Text>
                                    <b>Email: {employee?.email} </b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default SingleEmployee;