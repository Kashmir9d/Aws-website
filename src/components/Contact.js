import {Container} from 'react-bootstrap'


function Contact(props) {
    return (
            <Container fluid>
        <h2>Douglas Davies</h2>
        <br></br>
        <h3> (530) 320-1220</h3>       
        <h3> doug.davies9d@gmail.com</h3>
        <br/><br/>
        <h4>Austin, TX area</h4>
        <br/><br/>
        <h4>
        <a class="text-info" href="mailto:doug.davies9d@gmail.com">Shoot Me An Email</a> 
        </h4> <br/>
        <h4>Or feel free to log in and message me through this website.</h4>
            </Container>
    )
};

export default Contact;