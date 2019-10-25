import { connect } from 'react-redux';
import { fetchAnswers, updateAnswer, deleteAnswer } from '../../actions/answer_actions';
import { fetchQuestions } from '../../actions/question_actions';

import Profile from './profile';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  answers: Object.values(state.entities.answers),
  questions: Object.values(state.entities.questions),
  currentUser: state.session.user
  
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: optionId => dispatch(fetchAnswers(optionId)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  deleteAnswer: id => dispatch(deleteAnswer(id)),
  fetchQuestions: () => dispatch(fetchQuestions())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);