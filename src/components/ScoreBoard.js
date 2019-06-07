import './ScoreBoard.scss'

import React from 'react'

import { connect } from 'react-redux'

const ScoreBoard = ({ score, questions }) => {

    const finalScore = score / questions.length * 100
    
    return (
        <div className='ScoreBoard'>
            <div className='score'>                
                <div>{finalScore}%</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        score: state.score,
        questions: state.questions
    }
}

export default connect(mapStateToProps)(ScoreBoard)