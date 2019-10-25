import {
    RECEIVE_USERS,
    RECEIVE_USER,
    REMOVE_USER
} from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState

    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            newState = Array.from(state);
            let update = false;

            newState.forEach((user, idx) => {
                if (user._id === action.user._id) {
                    newState[idx] = action.user;
                    update = true;
                    return;
                }
            });

            if (!update) newState.push(action.user);

            return newState;
        case REMOVE_USER:
            newState = Array.from(state);

            newState.forEach((user, idx) => {
                if (user._id === action.user._id) {
                    delete newState[action.id];
                    return;
                }
            });

            return newState;
        default:
            return state;
    }
}

export default UsersReducer;