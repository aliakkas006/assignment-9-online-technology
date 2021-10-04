import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {

    // Course details
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect(() => {
        fetch('/servicesDetails.json')
            .then(res => res.json())
            .then(data => setCourseDetails(data));
    }, []);

    return (
        <Container>
            <Row className="g-5">
                {
                    courseDetails.map(course => <CourseDetails
                        key={course.id}
                        course={course}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Courses;