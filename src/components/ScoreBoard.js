import './ScoreBoard.scss'

import React from 'react'

const ScoreBoard = ({ score, maxScore, replay }) => {
    return (
        <div className='ScoreBoard'>
            <div className='score'>                
                <div>{score}/{maxScore}</div>
            </div>
        </div>
    )
}

export default ScoreBoard