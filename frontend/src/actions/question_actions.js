import * as QuestionApiUtil from "../util/question_api_util";

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

const receiveQuestions = (questions) => ({
	type: RECEIVE_ALL_QUESTIONS,
	questions: questions.data
});

const receiveQuestion = (question) => ({
	type: RECEIVE_QUESTION,
	question: question.data
});

export const fetchQuestions = () => dispatch => (
	QuestionApiUtil.fetchQuestions().then(questions => dispatch(receiveQuestions(questions)))
);

export const fetchQuestion = (id) => dispatch => (
	QuestionApiUtil.fetchQuestion(id).then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = (question) => dispatch => (
	QuestionApiUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)))
);

export const updateQuestion = (question) => dispatch => (
	QuestionApiUtil.updateQuestion(question, question._id).then(question => dispatch(receiveQuestion(question)))
);

export const deleteQuestion = (questionId) => dispatch => (
	QuestionApiUtil.deleteQuestion(questionId).then(question => dispatch({ type: REMOVE_QUESTION, questionId: question.data._id}))
);