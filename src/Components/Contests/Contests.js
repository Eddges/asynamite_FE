import React from 'react'
import Layout from '../Layout/Layout'
import classes from './Contests.module.css'

class Contests extends React.Component {
    state = {
        show : 'active'
    }

    render(){
        return(
            <Layout>
                <div className={classes.Container}>
                    Hello
                </div>
            </Layout>
        )
    }
}

export default Contests