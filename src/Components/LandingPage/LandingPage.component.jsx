import React from 'react';
import styles from './LandingPage.module.css';
import Layout from '../Layout/Layout';
import practiceLogo from '../../assets/practice_icon.png';
import trophyLogo from '../../assets/trophy.png';


function LandingPage() {
    return (
        <Layout>
            <div className = {styles.parent}>
                <div className = {styles.left_content}>
                    <div className = {styles.left_box}>
                        <p className = {styles.heading}>Become a true programming master</p>
                        <div className = {styles.text_wrapper}>
                            <p className = {styles.text}>Practice with 300+ challenges</p>
                            <p className = {styles.text}>Become a better developer</p>
                        </div>

                        <div className = {styles.point_wrapper}>
                            <div className = {styles.practice_wrapper}>
                                <p>Practice</p>
                                <img src={practiceLogo} alt=""/>
                            </div>
                            <div className = {styles.contest_wrapper}>
                                <p>Contest</p>
                                <img src={trophyLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles.right_conent}>
                    <div className = {styles.right_box}>
                        
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

export default LandingPage
