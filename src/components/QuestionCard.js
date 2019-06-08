import './QuestionCard.scss'

import React from 'react'

import AnswerList from './AnswerList'
import withProgressBar from '../HOC/withProgressBar'

const QuestionCard = ({ question }) => {

    const { correct_answer, incorrect_answers } = question;

    return (
        <div className='QuestionCard'>
            <div className='question' dangerouslySetInnerHTML={{__html: question.question}}/>
            <AnswerList correct_answer={correct_answer} incorrect_answers={incorrect_answers} />
        </div>
    )
}

export default withProgressBar(QuestionCard)