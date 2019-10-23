import * as AnswerApiUtil from '../util/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

const receiveAnswers = answers => ({
    type: RECEIVE_ANSWERS,
    answers: answers
});

const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER,
    answer: answer
});

const removeAnswer = id => ({
    type: REMOVE_ANSWER,
    id
});

export const fetchAnswers = questionId => dispatch => (
    AnswerApiUtil.fetchAnswers(questionId)
        .then(answers => dispatch(receiveAnswers(answers)))
);

export const fetchAnswer = id => dispatch => (
    AnswerApiUtil.fetchAnswer(id)
        .then(answer => dispatch(receiveAnswer(answer)))
);

export const createAnswer = answer => dispatch => (
    AnswerApiUtil.createAnswer(answer)
        .then(answer => dispatch(receiveAnswer(answer)))
);

export const updateAnswer = answer => dispatch => (
    AnswerApiUtil.updateAnswer(answer)
        .then(answer => dispatch(receiveAnswer(answer)))
);

export const deleteAnswer = id => dispatch => (
    AnswerApiUtil.deleteAnswer(id)
        .then(answer => dispatch(removeAnswer(answer.id)))
);