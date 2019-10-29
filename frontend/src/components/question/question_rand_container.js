import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion, deleteQuestion } from '../../actions/question_actions';
import { fetchAnswers } from '../../actions/answer_actions';
import QuestionShow from './question_show';
import QuestionShowStylesheet from '../../stylesheets/question_show.scss';

const mapStateToProps = (state, ownProps) => {
  const question = ownProps.rand ? ownProps.rand : '';
  return {
    currentUser: state.session.user,
    question: question,
    answers: Object.values(state.entities.answers)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questionId = ownProps.rand ? ownProps.rand._id : '';
  return {
    fetchQuestion: () => dispatch(fetchQuestion(questionId)),
    updateQuestion: () => dispatch(updateQuestion(questionId)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    fetchAnswers: optionId => dispatch(fetchAnswers(optionId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);