import { combineReducers } from 'redux';
import questions from './questions_reducer';
import answers from './answers_reducer';

const EntitiesReducer = combineReducers({
	questions,
	answers
});

export default EntitiesReducer;