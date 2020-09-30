import React from 'react';
import styles from '../loginRegister.module.css';
import LeftContent from '../LeftContainer/LeftContainer.component';
import RegisterForm from '../RegisterForm/registerForm.component';
import { NavLink } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';


function Register() {
    return (
        <>
        <div className = {styles.navigation_wrapper}>
                <NavLink to = '/'>
                    <BsIcons.BsArrowLeft  style = {{color:'white', marginLeft:'20px', fontSize:'30px', fontWeight:600}}/>
                </NavLink>
        </div>
        <div className = {styles.parent}>
 
                {/*left container for onboarding content */}
                 <LeftContent question = "Already been there?" routeTitle = "/login" btnTitle = "Login"/>
 
 
                {/*right container for signin form */}
                 <div className = {styles.right_content}>
                    <RegisterForm/>
                 </div>
                 
        </div>
        </>
    )
}

export default Register
