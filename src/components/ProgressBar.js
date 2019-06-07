import './ProgressBar.scss'

import React from 'react'
import { connect } from 'react-redux'

const ProgressBar = ({ counter, questions }) => {
    
    const progress = (counter + 1) / questions.length;

    const style = {
        width: `${progress*100}%`
    }

    return (
        <div style={style} className='ProgressBar'/>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        questions: state.questions
    }
}

export default connect(mapStateToProps)(ProgressBar)