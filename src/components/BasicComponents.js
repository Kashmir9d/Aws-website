
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



  export function Error(props){
      return(
        <div class="container-fluid">
        <Alert variant="danger">
        <Alert.Heading>Error! Invalid URL</Alert.Heading>
        <p>
            You have reached an invalid URL. 
        </p>
    </Alert>
    </div>
      )

  }
