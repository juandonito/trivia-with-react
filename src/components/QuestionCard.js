import './QuestionCard.scss'

import React from 'react'

import Answer from './Answer'
import { connect } from 'react-redux'

const QuestionCard = ({ question }) => {

    const { correct_answer, incorrect_answers } = question

    let answers = incorrect_answers.map(answer => ({ 
        content: answer,
        correct: false
    }))

    answers = [...answers, { content: correct_answer, correct: true}];

    const answersList = answers.map(
        (answer, index) => <Answer key={index} answer={answer} />
    )

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    return (
        <div className='QuestionCard'>
            <div className='question' dangerouslySetInnerHTML={{__html: question.question}}/>
            <div className='Answers'>
                {shuffle(answersList)}
            </div>
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