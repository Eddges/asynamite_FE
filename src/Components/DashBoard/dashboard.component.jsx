import React ,{ useState, useEffect }from 'react';
import Layout from '../Layout/Layout';
import styles from './dashboard.module.css';
import profilelogo from '../../assets/Ellipse.png';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import axios from 'axios';



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
                 console.log(res.data[1])
                 this.setState({
                     interview_Schedule: res.data
                 })
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
                            <p className = {styles.name} >John Doe</p>
                            <p className = {styles.desig}>Student</p>
                            <button>Edit</button>
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
                             {/* data from api */}
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