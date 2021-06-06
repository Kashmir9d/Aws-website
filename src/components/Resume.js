
import {Container} from 'react-bootstrap'


function Resume(props) {
    return (
        <Container fluid display="flex" justifyContent="center" alignContent= "space-between">
        <embed src="../images/Resume Douglas Davies 2021.pdf"
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            height="1200px"
            width="100%" />
        </Container>
    )
};

export default Resume;