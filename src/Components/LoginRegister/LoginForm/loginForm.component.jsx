import React from 'react';
import styles from '../loginRegister.module.css';
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class LoginForm extends React.Component {

    state = {
        userName : '',
        password : ''
    }

    changeName = e => {
        this.setState({
            ...this.state,
            userName : e.target.value
        })
    }

    changePassword = e => {
        this.setState({
            ...this.state,
            password : e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://13.234.145.69:8003/api/auth/login', {
            'username' : `${this.state.userName}`,
            'password' : `${this.state.password}`
        })
        .then(res => {
            console.log('Login response : ', res.data)
            localStorage.setItem('userName', res.data.user.username)
            localStorage.setItem('email', res.data.user.email)
            localStorage.setItem('name', res.data.user.first_name)
            localStorage.setItem('userId', res.data.user.id)
            localStorage.setItem('token', res.data.token)
            this.props.assignUser({
                userName : res.data.user.username,
                email : res.data.user.email,
                name : res.data.user.first_name,
                userId : res.data.user.id,
                token : res.data.token,
                
            })
            this.props.history.push('/')
        })
        .catch(err => alert(err))
    }


    render(){
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
                       <form onSubmit={this.submitHandler}>
                           <input type="text" placeholder = "username_" value={this.state.userName} onChange={this.changeName} />
                           <input type = "password" placeholder = "password_" value={this.state.password} onChange={this.changePassword} />
                           <button>Login</button>
                       </form>
                   </div>
               </div>
           </div>
           </>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return{
        assignUser : user => dispatch({
            type : 'ASSIGN_USER',
            payload : user
        })
    }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
