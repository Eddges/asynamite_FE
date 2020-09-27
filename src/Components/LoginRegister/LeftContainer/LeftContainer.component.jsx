import React from 'react';
import styles from '../loginRegister.module.css';
import {NavLink} from 'react-router-dom';

function LeftContent({ question, btnTitle, routeTitle}){
    return(
        <>
        <div className = {styles.left_content}>
                     <div className = {styles.left_box}>
                         <p className = {styles.heading}>Become a true programming master</p>
                         <div className = {styles.text_wrapper}>
                             <p className = {styles.text}>Become a better developer</p>
                         </div>
 
 
                         
                     <div className = {styles.point_wrapper}>
                             <div className = {styles.question_wrapper}>
                                 <p> {question} </p>
                                
                             </div>
                             <NavLink to = {routeTitle} ><div className = {styles.signup_wrapper}>
                               <p> {btnTitle} </p>
                               
                             </div></NavLink> 
                     </div>
                     </div>
 
        </div>
        </>
    )
}
export default LeftContent;
