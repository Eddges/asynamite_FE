import React from 'react'
import Layout from '../Layout/Layout'
import PracticeItem from '../PracticeItem/PracticeItem'
import classes from './Practice.module.css'
import axios from 'axios'

class Practice extends React.Component{
    state = null

    componentDidMount() {
        
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
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                        <PracticeItem />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Practice