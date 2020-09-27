import React from 'react'
import classes from './PracticeItem.module.css'

const PracticeItem = (props) => {
    return(
        <div className={classes.Container}>
            <span className={classes.Hash}>AD</span>
            <div className={classes.Title}><span>Add 2 Numbers</span></div>
            <div className={classes.Difficulty}><span>Easy</span></div>
            <div className={classes.CL}><span>Start Collaborative Learning</span></div>
        </div>
    )
}

export default PracticeItem