import './App.scss'

import React from 'react'
import axios from 'axios'

import Loader from './Loader'
import QuestionCard from './QuestionCard'
import ScoreBoard from './ScoreBoard'

class App extends React.Component{

    constructor(props){
        super(props);

        this.state={

            questions: [],
            isLoading: true,
            err: '',
            counter: 0,
            score: 0,
            gameOver: false
        }
    }

    componentDidMount(){

        axios.get('https://opentdb.com/api.php?amount=10')
            .then(response => {
                console.log(response.data.results)
                this.setState({ 
                    questions: response.data.results,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ err })
            })
    }

    nextQuestion = (answerIsCorrect) => {

        const { counter, questions } = this.state;
        console.log(counter);
        console.log(questions.length);

        if(questions.length > counter+1 ){
            this.setState(prevState => {
                return { counter: prevState.counter+1 }
            })
        }else{
            this.setState({
                gameOver: true
            })
        }

        if(answerIsCorrect){
            this.setState(prevState => {
                return { score: prevState.score+1}
            })
        }
    }

    render(){

        const { 
            questions, 
            isLoading, 
            counter ,
            score,
            gameOver
        } = this.state;

        const currentQuestion =  questions[counter];

        let toDisplay = '';

        if(isLoading){
            toDisplay = <Loader/>
        }else if(gameOver){
            toDisplay = <ScoreBoard score={score} maxScore={questions.length} /> 
        }else{
            toDisplay = <QuestionCard 
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



export default App