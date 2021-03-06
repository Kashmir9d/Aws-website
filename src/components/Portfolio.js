import { Carousel, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useState } from 'react';
import '../App.css';
import '../index.css'

function Portfolio(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div style={{ alignSelf: 'center' }}>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} >
                <Carousel.Item>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Mobile Factory - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/T2.jpg"/>
                        <Card.Body>
                            <Card.Title>Automated "mobile factory" work trailer for composite materials work.</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Custom designed software-controlled automated work trailer for infrastructure repairs using composite materials.</ListGroupItem>                            
                            <ListGroupItem>Software defined PLC controlling on-board equipment.</ListGroupItem>
                            <ListGroupItem>All software and hardware controls designed in-house and implemented from first version through several iterations in full production. </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Mobile Factory - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/TrailorAutomation.jpg"/>
                        <Card.Body>
                            <Card.Title>Automated "mobile factory" work trailer for composite materials work.</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Automated system for dosing catalyst and mixing composite materials to specified requirements.</ListGroupItem>                            
                            <ListGroupItem>Accurate dosing, mixing, material storage, and logging based on barcoded material packaging.</ListGroupItem>
                            <ListGroupItem>Data-assisted quality assurance, job progress and material usage reporting, and remote progress reporting. </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Scoreboard - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/Scoreboard1.jpg"/>
                        <Card.Body>
                            <Card.Title>Production scheduling and progress reporting. </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Custom built system for real-time schedule, progress, and KPI metrics reporting.</ListGroupItem>                            
                            <ListGroupItem>Integrated data from ERP system, scheduling system, and factory equipment to provide a comprehensive overview.</ListGroupItem>
                            <ListGroupItem>Real-time feedback between factory floor and front office demonstrating significant productivity improvements on both sides. </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Production Line Automation - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/ConveyorRedesign.jpg"/>
                        <Card.Body>
                            <Card.Title>Redesigned and automated production. </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Analyzed and redesigned production process to utilize automated powered conveyors.</ListGroupItem>                            
                            <ListGroupItem>Designed and implemented PLC controls, sensors, and software integration/reporting.</ListGroupItem>
                            <ListGroupItem>Refined process and repeated improvements for multiple production lines. </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Portfolio;