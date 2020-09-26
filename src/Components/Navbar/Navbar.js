import React from 'react'
import classes from './Navbar.module.css'
import Logo from '../../assets/Logo.png'
import HomeLogo from '../../assets/Home.png'
import Command from '../../assets/Command.png'
import Dashboard from '../../assets/Dashboard.png'
import Result from '../../assets/Result.png'
import Trophy from '../../assets/Trophy.png'

class Navbar extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <img className={classes.Logo} src={Logo} alt="Logo" />
                <div className={classes.Menu}>
                    <div className={classes.MenuItem}>
                        <span>HOME</span>
                        <img src={HomeLogo} alt="Home" />
                    </div>
                    <div className={classes.MenuItem}>
                        <span>CONTESTS</span>
                        <img src={Trophy} alt="Contests" className={classes.ResultsIcon} />
                    </div>
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