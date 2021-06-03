import {Container} from 'react-bootstrap'


function HomePage(props) {
    return (
        <div>
        <h1>My Messages App</h1>
        <div className="fixed-bottom">
            <Container>
                <h2>“Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water.” — Zen Kōan </h2>
            </Container>
        </div>
        </div>
    )
};

export default HomePage;