import React, {useState} from 'react';
import styles from '../loginRegister.module.css';
import LeftContent from '../LeftContainer/LeftContainer.component';
import LoginForm from '../LoginForm/loginForm.component';
import * as BsIcons from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

class SignInPage extends React.Component {

    render() {
        return (
            <>
            <div className = {styles.navigation_wrapper}>
                <NavLink to = '/'>
                    <BsIcons.BsArrowLeft  style = {{color:'white', marginLeft:'20px', fontSize:'30px', fontWeight:600}}/>
                </NavLink>
            </div>
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
