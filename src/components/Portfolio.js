import { Carousel, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useState } from 'react';

function Portfolio(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{ alignSelf: 'center' }}>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} >
                <Carousel.Item style={{ paddingRight: '30%', paddingLeft: '30%' }}>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Mobile Factory - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/T2.jpg" style={{ paddingRight: '5%', paddingLeft: '5%' }}/>
                        <Card.Body>
                            <Card.Title>Automated "mobile factory" work trailer for composite materials work.</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Custom designed software-controlled automated work trailer for infrastructure repairs composite materials.</ListGroupItem>                            
                            <ListGroupItem>Software defined PLC controlling on-board equipment.</ListGroupItem>
                            <ListGroupItem>All software and hardware controls custom designed and implemented from first version through several iterations in full production. </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Carousel.Item>
                <Carousel.Item style={{ paddingRight: '30%', paddingLeft: '30%' }}>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Mobile Factory - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/TrailorAutomation.jpg" style={{ paddingRight: '5%', paddingLeft: '5%' }}/>
                        <Card.Body>
                            <Card.Title>Automated "mobile factory" work trailer for composite materials work.</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Automated system for dosing catalyst and mixing composite materials to specified requirements.</ListGroupItem>                            
                            <ListGroupItem>Accurate dosing, mixing, material storage, and logging based on barcoded material packaging.</ListGroupItem>
                            <ListGroupItem>Data-assisted quality assurance, job progress and material usage reporting, remote progress reporting. </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Carousel.Item>
                <Carousel.Item style={{ paddingRight: '30%', paddingLeft: '30%' }}>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Scoreboard - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/Scoreboard1.jpg" style={{ paddingRight: '5%', paddingLeft: '5%' }}/>
                        <Card.Body>
                            <Card.Title>Production scheduling and progress reporting. </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Custom built system for real-time schedule, progress, and KPI metrics reporting.</ListGroupItem>                            
                            <ListGroupItem>Integrated data from ERP system, scheduling system, and factory equipment feedback.</ListGroupItem>
                            <ListGroupItem>Real-time feedback between factory floor and front office demonstrating significant productivity improvements. </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Carousel.Item>
                <Carousel.Item style={{ paddingRight: '30%', paddingLeft: '30%' }}>
                    <Card className="d-block w-100" style={{ padding: '1%' }}>

                        <Card.Header><h3>Production Line Automation - Composites for Infrastructure</h3></Card.Header>
                        <Card.Img variant="top" src="images/ConveyorRedesign.jpg" style={{ paddingRight: '5%', paddingLeft: '5%' }}/>
                        <Card.Body>
                            <Card.Title>Resigned and automated production. </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Analyzed and residgned production process to utilize aution and powered conveyors.</ListGroupItem>                            
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