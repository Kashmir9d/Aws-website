import {Container} from 'react-bootstrap'


function HomePage(props) {
    return (
        <div>
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
                is common to engineering throughout.n
            </p>
            </Container>
        <div className="fixed-bottom">
            <Container>
                <h2>“Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water.” — Zen Kōan </h2>
            </Container>
        </div>
        </div>
    )
};

export default HomePage;