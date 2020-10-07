import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';
import * as AiIcon from 'react-icons/ai';


function EditModal({ open ,onClose}) {
    if(!open) return null;

    return ReactDom.createPortal (
        <>
          <div className = {styles.Overlay_Styles}/>
          <div className = {styles.Modal_Styles}>
            <div className = {styles.header}>
              <AiIcon.AiOutlineClose style = {{color:'white', fontSize:'20px', marginLeft:'auto',fontWeight:900}} onClick = {onClose}/>
            </div>

            <div className = {styles.information_wrapper}>
              <form >
                <div className = {styles.input_wrapper}>
                  <input type = "text" placeholder = "_name"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_dob"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_college"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_branch"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_graduation_year"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_phone"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_resume"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_github_link"  className = {styles.input_in}  />
                  <input type = "text" placeholder = "_linkedIn_link"  className = {styles.input_in}  />
                </div>
                <div className = {styles.btn}>
                  <button>Submit</button>
                </div>
                

              </form>
            </div>
            
          </div>
         
        </>,
        document.getElementById('portal')
      
    )
}

export default EditModal
