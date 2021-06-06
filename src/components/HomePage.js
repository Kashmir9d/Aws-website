
import {Container, Alert} from 'react-bootstrap'


function HomePage(props) {
    return (
        <Container fluid>
            <Container>
        <h2>Professional Software Engineer</h2>
        <p>I am deeply invested in the potential for engineering and software to act as a multiplier 
            - to enable and accelerate productivity in all endeavors and aspects of life. 
            </p>
        <p>I have developed a deep appreciation for and focus on the engineering process 
            of developing software – the processes that allow us to create not just a functional result, 
            but to create a result that is sustainable and maintainable and broadly usable.
            </p>
            <p>
                I have worked in large organizations with established products as well as startups developing entirely 
                new technologies from the ground up - different environments include unqiue and interesting challenges, but the need for care and precision 
                is common to engineering throughout.
            </p>
            <br/><br/><br/><br/><br/><br/><br/>
            </Container>

            <Container>
                <Alert variant="info">
                    <Alert.Heading>“Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water.”</Alert.Heading>
                    <hr/>
                    <p>
                    — Zen Kōan 
                    </p>
                </Alert>
            </Container>
        </Container>
    )
};

export default HomePage;