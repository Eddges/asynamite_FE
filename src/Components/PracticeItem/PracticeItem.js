import React from 'react'
import classes from './PracticeItem.module.css'

const PracticeItem = (props) => {
    return(
        <div className={classes.Container}>
            <span className={classes.Hash}>{props.fields.problem_code}</span>
            <div className={classes.Title}><span>{props.fields.problem_name}</span></div>
            <div className={classes.Difficulty}><span>{props.fields.difficulty}</span></div>
            <button className={classes.CL}>Start Collaborative Learning</button>
        </div>
    )
}

export default PracticeItem