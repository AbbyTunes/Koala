import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Profile from './profile';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

export default connect(
  mapStateToProps,
  {}
)(Profile);