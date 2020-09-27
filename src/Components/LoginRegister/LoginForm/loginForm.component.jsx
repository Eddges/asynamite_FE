import React from 'react';
import styles from '../loginRegister.module.css';

function LoginForm() {
    return (
        <>
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
                       <input type = "password" placeholder = "password_"/>
                       <button>Login</button>
                   </form>
               </div>
           </div>
       </div>
       </>
    )
}

export default LoginForm;
