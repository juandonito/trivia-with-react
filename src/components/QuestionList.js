import './QuestionList.scss'

import React from 'react'

import QuestionCard from './QuestionCard'
import withLoader from '../HOC/withLoader'

import { connect } from 'react-redux'

const QuestionList = ({ questions, counter }) => {

    const questionCardList = questions.map((question, index) => <QuestionCard key={index} question={question} />)

    return (
        <div className='QuestionList'>
            {questionCardList[counter]}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        counter: state.counter,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(withLoader(QuestionList))