import { Carousel, Card } from 'react-bootstrap'
import React, { useState } from 'react';

function Portfolio(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{ alignSelf: 'center' }}>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} >
                <Carousel.Item  >
                    <img
                        className="d-block w-100"
                        src="images/T2.jpg"
                        alt="Second slide"
                        style={{ paddingRight: '10%', paddingLeft: '10%', paddingBottom: '10%' }}
                    />

                    <Carousel.Caption>
                        <h1>Automated, Self-Contained mobile factory for </h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/Scoreboard1.jpg"
                        alt="Second slide"
                        style={{ paddingRight: '10%', paddingLeft: '10%', paddingBottom: '10%' }}
                    />

                    <Carousel.Caption>
                        <h1>"Scoreboard" - factory progress and productivity metrics reporting</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/TrailorAutomation.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ paddingRight: '10%', paddingLeft: '10%'}}>
                    <Card className="d-block w-100" style={{ padding: '1%'}}>
                        <Card.Img variant="top" src="images/TrailorAutomation.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Portfolio;