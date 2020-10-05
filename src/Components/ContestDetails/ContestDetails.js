// import React, {useEffect, useState} from 'react'
import classes from './ContestDetails.module.css'
import {connect} from 'react-redux'
import axios from 'axios'

import React, { Component } from 'react'

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
                 this.setState({
                     contestDetail: res.data[this.state.contestId]
                 })
                 console.log(this.state.contestDetail)
             })
    }


    

    render() {
        // console.log(this.state.contestId)
        return (
            <div className={classes.Container}>
            <strong> Match Props: </strong>
            <code> {this.state.contestId} </code>
            <p> {this.state.contestDetail.contest_name} </p>
            <p>{this.state.contestDetail.details}</p>
            
        </div>
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


