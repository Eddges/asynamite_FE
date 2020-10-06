import React from 'react';
import styles from './results.module.css';
import Layout from '../Layout/Layout';
import axios from 'axios';
import star from '../../assets/star.svg'
import {connect} from 'react-redux'

class Results extends React.Component {

    state = {
        showResults : false
    }

    componentDidMount() {
        axios.get('http://13.234.145.69:8003/api/result')
        .then((response) => {
            console.log('Result data : ', response.data)
            this.props.setResults(response.data)
            this.setState({
                ...this.state,
                showResults : true
            })
        })
    }
    render(){
        return (
            <Layout>
           
                <div className = {styles.parent}>
                    <div className = {styles.header_container}>
                        <p className = {styles.heading}> Recent Contests</p>
                    </div>
    
                    <div className = {styles.result_container}>

                        {
                            this.state.showResults ? 
                            this.props.func.results.map((iterator, index) => {
                                return(
                                    <div className={styles.view}>  
                                        <img src= {star} alt="Winner Icon"/>
                                        <div className = {styles.details}>
                                            <p className = {styles.detail_heading}>{iterator.title}</p>
                                            <p className = {styles.winner}> Winner</p>
                                            <div className = {styles.winnerName}>
                                                <p>{iterator.winner_id}</p>
                                            </div>
                                        </div>
                                        <button className={styles.viewButton}>View Results</button>
                                    </div>
                                )
                            })
                             : null
                        }
                        
                    </div>
                </div>
            </Layout>
            
        )
    }
    
}

const mapStateToProps = state => {
    return{
        func : state.func
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setResults : results => dispatch({
            type : 'SET_RESULTS',
            payload : results
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
