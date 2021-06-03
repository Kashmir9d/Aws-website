import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


function SignOut(props){
    return (
      <AmplifySignOut />
    )
  }


export default withAuthenticator(SignOut);