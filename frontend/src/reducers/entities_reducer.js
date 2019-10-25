import { combineReducers } from 'redux';
import users from './users_reducer';
import questions from './questions_reducer';
import answers from './answers_reducer';

const EntitiesReducer = combineReducers({
    users,
	questions,
	answers
});

export default EntitiesReducer;