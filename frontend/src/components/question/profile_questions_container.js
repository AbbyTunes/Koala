import { connect } from 'react-redux';
import { fetchQuestions, createQuestion, deleteQuestion } from '../../actions/question_actions';
import ProfileQuestionIndex from './profile_questions_index';
import QuestionIndexStylesheet from '../../stylesheets/question_index.scss';
import ProfileQuestionIndexStylesheet from '../../stylesheets/profile_questions_index.scss';

const mapStateToProps = state => ({
  questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  createQuestion: (data) => dispatch(createQuestion(data)),
  deleteQuestion: (id) => dispatch(deleteQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileQuestionIndex);