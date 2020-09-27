import React from 'react';
import styles from './LandingPage.module.css';
import Layout from '../Layout/Layout';
import practiceLogo from '../../assets/practice_icon.png';
import trophyLogo from '../../assets/Trophy.png';
import demoRight from '../../assets/demoright.png';
import {NavLink} from 'react-router-dom';


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
                            <NavLink to = '/practice' style = {{textDecoration:'none'}}>
                                <div className = {styles.practice_wrapper}>
                                    <p>PRACTICE</p>
                                    <img src={practiceLogo} alt=""/>
                                </div>
                            </NavLink>
                            
                            <NavLink style = {{textDecoration:'none'}} to = '/contests'> <div className = {styles.contest_wrapper}>
                               <p>CONTESTS</p>
                                <img src={trophyLogo} alt=""/>
                            </div></NavLink>
                        </div>
                    </div>
                </div>
                <div className = {styles.right_content}>
                    <div className = {styles.right_box}>
                        <div className = {styles.contest_display}>
                            <p>Trending challenges</p>
                            <img src={demoRight} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

export default LandingPage
