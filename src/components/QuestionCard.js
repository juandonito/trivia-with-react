import './QuestionCard.scss'

import React from 'react'

import Answer from './Answer'

const QuestionCard = ({ question, correct_answer, incorrect_answers, onSelectAnswer }) => {

    let answers = incorrect_answers.map(
        answer => ({ 
            content: answer,
            correct: false
        }))

    answers = [...answers, { content: correct_answer, correct: true}];

    const answersList = answers.map(
        (answer, index) => <Answer key={index} answer={answer} onSelectAnswer={onSelectAnswer}/>
    )

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    return (
        <div className='QuestionCard'>
            <div className='question' dangerouslySetInnerHTML={{__html: question}}/>
            <div className='Answers'>
                {shuffle(answersList)}
            </div>
        </div>
    )
}

export default QuestionCard