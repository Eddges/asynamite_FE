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
                    <NavLink to="/" className={classes.MenuItem} activeClassName={classes.Active}>
                        <span>HOME</span>
                        <img src={HomeLogo} alt="Home" />
                    </NavLink>
                    <NavLink to="/contests" className={classes.MenuItem} activeClassName={classes.Active}>
                        <span>CONTESTS</span>
                        <img src={Trophy} alt="Contests" className={classes.ResultsIcon} />
                    </NavLink>
                    <div className={classes.MenuItem}>
                        <span>PRACTICE</span>
                        <img src={Command} alt="Practice" />
                    </div>
                    <div className={classes.MenuItem}>
                        <span>DASHBOARD</span>
                        <img src={Dashboard} alt="Dashboard" />
                    </div>
                    <div className={classes.MenuItem}>
                        <span>RESULTS</span>
                        <img src={Result} alt="Result" />
                    </div>
                </div>
                <div className={classes.ButtonDiv}>
                    <button className={classes.LoginButton}>Login</button>
                    <button className={classes.SignUpButton}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default Navbar