import React from 'react'
import Layout from '../Layout/Layout'
import classes from './Contests.module.css'
import BinaryImage from '../../assets/Binary.png'
import DoublyLL from '../../assets/DoublyLL.png'
import Hack4 from '../../assets/Hack4.png'
import axios from 'axios'

class Contests extends React.Component {
    state = {
        show : 'active'
    }

    setShow = (text) => {
        this.setState({
            ...this.state,
            show : text
        })
    }

    componentDidMount(){
        axios.get('http://13.234.145.69:8003/api/contest/',{

        }).then(function(response){
            console.log(response.data[0]);
        }).catch(function(error){
            console.log(error)
        }).then(function(){
            console.log('yes');
        })
    }

    render(){
        return(
            <Layout>
                <div className={classes.Container}>
                    <div className={classes.Cards}>
                        <div className={classes.MainActive} style={this.state.show==='active' ? null : {width : '0px', overflow : 'hidden'}}>
                            <div className={classes.Highlighted}>
                                <img src={BinaryImage} alt="Highlighted" />
                            </div>
                            <div className={classes.List}>
                                <img src={DoublyLL} alt="Highlighted" />
                                <img src={Hack4} alt="Highlighted" />
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