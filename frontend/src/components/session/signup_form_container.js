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

};

const demoUser2 = {

};

const mapDispatchToProps = (dispatch) => {
	return {
		signup: user => dispatch(signup(user)),
        demoLogin1: () => dispatch(login(demoUser1)),
        demoLogin2: () => dispatch(login(demoUser2))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupForm);