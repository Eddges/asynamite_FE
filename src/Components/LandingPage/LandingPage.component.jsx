import React from 'react';
import styles from './LandingPage.module.css';
import Layout from '../Layout/Layout';
import practiceLogo from '../../assets/practice_icon.png';
import trophyLogo from '../../assets/Trophy.png';
import demoRight from '../../assets/demoright.png';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios'
import TrendingContest from '../TrendingContest/TrendingContest';


class LandingPage extends React.Component {
    state = {
        contest : null,
        showCard : false
    }

    showTrendingDetails = () => {
        
    }

    componentDidMount() {
        axios.get(`http://13.234.145.69:8003/api/contest`)
        .then(res => {
            console.log('Resdata : ', res.data)
            this.props.setTrendingChallenge(res.data[0])
            this.setState({
                ...this.state,
                contest : res.data[0],
                showCard : true
            }, () => {
                console.log('State : ', this.state)
            })
        })
    }

    render(){
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
                            {/* <div className = {styles.contest_display}> */}
                                <span className = {styles.Trending}>TRENDING</span>
                                {
                                    this.state.showCard ?  <TrendingContest showTrendingDetails={this.showTrendingDetails} /> : null
                                }
                                
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </Layout>
        )    
    }
    
}

const mapStateToProps = state => {
    return{
        user : state.usr,
        func : state.func
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setTrendingChallenge : (challenge) => dispatch({
            type : 'SET_TRENDING_CHALLENGE',
            payload : challenge
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
