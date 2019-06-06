import './ScoreBoard.scss'

import React from 'react'

const ScoreBoard = ({ score, maxScore, replay }) => {
    return (
        <div className='ScoreBoard'>
            <div className='score'>                
                <div>{score/maxScore*100}%</div>
            </div>
        </div>
    )
}

export default ScoreBoard