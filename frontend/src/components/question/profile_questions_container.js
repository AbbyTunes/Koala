import { connect } from 'react-redux';
import { fetchQuestions, createQuestion, deleteQuestion } from '../../actions/question_actions';
import ProfileQuestionIndex from './profile_questions_index';
import { fetchAnswers, createAnswer, deleteAnswers } from '../../actions/answer_actions';
import QuestionIndexStylesheet from '../../stylesheets/question_index.scss';
import ProfileQuestionIndexStylesheet from '../../stylesheets/profile_questions_index.scss';


const mapStateToProps = state => ({
  currentUser: state.session.user,
  questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = dispatch => {
  debugger;
  return {
  fetchQuestions: () => dispatch(fetchQuestions()),
  createQuestion: (data) => dispatch(createQuestion(data)),
  deleteQuestion: (id) => dispatch(deleteQuestion(id)),
  fetchAnswers: answers => dispatch(fetchAnswers(answers)),
  createAnswer: answer => dispatch(createAnswer(answer)),
  deleteAnswers: () => dispatch(deleteAnswers())
}};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileQuestionIndex);