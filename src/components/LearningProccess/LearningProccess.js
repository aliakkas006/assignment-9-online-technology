import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const LearningProccess = () => {

    // Carousel slider state
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src="https://media-exp1.licdn.com/dms/image/C4E1BAQFqAVJsLUtGlg/company-background_10000/0/1603890575871?e=2159024400&v=beta&t=Y6WxmjAfnoEtDF3NsqUPI1vnJk7M604YEx1BdJ0cm8I"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Proccess Automation solutions</h3>
                    <p>Process Automation Solutions is one of the leading independent providers of complete automation solutions for the process and manufacturing industry.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src="https://www.surrey.ac.uk/sites/default/files/styles/640x360_16_9/public/2020-05/cyber-security-finger-internet-media.jpg?itok=9UKrLgaX"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Computer Science</h3>
                    <p>Computer science is the study of computers and computing as well as their theoretical and practical applications. Computer science applies the principles of mathematics, engineering</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src="https://www.flyingpenguins.in/blogs/wp-content/uploads/2020/08/Web-Development.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Web Application</h3>
                    <p>A web application (or web app) is application software that runs on a web server, unlike computer-based software programs that are run locally on the operating system (OS) of the device. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default LearningProccess;