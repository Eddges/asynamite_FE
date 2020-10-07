import React ,{ useState, useEffect }from 'react';
import Layout from '../Layout/Layout';
import styles from './dashboard.module.css';
import profilelogo from '../../assets/Ellipse.png';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';
import Portal from '../EditPortal/Portal';



class Dashboard extends React.Component{



    constructor(props) {
        super(props)
    
        this.state = {
             interview_Schedule:[]
        }
    }

    componentDidMount() {
        axios.get('http://13.234.145.69:8003/api/scheduleInterview/')
             .then(res => {
                //  console.log(res.data[1])
                 this.setState({
                     interview_Schedule: res.data
                 })
                 console.log( 'interview', this.state.interview_Schedule);
             })
    }
    

    render() {
        
        return(
            <Layout>
            <div className = {styles.parent}>

                {/* profile section */}
                <div className = {styles.profile_section}>
                    <div className = {styles.profile_content}>
                        <div className = {styles.profile}>
                            <img src={profilelogo} alt=""/>
                            <p className = {styles.name} > {this.props.user.name} </p>
                            <p className = {styles.desig}>Student</p>
                            <button> <Portal/> </button>
                        </div>
                    </div>
                </div>
                {/* user data section like insights, achievements */}
                <div className = {styles.user_data}>
                    <div className = {styles.user_data_content}>
                        <UserElement title = "Insights"/>
                        <UserElement title = "Achievements"/>
                    </div>
                </div>
                {/* interview schedule section */}
                {
                    
                     <div className = {styles.schedule_section}>
                     <div className = {styles.schedule_section_content}>
                         <div className = {styles.header}>
                             <p>Interview Schedule</p>
                         </div>
                         <div className = {styles.data}>
                             {
                                 this.state.interview_Schedule === ''?
                                 <div>
                                     {
                                         this.state.interview_Schedule.map(data => 
                                                <div key = {data.userName}> 
                                                </div>
                                         )
                                     }
                                 </div> :
                                 <div className = {styles.no_data_wrapper}>
                                     <div className = {styles.no_data}>
                                         <FaIcons.FaRegCalendarTimes style = {{color:'white', fontSize:'50px', opacity:0.5}} />
                                        <p className = {styles.text}> No Schedule Yet </p>
                                     </div>
                                 </div>
                             }
                         </div>
                     </div>
                 </div>
                }
               


            </div>
        </Layout>
        )
    }
}




function UserElement({title}) {
    return(
        <div className = {styles.insights}>
            <div className = {styles.header}>
                <p> {title} </p>
            </div>

            <div className = {styles.data}>
                {/* data from api */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user : state.usr
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard))