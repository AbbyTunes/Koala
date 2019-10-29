import {
  RECEIVE_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWERS,
  REMOVE_ANSWER
} from "../actions/answer_actions";

const _nullState = {}

const AnswersReducer = (state = _nullState, action) => {
    Object.freeze(state);
    let newState

    switch (action.type) {
        case RECEIVE_ANSWERS:
            newState = {};
            action.answers.forEach(answer => newState[answer._id] = answer);
            return newState;
        case RECEIVE_ANSWER:
            return Object.assign({}, state, {[action.answer._id]: action.answer});
        case REMOVE_ANSWERS:
            return _nullState;
        case REMOVE_ANSWER:
            newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default AnswersReducer;