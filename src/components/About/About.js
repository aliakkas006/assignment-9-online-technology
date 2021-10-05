import React from 'react';
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div className="text-center">
            <h2 className="mb-5">About us:</h2>
            <h4>Online Technology</h4>
            <p>This is online based education system</p>
            <p>Since 2009</p>
            <p>Author: Ali Akkas</p>
            <p>Email: ajfa@gmail.com</p>
            <Button variant="outline-info" size="sm">Contact us! </Button>
        </div>
    );
};

export default About;