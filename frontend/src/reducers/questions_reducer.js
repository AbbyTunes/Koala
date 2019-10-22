import {
	RECEIVE_ALL_QUESTIONS,
	RECEIVE_QUESTION,
	REMOVE_QUESTION 
} from "../actions/question_actions";

const QuestionsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_ALL_QUESTIONS:
			let nextState = Object.assign({}, state);
			// debugger;
			return nextState;
		case RECEIVE_QUESTION:
			return Object.assign({}, state, { [action.question._id]: action.question });
		case REMOVE_QUESTION:
			let newState = Object.assign({}, state);
			delete newState[action.questionId];
			return newState;
		default:
			return state;
	}
}

export default QuestionsReducer;