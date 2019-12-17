import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { fetchAnswers, updateAnswer, deleteAnswer } from '../../../actions/answer_actions';
import AnswerIndex from './deprecated_question_answer_index';
import {} from '../../../stylesheets/question_answer_index.scss';

const mapStateToProps = (state, ownProps) => ({
  answers: Object.values(state.entities.answers),
  childDeletion: ownProps.childDeletion,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchAnswers: optionId => dispatch(fetchAnswers(optionId)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);