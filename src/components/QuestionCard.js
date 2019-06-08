import './QuestionCard.scss'

import React from 'react'

import AnswerList from './AnswerList'
import { connect } from 'react-redux'

const QuestionCard = ({ question }) => {

    console.log(question);

    const { correct_answer, incorrect_answers } = question;

    return (
        <div className='QuestionCard'>
            <div className='question' dangerouslySetInnerHTML={{__html: question.question}}/>
            <AnswerList correct_answer={correct_answer} incorrect_answers={incorrect_answers} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        question : state.questions[state.counter]
    }
}

export default connect(mapStateToProps)(QuestionCard)