import React from 'react';
import styles from '../loginRegister.module.css';

function RegisterForm() {
    return (
        <>
        <div className = {styles.right_box}>
           <div className = {styles.right_content_box}>
               <p className = {styles.heading}>Sign Up</p>
               <div className = {styles.divider}></div>
                   <p className = {styles.text}>Fall in love with programming. Hop on a learning journey with Asynamite</p>
               <div className = {styles.divider}></div>
                           
               {/* Login form section */}
               <div className = {styles.form_area}>
                   <form>
                       <input type="text" placeholder = "username_"/>
                       <input type = "text" placeholder = "email_"/>
                       <input type = "text" placeholder = "phone_"/>
                       <input type = "password" placeholder = "password_"/>
                       <input type = "password" placeholder = "confirm_password_"/>
                       <button>Sign Up</button>
                   </form>
               </div>
           </div>
       </div>
       </>
    )
}

export default RegisterForm
