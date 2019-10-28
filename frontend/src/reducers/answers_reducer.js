import {
  RECEIVE_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWERS,
  REMOVE_ANSWER
} from "../actions/answer_actions";

const AnswersReducer = (state = [], action) => {
    Object.freeze(state);
    let newState

    switch (action.type) {
        case RECEIVE_ANSWERS:
            return action.answers;
        case RECEIVE_ANSWER:
            newState = Array.from(state);
            let update = false;

            newState.forEach((answer, idx) => {
                if (answer && answer._id === action.answer._id) {
                    newState[idx] = action.answer;
                    update = true;
                    return;
                }
            });

            if (!update) newState.push(action.answer);
            
            return newState;
        case REMOVE_ANSWERS:
            return [];
        case REMOVE_ANSWER:
            newState = Array.from(state);

            newState.forEach((answer, idx) => {
                if (answer && answer._id === action.id) {
                    newState.splice(idx, 1);
                    return;
                }
            });
            
            return newState;
        default:
            return state;
    }
}

export default AnswersReducer;