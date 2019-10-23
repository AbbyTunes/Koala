import { combineReducers } from 'redux';
import questions from './questions_reducer';

const EntitiesReducer = combineReducers({
	questions
});

export default EntitiesReducer;