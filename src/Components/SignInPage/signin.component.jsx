import React from 'react';
import styles from './signin.module.css';

function SignInPage() {
    return (
        <>
           <div className = {styles.parent}>

               {/*left container for onboarding content */}
                <div className = {styles.left_content}>
                    <div className = {styles.left_box}>
                        <p className = {styles.heading}>Become a true programming master</p>
                        <div className = {styles.text_wrapper}>
                            <p className = {styles.text}>Become a better developer</p>
                        </div>


                        
                    <div className = {styles.point_wrapper}>
                            <div className = {styles.question_wrapper}>
                                <p>New here?</p>
                               
                            </div>
                            <div className = {styles.signup_wrapper}>
                                <p>SignUp</p>
                              
                            </div>
                    </div>
                    </div>

                </div>


               

                {/*right container for signin form */}
                <div className = {styles.right_content}>
                    <div className = {styles.right_box}>
                        <div className = {styles.right_content_box}>
                            <p className = {styles.heading}>Login</p>
                            <div className = {styles.divider}></div>
                            <p className = {styles.text}>Practice over 300 extensive questions. Compete in comprehensive hackathons and participate our ground-breaking collaborative study experience.</p>
                            <div className = {styles.divider}></div>
                            
                            {/* Login form section */}
                            <div className = {styles.form_area}>
                                <form>
                                    <input type="text" placeholder = "username_"/>
                                    <input tyype = "password" placeholder = "password_"/>
                                    <button>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
        </>
    )
}

export default SignInPage;
