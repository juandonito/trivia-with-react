import { 
    GAME_OVER,
    QUESTION_NEXT,
    ANSWER_SUBMIT,
    QUESTIONS_LOADING,
    QUESTIONS_FETCH_ERROR,
    QUESTIONS_FETCH_SUCCESS,
} from './actionType'

const INITIAL_STATE = {
    gameOver: false,
    counter: 0,
    score: 0,
    isLoading: true,
    err: null,
    questions: []
}

const reducer = (state = INITIAL_STATE, action) => { 
    switch(action.type){
        case GAME_OVER: {
            return applyGameOver(state, action)
        }
        case QUESTION_NEXT: {
            return applyNextQuestion(state, action)
        }
        case ANSWER_SUBMIT: {
            return applySubmitAnswer(state, action)
        }
        case QUESTIONS_LOADING: {
            return applyLoading(state, action)
        }
        case QUESTIONS_FETCH_ERROR: {
            return applyQuestionsFetchError(state, action)
        }
        case QUESTIONS_FETCH_SUCCESS: {
            return applyQuestionsFetchSuccess(state, action)
        }
        default: return state
    }
}

const applyGameOver = (state, action) => {
    return {
        ...state,
        gameOver: true
    }
}

const applyNextQuestion = (state, action) => {

    if(state.questions.length > state.counter + 1 ){
        return {
            ...state,
            counter: state.counter + 1
        }
    }else{
        return applyGameOver(state, action)
    }
    
    
}

const applySubmitAnswer = (state, action) => {
    const score = action.answerIsCorrect ? state.score + 1 : state.score;
    return {
        ...state,
        score
    }
}

const applyLoading = (state, action) => {
    return {
        ...state,
        isLoading: action.isLoading
    }
}

const applyQuestionsFetchError = (state, action ) => {
    return {
        ...state,
        err: action.err,
        isLoading: action.isLoading
    }
}

const applyQuestionsFetchSuccess = (state, action) => {
    return {
        ...state, 
        questions: action.questions,
        isLoading: action.isLoading
    }
} 

export default reducer