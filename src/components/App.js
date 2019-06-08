import './App.scss'

import React from 'react'

import { connect } from 'react-redux'

import { doFetchQuestions } from '../redux/actions'

import Loader from './Loader'
import QuestionCard from './QuestionCard'
import ScoreBoard from './ScoreBoard'

class App extends React.Component{

    componentDidMount(){
        this.props.fetchQuestions()
    }

    render(){

        console.log(this.props)

        const {
            gameOver,
            counter,
            isLoading
        } = this.props;

        let toDisplay = '';

        if(gameOver){
            toDisplay = <ScoreBoard /> 
        }else if(isLoading){
            toDisplay = <Loader />
        }else{
            toDisplay = <QuestionCard key={counter} />
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
        fetchQuestions: () => dispatch(doFetchQuestions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)