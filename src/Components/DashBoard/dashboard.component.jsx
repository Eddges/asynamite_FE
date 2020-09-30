import React from 'react';
import Layout from '../Layout/Layout';
import styles from './dashboard.module.css';
import profilelogo from '../../assets/Ellipse.png';

function Dashboard() {
    return (
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

                    </div>
                </div>
                {/* interview schedule section */}
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


            </div>
        </Layout>
    )
}

export default Dashboard;
