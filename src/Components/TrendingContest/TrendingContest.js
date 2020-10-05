import React from 'react'
import classes from './TrendingContest.module.css'
import {connect} from 'react-redux'
import bg from '../../assets/code.png'
import { NavLink } from 'react-router-dom'

const TrendingContest = (props) => {
    const start = props.func.trending.start_date_time.split(' ')
    const end = props.func.trending.end_date_time.split(' ')
    return(
        <NavLink to="/contest_details" className={classes.Container} onClick={props.showTrendingDetails} >
            <span className={classes.Heading}>{props.func.trending.contest_name}</span>
            <span className={classes.Eligibility}><span className={classes.StartDate}>{start[0]} {start[1]} {start[2]}</span> - <span className={classes.StartDate}>{end[0]} {end[1]} {end[2]}</span></span>
            <button className={classes.FindMore}>Find More &gt;</button>
            <div className={classes.ImageDiv}>
                <img className={classes.Image} src={bg} alt="Image" />
            </div> 
        </NavLink>
    )
}

const mapStateToProps = state => {
    return{
        func : state.func
    }
}

export default connect(mapStateToProps)(TrendingContest)