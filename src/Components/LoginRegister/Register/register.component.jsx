import React from 'react';
import styles from '../loginRegister.module.css';
import LeftContent from '../LeftContainer/LeftContainer.component';
import RegisterForm from '../RegisterForm/registerForm.component';

function Register() {
    return (
        <div className = {styles.parent}>
 
                {/*left container for onboarding content */}
                 <LeftContent question = "Already been there?" routeTitle = "/login" btnTitle = "Login"/>
 
 
                {/*right container for signin form */}
                 <div className = {styles.right_content}>
                    <RegisterForm/>
                 </div>
                 
        </div>
    )
}

export default Register
