import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, FormControl, Button, InputGroup } from 'react-bootstrap';
import CourseData from '../CourseData/CourseData';
import LearningProccess from '../LearningProccess/LearningProccess';

const Home = () => {

    // load data
    const [courses, setCourses] = useState([]);

    // Input state
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [searchText]);

    // Handle input field
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        const matchedCourses = courses.filter(course => course.name.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchText(matchedCourses);
    }
    // console.log(searchText);

    return (
        <>
            <Container className="my-5">
                <LearningProccess />
            </Container>

            <Container>
                <h3 className="text-center text-danger mt-5">These courses are available now!</h3>
                {/* Input field */}
                <div className=" d-flex justify-content-center">
                    <InputGroup className="mb-5 w-50">
                        <FormControl
                            onChange={handleSearch}
                            placeholder="Enter course name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="btn btn-info" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>
            </Container>

            <Container>
                <Row className="g-5">
                    {
                        courses?.map(course => <CourseData
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