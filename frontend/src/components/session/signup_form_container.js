import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
	return {
		signedIn: state.session.isSignedIn,
		errors: state.errors.session
	};
};

const demoUser1 = {
	email: 'bagel@gmail.com',
	password: '123456'
};

const demoUser2 = {
	email: 'name_1@gmail.com',
	password: 'name_1'
};

const mapDispatchToProps = (dispatch) => ({
	login: user => dispatch(login(user)),
	signup: user => dispatch(signup(user)),
	demoLogin1: () => dispatch(login(demoUser1)),
	demoLogin2: () => dispatch(login(demoUser2))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupForm);