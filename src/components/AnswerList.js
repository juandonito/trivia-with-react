import './AnswerList.scss'

import React from 'react'

import Answer from './Answer'

const AnswerList = ({ incorrect_answers, correct_answer }) => {

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    let answers = incorrect_answers.map(answer => ({ 
        content: answer,
        correct: false
    }))

    answers = [...answers, { content: correct_answer, correct: true}];

    shuffle(answers);

    const answersList = answers.map(
        (answer, index) => <Answer key={index} answer={answer} />
    )

    return (
        <div className='AnswersList'>
            {answersList}
        </div>
    )
}

export default AnswerList