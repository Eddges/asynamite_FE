import React, { Component } from 'react';
import classes from './Content.module.css'
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import Logo from '../../assets/Logo.png'





export class ContestDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             contestId : props.match.params.contestId,
             contestDetail:[]
        }
    }

    componentDidMount(){
        axios.get('http://13.234.145.69:8003/api/contest/')
             .then(res => {
                //  console.log(res.data[this.state.contestId].contest_name);
                //  this.setState({
                //      contestDetail: res.data[this.state.contestId]
                //  })
                //  console.log(this.state.contestDetail)
                const contestId = this.state.contestId;
                console.log(contestId)
                console.log( res.data.find(item => item.id == contestId));
                this.setState({
                    contestDetail:res.data.find(item => item.id == contestId)
                })



             })
    }


    

    render() {
        // console.log(this.state.contestId)
        return (
            <>
            <div className = {classes.navigation_wrapper}>
                <NavLink to = '/contests'>
                    <BsIcons.BsArrowLeft  style = {{color:'white', marginLeft:'30px', fontSize:'30px', fontWeight:600}}/>
                </NavLink>
            </div>
            <div className={classes.Container}>
            {/* <strong> Match Props: </strong>
            <code> {this.state.contestId} </code>
            <p> {this.state.contestDetail.contest_name} </p>
            <p>{this.state.contestDetail.details}</p> */}
            <div className = {classes.left}>
                <div className = {classes.box}>
                    <img src = {Logo} width = "25%" style = {{marginBottom:'10px'}} />
                    <p className = {classes.heading}> {this.state.contestDetail.contest_name} </p>
                    <p className = {classes.organiser}> {this.state.contestDetail.organiser} </p>
                    <p className = {classes.date}> {this.state.contestDetail.start_date_time} - {this.state.contestDetail.end_date_time} </p>
                    <p className = {classes.team}> Team Size : {this.state.contestDetail.team_size} </p>
                    <div className = {classes.eligibility}>
                        <p className = {classes.eligible}>Eligibility</p>
                        <p className = {classes.text}> {this.state.contestDetail.eligibility} </p>
                    </div>
                </div>
            </div>

            <div className = {classes.right}>
                <div className = {classes.box}>
                    <p className = {classes.heading}> Details </p>
                    <div className = {classes.divider}></div>
                    <p className = {classes.details}> {this.state.contestDetail.details} </p>
                    <button> Regiter </button>
                </div>
            </div>
        </div>
        </>
        )
    }
}

export default ContestDetails



// const ContestDetails = (props) => {
//     console.log(props.match.params.contestId)
    
//     const { params: {contestId}} = props.match;
//     useEffect(() => {
//         axios.get(`http://13.234.145.69:8003/api/contest/`)
//         .then(res => {
//             console.log(res.data[contestId].contest_name);
//             setContest({contest: res.data[contestId]});
//             console.log(contest)
//         })
//     },[])
//     return(
//         <div className={classes.Container}>
//             <strong> Match Props: </strong>
//             <code> {contestId} </code>
            
//         </div>
//     )
// }





// export default ContestDetails


