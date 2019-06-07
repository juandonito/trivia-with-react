import './App.scss'

import React from 'react'
import axios from 'axios'

import { connect } from 'react-redux'

import { 
    doGameOver,
    doNextQuestion,
    doSubmitAnswer,
    doQuestionsLoading,
    doQuestionsFetchError,
    doQuestionsFetchSucess
} from '../redux/actions'

import Loader from './Loader'
import QuestionCard from './QuestionCard'
import ScoreBoard from './ScoreBoard'
import withProgressBar from '../HOC/withProgressBar'

class App extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

        this.props.loadingQuestions(true);
        axios.get('https://opentdb.com/api.php?amount=10')
            .then(response => {
                this.props.questionsFetchSuccess(response.data.results)
                this.props.loadingQuestions(false)
            })
            .catch(err => {
                this.props.questionsFetchError(err)
            })
    }

    nextQuestion = (answerIsCorrect) => {

        const { counter, questions } = this.props;

        if(questions.length > counter+1 ){
            this.props.nextQuestion()
        }else{
            this.props.finishGame()
        }

        this.props.submitAnswer(answerIsCorrect)
    }

    render(){

        const {
            gameOver,
            counter,
            score,
            isLoading,
            questions
        } = this.props;

        const currentQuestion =  questions[counter];
        const progress = counter/questions.length;

        let toDisplay = '';

        if(isLoading){
            toDisplay = <Loader/>
        }else if(gameOver){
            toDisplay = <ScoreBoard score={score} maxScore={questions.length} /> 
        }else{
            const QuestionCardWithProgress = withProgressBar(QuestionCard)
            toDisplay = <QuestionCardWithProgress 
                            progress={progress}
                            key={counter}
                            isLoading={isLoading}
                            question={currentQuestion.question}
                            correct_answer={currentQuestion.correct_answer}
                            incorrect_answers={currentQuestion.incorrect_answers}
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
        score: state.score,
        isLoading: state.isLoading,
        err: state.err,
        questions: state.questions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        finishGame: () => dispatch(doGameOver()),
        nextQuestion: () => dispatch(doNextQuestion()),
        submitAnswer: (answerIsCorrect) => dispatch(doSubmitAnswer(answerIsCorrect)),
        loadingQuestions: (bool) => dispatch(doQuestionsLoading(bool)),
        questionsFetchError: (err) => dispatch(doQuestionsFetchError(err)),
        questionsFetchSuccess: (questions) => dispatch(doQuestionsFetchSucess(questions))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)