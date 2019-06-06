import './Answer.scss'

import React from 'react'
import PropTypes from 'prop-types'

class Answer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            classNames: ['Answer']
        }
    }

    revealAnswer = () => {
        this.setState(prevState => {
            const isCorrectAnswer = this.props.answer.correct ? 'correct': 'incorrect'
            return { classNames: [...prevState.classNames, isCorrectAnswer]}
        })
    }

    handleClick = () => {
        this.revealAnswer();
        setTimeout(() => {
            this.props.onSelectAnswer(this.props.answer.correct)
        }, 500)
    }

    render(){

        const { answer } = this.props
        const { classNames } = this.state

        const className = classNames.join(' ');

        return (
            <div 
                className={className}
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{__html: answer.content}}
            />
        )
    }
}

Answer.propTypes={
    answer: PropTypes.object.isRequired,
    onSelectAnswer: PropTypes.func.isRequired
}
export default Answer