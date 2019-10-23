import {
  RECEIVE_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWER
} from "../actions/answer_actions";

const AnswersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ANSWERS:
            return action.answers;
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        case REMOVE_ANSWER:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default AnswersReducer;