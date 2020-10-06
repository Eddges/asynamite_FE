import React from 'react'
import Layout from '../Layout/Layout'
import classes from './Contests.module.css'
import BinaryImage from '../../assets/Binary.png'
import DoublyLL from '../../assets/DoublyLL.png'
import Hack4 from '../../assets/Hack4.png'
import axios from 'axios';
import {Link} from 'react-router-dom';
import bg from '../../assets/code.png'

class Contests extends React.Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             show: 'active',
             contests:[]
        }
        // console.log(props)
    }
    

    setShow = (text) => {
        this.setState({
            ...this.state,
            show : text
        })
    }


    componentDidMount() {
        axios.get('http://13.234.145.69:8003/api/contest/')
             .then( res => {
                 console.log(res.data);
                 this.setState({contests : res.data})
             })
             .catch( error => {
                 console.log(error)
             })
    }

    


    render(){
        return(
            <Layout>
                <div className={classes.Container}>
                    <div className={classes.Cards}>
                        <div className={classes.MainActive} style={this.state.show==='active' ? null : {width : '0px', overflow : 'hidden'}}>
                            
                            {this.state.contests.map( (contest, index) => 
                            
                            <Link key = {contest.id} style = {{textDecoration:'none', color:'white'}} to = {`/contestPage/${contest.id}`}> <div className = {classes.Highlighted} style = {{marginLeft:'20px'}} >
                                    <p className = {classes.heading}> {contest.contest_name} </p>
                                    <p> <span> {contest.start_date_time.split(' ')[0]} {contest.start_date_time.split(' ')[1]}  {contest.start_date_time.split(' ')[2]}</span> 
                                    -  <span> {contest.end_date_time.split(' ')[0]} {contest.end_date_time.split(' ')[1]}  {contest.end_date_time.split(' ')[2]}</span>
                                    
                                    </p>
                                    <img src = {bg}/>
                                
                                    
                                </div>
                            </Link>
                               
                                
                            )}
                    {/* //dummy card */}
                    <div className = {classes.Highlighted} style = {{backgroundColor:'blue', marginLeft:'20px'}} >
                                    <p className = {classes.heading}> Binary Challenge </p>
                                    <p> 
                                    Tue Oct 13 - Sat Oct 18
                                    </p>
                                    <img src = {bg}/>
                                
                                    
                                </div>
                        </div>
                    </div>

                    <div className={classes.Switch}>
                        <span className={this.state.show==='active' ? classes.ActiveNow :  classes.ActiveContest} onClick={() => this.setShow('active')}>Active</span>
                        <span>|</span>
                        <span className={this.state.show==='older' ? classes.ActiveNow :  classes.OlderContests} onClick={() => this.setShow('older')}>Older</span>
                       
                    </div>
                </div>
            </Layout>
        )
    }
}



export default Contests