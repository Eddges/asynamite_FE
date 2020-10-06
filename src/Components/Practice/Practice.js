import React from 'react'
import Layout from '../Layout/Layout'
import PracticeItem from '../PracticeItem/PracticeItem'
import classes from './Practice.module.css'
import axios from 'axios'
import {connect} from 'react-redux'

class Practice extends React.Component{
    state = {
        displayQuestions : false
    }

    componentDidMount() {
        axios.get('http://13.234.145.69:8003/api/question')
        .then(res => {
            console.log('Questions : ', res.data.data)
            this.props.setQuestions(res.data.data)
            this.setState({
                ...this.state,
                displayQuestions : true
            })
        })
    }
    
    render(){
        return(
            <Layout>
                <div className={classes.Container}>
                    <div className={classes.Bar}>
                        <div className={classes.Search}>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className={classes.Controls}>
                            <select className={classes.SelectBorder}>
                                <option>EASY</option>
                                <option>MEDIUM</option>
                                <option>HARD</option>
                            </select>
                            <select className={classes.SelectBorder}>
                                <option>TODO</option>
                                <option>SOLVED</option>
                            </select>
                            <select className={classes.SelectBG}>
                                <option>Arrays</option>
                                <option>Linked Lists</option>
                            </select>
                        </div>
                    </div>

                    <div className={classes.Headings}>
                        <span className={classes.Hash}>#</span>
                        <span className={classes.Title}>Title</span>
                        <span className={classes.Difficulty}>Difficulty</span>
                        <span className={classes.CL}>Collaborative Learning</span>
                    </div>

                    <div className={classes.PracticeList}>
                    {
                        this.props.func.questions && 
                        this.props.func.questions.map((iterator, index) => 
                            <PracticeItem {...iterator} key={index} />
                        )
                        

                    }
                        
                        {/* <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem /> */}
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
        setQuestions : questions => dispatch({
            type : 'SET_QUESTIONS', 
            payload : questions
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Practice)