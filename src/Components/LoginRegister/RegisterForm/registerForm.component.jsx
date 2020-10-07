import React from 'react';
import styles from '../loginRegister.module.css';
import {connect} from 'react-redux'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class RegisterForm extends React.Component{

    state = {
        user : {
            userName : '',
            email : '',
            userId : '',
            name : '',
            token : ''
        },
        password : '',
        confirmPassword : ''
    }

    changeUserName = e => {
        this.setState({
            ...this.state,
            user : {
                ...this.state.user,
                userName : e.target.value
            }
        })
    }
    changeEmail = e => {
        this.setState({
            ...this.state,
            user : {
                ...this.state.user,
                email : e.target.value
            }
        })
    }
    changePhone = e => {
        this.setState({
            ...this.state,
            user : {
                ...this.state.user,
                name : e.target.value
            }
        })
    }
    changePassword = e => {
        this.setState({
            ...this.state,
            password : e.target.value
        })
    }
    changeConfirmPassword = e => {
        this.setState({
            ...this.state,
            confirmPassword : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('State : ', this.state)
        axios.post('http://13.234.145.69:8003/api/auth/register', {
            "username" : `${this.state.user.userName}`,
            'email' : `${this.state.user.email}`,
            'password' : `${this.state.password}`,
            'first_name' : `${this.state.user.name}`
        })
        .then((res) => {
            console.log('Axios request response ', res.data)
            localStorage.setItem('userName', res.data.user.username)
            localStorage.setItem('userId', res.data.user.id)
            localStorage.setItem('email', res.data.user.email)
            localStorage.setItem('name', res.data.user.first_name)
            localStorage.setItem('token', res.data.token)
            this.props.assignUser({
                userName : res.data.user.username,
                userId : res.data.user.id,
                name : res.data.user.first_name,
                email : res.data.user.email,
                token : res.data.token
            })
            this.props.history.push('/')
        })
    }
    render(){
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
                       <form onSubmit={this.handleSubmit}>
                           <input type="text" placeholder = "username_" onChange={this.changeUserName} value={this.state.user.userName} />
                           <input type = "text" placeholder = "email_" onChange={this.changeEmail} value={this.state.user.email} />
                           <input type = "text" placeholder = "name_" onChange={this.changePhone} value={this.state.user.name} />
                           <input type = "password" placeholder = "password_" onChange={this.changePassword} value={this.state.password} />
                           <input type = "password" placeholder = "confirm_password_" onChange={this.changeConfirmPassword} value={this.state.confirmPassword} />
                           <button>Sign Up</button>
                       </form>
                   </div>
               </div>
           </div>
           </>
        )
    }
    
}

const mapStateToProps = state => {
    return{
        user : state.usr,
        func : state.func
    }
}

const mapDispatchToProps = dispatch => {
    return{
        assignUser : (user) => dispatch({
            type : 'ASSIGN_USER',
            payload : user
        })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm))
