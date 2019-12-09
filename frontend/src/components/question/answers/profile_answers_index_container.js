import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { fetchQuestion } from '../../../actions/question_actions';
import { fetchAnswers, updateAnswer, deleteAnswer } from '../../../actions/answer_actions';
import ProfileAnswerIndex from './profile_answers_index';
import AnswerIndexStylesheet from '../../../stylesheets/user_answer_index.scss';

const mapStateToProps = state => ({
  answers: Object.values(state.entities.answers),
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => {
  return {
  fetchUser: id => dispatch(fetchUser(id)),
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  fetchAnswers: optionId => dispatch(fetchAnswers(optionId)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  deleteAnswer: id => dispatch(deleteAnswer(id))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProfileAnswerIndex);