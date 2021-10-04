import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseData from '../CourseData/CourseData';
import LearningProccess from '../LearningProccess/LearningProccess';

const Home = () => {

    // load data
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <>
            <Container className="my-5">
                <LearningProccess />
            </Container>

            <h3 className="text-center text-danger my-5">These courses are available now!</h3>
            <Container>
                <Row className="g-5">
                    {
                        courses.map(course => <CourseData
                            key={course.id}
                            course={course}
                        />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;