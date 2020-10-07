import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';
import * as AiIcon from 'react-icons/ai';

class EditModal extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       userDetails : {
         name: '',
         dob:'',
         college:'',
         branch:'',
         graduation_year:'',
         phone:'',
         resume:'',
         githubLink:'',
         LinkedInLink:''
       }
    }
  }

  changeName = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            name : e.target.value
        }
    })
    console.log(this.state.userDetails)
}

  changeDob = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            dob : e.target.value
        }
    })
    console.log(this.state.dob)
  }
  changeCollege = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            college : e.target.value
        }
    })
    console.log(this.state.userDetails)
  }
  changeBranch = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            branch: e.target.value
        }
    })
    console.log(this.state.userDetails)
  }
  changeGy = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            graduation_year : e.target.value
        }
    })
    console.log(this.state.userDetails)
  }
  changePhone = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            phone : e.target.value
        }
    })
    console.log(this.state.userDetails)
  }
  changeResume = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            resume : e.target.value
        }
    })
    console.log(this.state.userDetails)
  }
  changeGL = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            githubLink : e.target.value
        }
    })
    console.log(this.state.userDetails)
  }
  changeLL = e => {
    this.setState({
        ...this.state,
        userDetails : {
            ...this.state.userDetails,
            LinkedInLink : e.target.value
        }
    })
    console.log(this.state.userDetails)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)

  }



  

  render(){
    if(!this.props.open) return null;

    return ReactDom.createPortal (
      <>
        <div className = {styles.Overlay_Styles}/>
        <div className = {styles.Modal_Styles}>
          <div className = {styles.header}>
            <AiIcon.AiOutlineClose style = {{color:'white', fontSize:'20px', marginLeft:'auto',fontWeight:900}} onClick = {this.props.onClose}/>
          </div>

          <div className = {styles.information_wrapper}>
            <form onSubmit = {this.handleSubmit}>
              <div className = {styles.input_wrapper}>
                <input type = "text" placeholder = "_name" onChange = {this.changeName} value = {this.state.userDetails.name} className = {styles.input_in}  />
                <input type = "text" placeholder = "_dob" onChange = {this.changeDob} value = {this.state.userDetails.dob} className = {styles.input_in}  />
                <input type = "text" placeholder = "_college" onChange = {this.changeCollege} value = {this.state.userDetails.college}  className = {styles.input_in}  />
                <input type = "text" placeholder = "_branch" onChange = {this.changeBranch} value = {this.state.userDetails.branch}  className = {styles.input_in}  />
                <input type = "text" placeholder = "_graduation_year" onChange = {this.changeGy} value = {this.state.userDetails.graduation_year} className = {styles.input_in}  />
                <input type = "text" placeholder = "_phone" onChange = {this.changePhone} value = {this.state.userDetails.phone} className = {styles.input_in}  />
                <input type = "text" placeholder = "_resume" onChange = {this.changeResume} value = {this.state.userDetails.resume}  className = {styles.input_in}  />
                <input type = "text" placeholder = "_github_link" onChange = {this.changeGL} value = {this.state.userDetails.githubLink} className = {styles.input_in}  />
                <input type = "text" placeholder = "_linkedIn_link" onChange = {this.changeLL} value = {this.state.userDetails.LinkedInLink} className = {styles.input_in}  />
              </div>
              <div className = {styles.btn}>
                <button >Submit</button>
              </div>
              

            </form>
          </div>
          
        </div>
       
      </>,
      document.getElementById('portal')
    
  )

  }
}


// function EditModal({ open ,onClose}) {
//     if(!open) return null;

//     return ReactDom.createPortal (
//         <>
//           <div className = {styles.Overlay_Styles}/>
//           <div className = {styles.Modal_Styles}>
//             <div className = {styles.header}>
//               <AiIcon.AiOutlineClose style = {{color:'white', fontSize:'20px', marginLeft:'auto',fontWeight:900}} onClick = {onClose}/>
//             </div>

//             <div className = {styles.information_wrapper}>
//               <form >
//                 <div className = {styles.input_wrapper}>
//                   <input type = "text" placeholder = "_name"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_dob"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_college"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_branch"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_graduation_year"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_phone"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_resume"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_github_link"  className = {styles.input_in}  />
//                   <input type = "text" placeholder = "_linkedIn_link"  className = {styles.input_in}  />
//                 </div>
//                 <div className = {styles.btn}>
//                   <button>Submit</button>
//                 </div>
                

//               </form>
//             </div>
            
//           </div>
         
//         </>,
//         document.getElementById('portal')
      
//     )
// }

export default EditModal
