import React from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './Layout.module.css'

const Layout = (props) => {
    return(
        <div className={classes.Container}>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout