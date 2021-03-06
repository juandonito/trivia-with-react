import triviadb from '../api/triviadb'

import { 
    GAME_OVER,
    QUESTION_NEXT,
    ANSWER_SUBMIT,
    QUESTIONS_LOADING,
    QUESTIONS_FETCH_ERROR,
    QUESTIONS_FETCH_SUCCESS,
} from './actionType'

export const doGameOver = () => {
    return {
        type: GAME_OVER
    }
}

export const doNextQuestion = () => {
    return {
        type: QUESTION_NEXT
    }
}

export const doSubmitAnswer = (answerIsCorrect) => {

    return {
        type: ANSWER_SUBMIT,
        answerIsCorrect
    }
    
}

export const doQuestionsLoading = (bool) => {
    return {
        type: QUESTIONS_LOADING,
        isLoading: bool
    }
}

export const doQuestionsFetchError = (err) => {
    return {
        type: QUESTIONS_FETCH_ERROR,
        isLoading: false,
        err
    }
}

export const doQuestionsFetchSucess = (questions) => {
    return {
        type: QUESTIONS_FETCH_SUCCESS,
        isLoading: false,
        questions
    }
}

export const doFetchQuestions = (amount = 10) => {

    return (dispatch) => {

        dispatch(doQuestionsLoading(true));

        triviadb.get('/', {
            params : {
                amount
            }
        })
        .then(response => {
            dispatch(doQuestionsFetchSucess(response.data.results))
            dispatch(doQuestionsLoading(false))
        })
        .catch(err => {
            dispatch(doQuestionsFetchError(err))
        })

    }

}