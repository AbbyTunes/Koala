import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users: users.data
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user: user.data
});

const removeUser = id => ({
    type: REMOVE_USER,
    id
});

export const fetchUsers = () => dispatch => (
    UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
);

export const fetchUser = id => dispatch => (
    UserApiUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
    UserApiUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
);

export const deleteUser = id => dispatch => (
    UserApiUtil.deleteUser(id)
        .then(user => dispatch(removeUser(user.id)))
);