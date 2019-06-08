import './App.scss'

import React from 'react'

import { connect } from 'react-redux'

import { doFetchQuestions } from '../redux/actions'

import QuestionList from './QuestionList'
import ScoreBoard from './ScoreBoard'

class App extends React.Component{

    componentDidMount(){
        this.props.fetchQuestions()
    }

    render(){

        const {
            gameOver
        } = this.props;

        let toDisplay = '';

        if(gameOver){
            toDisplay = <ScoreBoard /> 
        }else{
            toDisplay = <QuestionList />
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
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestions: () => dispatch(doFetchQuestions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)