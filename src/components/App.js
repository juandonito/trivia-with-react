import './App.scss'

import React from 'react'

import { connect } from 'react-redux'

import { 
    doGameOver,
    doNextQuestion,
    doSubmitAnswer,
    doFetchQuestions
} from '../redux/actions'

import Loader from './Loader'
import QuestionCard from './QuestionCard'
import ScoreBoard from './ScoreBoard'
import withProgressBar from '../HOC/withProgressBar'

class App extends React.Component{

    componentDidMount(){
        this.props.fetchQuestions()
    }

    nextQuestion = () => {

        const { counter, questions } = this.props;

        if(questions.length > counter+1 ){
            this.props.nextQuestion()
        }else{
            this.props.finishGame()
        }

    }

    render(){

        const {
            gameOver,
            counter,
            isLoading
        } = this.props;

        let toDisplay = '';

        if(isLoading){
            toDisplay = <Loader/>
        }else if(gameOver){
            toDisplay = <ScoreBoard /> 
        }else{
            const QuestionCardWithProgress = withProgressBar(QuestionCard)
            toDisplay = <QuestionCardWithProgress 
                            key={counter}
                            onSelectAnswer={this.nextQuestion}
                        />
        }

        return (
            <div className='App'>
                {toDisplay}
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        gameOver: state.gameOver,
        counter: state.counter,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        finishGame: () => dispatch(doGameOver()),
        nextQuestion: () => dispatch(doNextQuestion()),
        fetchQuestions: () => dispatch(doFetchQuestions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)