import React from 'react'
import classes from './Navbar.module.css'
import Logo from '../../assets/Logo.png'
import HomeLogo from '../../assets/Home.png'
import Command from '../../assets/Command.png'
import Dashboard from '../../assets/Dashboard.png'
import Result from '../../assets/Result.png'
import Trophy from '../../assets/Trophy.png'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <img className={classes.Logo} src={Logo} alt="Logo" />
                <div className={classes.Menu}>
                    <NavLink to="/home" className={classes.MenuItem} activeClassName={classes.Active}>
                        <span>HOME</span>
                        <img src={HomeLogo} alt="Home" />
                    </NavLink>
                    <NavLink to="/contests" className={classes.MenuItem} activeClassName={classes.Active}>
                        <span>CONTESTS</span>
                        <img src={Trophy} alt="Contests" className={classes.ResultsIcon} />
                    </NavLink>
                    <NavLink to="/practice" className={classes.MenuItem} activeClassName={classes.Active}>
                        <span>PRACTICE</span>
                        <img src={Command} alt="Practice" />
                    </NavLink>
                    <NavLink to="/dashboard" className={classes.MenuItem} activeClassName={classes.Active}>
                        <span>DASHBOARD</span>
                        <img src={Dashboard} alt="Dashboard" />
                    </NavLink>
                    <NavLink to="/results" className={classes.MenuItem} activeClassName={classes.Active}>
                        <span>RESULTS</span>
                        <img src={Result} alt="Result" />
                    </NavLink>
                </div>
                <div className={classes.ButtonDiv}>
                    <NavLink to = '/login'><button className={classes.LoginButton}>Login</button></NavLink> 
                    <NavLink to = '/register'><button className={classes.SignUpButton}>Sign Up</button></NavLink> 
                </div>
            </div>
        )
    }
}

export default Navbar