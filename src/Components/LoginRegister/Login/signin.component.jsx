import React, {useState} from 'react';
import styles from '../loginRegister.module.css';
import LeftContent from '../LeftContainer/LeftContainer.component';
import LoginForm from '../LoginForm/loginForm.component';

class SignInPage extends React.Component {

    render() {
        return (
            <>
            <div className = {styles.parent}>
 
                {/*left container for onboarding content */}
                 <LeftContent question = "New here?" routeTitle= "/Register" btnTitle = "Sign Up"/>
 
 
                {/*right container for signin form */}
                 <div className = {styles.right_content}>
                    <LoginForm/>
                 </div>
                 
             </div>  
         </>
        )
    }
}

export default SignInPage;
