import './Answer.scss'

import React from 'react'

const Answer = ({ answer, onSelectAnswer }) => {

    return (
        <div 
            className={`Answer ${answer.correct ? 'correct': 'incorrect'}`}
            onClick={() => onSelectAnswer(answer.correct)}
            dangerouslySetInnerHTML={{__html: answer.content}}
        />
    )
}

export default Answer