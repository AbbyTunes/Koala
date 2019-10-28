import { connect } from 'react-redux';
import { fetchAnswers, updateAnswer, deleteAnswer } from '../../../actions/answer_actions';
import { fetchQuestion } from '../../../actions/question_actions';
import ProfileAnswerIndex from './profile_answers_index';
import AnswerIndexStylesheet from '../../../stylesheets/question_answer_index.scss';
import ProfileAnswerIndexStylesheet from '../../../stylesheets/profile_answers_index.scss';

const mapStateToProps = state => {
  return ({
  answers: Object.values(state.entities.answers),
  currentUser: state.session.user
})};

const mapDispatchToProps = dispatch => ({
  fetchAnswers: optionId => dispatch(fetchAnswers(optionId)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  deleteAnswer: id => dispatch(deleteAnswer(id)), 
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProfileAnswerIndex);