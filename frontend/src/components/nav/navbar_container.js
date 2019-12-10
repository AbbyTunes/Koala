import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
	// console.log(state);
	return {
	loggedIn: state.session.isAuthenticated,
	currentUser: state.session.user
}};

export default connect(
	mapStateToProps,
	{ logout }
)(NavBar);