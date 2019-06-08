import './AnswerList.scss'

import React from 'react'
import { connect } from 'react-redux';

import { getAnswers } from '../redux/selector'

import Answer from './Answer'

const AnswerList = ({ answers }) => {

    const answersList = answers.map(
        (answer, index) => <Answer key={index} answer={answer} />
    )

    return (
        <div className='AnswersList'>
            {answersList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        answers: getAnswers(state)
    }
}

export default connect(mapStateToProps)(AnswerList)