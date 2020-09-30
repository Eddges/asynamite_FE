import React from 'react';
import styles from './results.module.css';
import Layout from '../Layout/Layout';
import resultCard from '../../assets/resultcard.png';
import Navbar from '../Navbar/Navbar';


function Results() {
    return (
        <Layout>
       
            <div className = {styles.parent}>
                <div className = {styles.header_container}>
                    <p className = {styles.heading}> Recent Contests</p>
                </div>

                <div className = {styles.result_container}>
                    <img src= {resultCard} alt=""/>
                    
                    
                    <div className = {styles.details}>
                        <p className = {styles.detail_heading}>HACKATHON_4</p>
                        <p className = {styles.date_title}> Announced On</p>
                        <div className = {styles.date}>
                            <p>August 20, 2020</p>
                        </div>
                    </div>


                    <div className = {styles.view}>
                        <button>View Results</button>
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

export default Results;
