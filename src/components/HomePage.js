
import {Container, Alert, Link} from 'react-bootstrap'


function HomePage(props) {
    return (
        <Container fluid>
            <Container>
        <h2>Professional Software Engineer</h2>
        <br/>
        <p>I am deeply invested in the potential for engineering and software to act as a multiplier 
            - to enable and accelerate productivity in all endeavors and aspects of life. 
            </p>
            <br/>
        <p>I have developed a deep appreciation for and focus on the engineering process 
            of developing software – the processes that allow us to create not just a functional result, 
            but to create a result that is sustainable and maintainable and broadly usable.
            </p>
            <br/>
            <p>
                I have worked in large organizations with established products as well as startups developing entirely 
                new technologies from the ground up - different environments pose unique and interesting challenges, but the need for care and precision 
                is common to engineering throughout.
            </p>
            <br/>
            <p>
                I have a B.S. degree in Electrical Engineering and Computer Science from the University of California, Berkeley.<br/>
                My focus within the program was on computer science.<br/> 
                At Berkeley, I coauthered a research paper on the security implications of commodity-grade brain computer interface devices.<br/> 
                <a class="text-info" href="https://www.usenix.org/system/files/conference/usenixsecurity12/sec12-final56.pdf">Usenix Publication: On the Feasibility of Side-Channel Attacks with Brain-Computer Interfaces</a> 

            </p>
            <br/><br/><br/><br/>
            </Container>

            <Container>
                <Alert variant="dark">
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