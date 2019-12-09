import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const receiveUserSignIn = () => ({
	type: RECEIVE_USER_SIGN_IN
});

export const receiveSignupErrors = errors => ({
	type: RECEIVE_SIGNUP_ERRORS,
	errors
});

export const receiveLoginErrors = errors => ({
	type: RECEIVE_LOGIN_ERRORS,
	errors
});


export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => (
	APIUtil.signup(user).then(res => {
		const { token } = res.data;
		localStorage.setItem('jwtToken', token);
		APIUtil.setAuthToken(token);
		const decoded = jwt_decode(token);
		dispatch(receiveCurrentUser(decoded))
		// dispatch(receiveUserSignIn())
		}) 
	.catch(err => (
		dispatch(receiveSignupErrors(err.response.data))
	))
);

export const login = user => dispatch => (
	APIUtil.login(user).then(res => {
		const { token } = res.data;
		localStorage.setItem('jwtToken', token);
		APIUtil.setAuthToken(token);
		const decoded = jwt_decode(token);
		dispatch(receiveCurrentUser(decoded))
	})
		.catch(err => {
		dispatch(receiveLoginErrors(err.response.data));
    })
);

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutUser());
};