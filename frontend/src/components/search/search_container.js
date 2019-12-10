import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchUsers } from '../../actions/user_actions';
import Search from './search';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  questions: Object.values(state.entities.questions),
  users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchQuestions: () => dispatch(fetchQuestions())
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);