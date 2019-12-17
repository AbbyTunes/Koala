import { connect } from 'react-redux';
import { fetchQuestion, fetchQuestions } from '../../actions/question_actions';
import ProfileQuestionIndex from './profile_questions_index';
import { createAnswer } from '../../actions/answer_actions';
import {} from '../../stylesheets/question_index.scss';
import {} from '../../stylesheets/profile_questions_index.scss';


const mapStateToProps = state => ({
  currentUser: state.session.user,
  questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    createAnswer: answer => dispatch(createAnswer(answer))
}};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileQuestionIndex);