const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5 )
}

export const getAnswers = (state) => {

    const currentQuestion = state.questions[state.counter];

    const correctAnswer = currentQuestion.correct_answer;
    const incorrectAnswers = currentQuestion.incorrect_answers;

    let answers = incorrectAnswers.map(answer => ({ content: answer, correct: false }));

    answers = [...answers, { content: correctAnswer, correct: true }];

    shuffle(answers);

    return answers
}