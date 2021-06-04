import { Container, Carousel, Figure, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';

function Portfolio(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{ alignSelf: 'center' }}>
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item  >
                <Card class="d-block mx-auto" style={{ width: '30%'}} >
                    <Card.Img variant="top" src="images/Scoreboard1.jpg" />
                    <Card.Body>
                        <Card.Title>"Scoreboard" - factory progress and productivity metrics reporting</Card.Title>
                        <Card.Text>
                            Custom designed system 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    src="images/Scoreboard1.jpg"
                    alt="Second slide"
                    style={{ width: '30%'}} 
                />

                <Carousel.Caption>
                    <h3>"Scoreboard" - factory progress and productivity metrics reporting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Portfolio;