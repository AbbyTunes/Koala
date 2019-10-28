import { connect } from 'react-redux';
import { removeAnswers } from '../../actions/answer_actions';
import { fetchQuestions, createQuestion, deleteQuestion } from '../../actions/question_actions';
import QuestionIndex from './question_index';
import QuestionIndexStylesheet from '../../stylesheets/question_index.scss';

const mapStateToProps = state => ({
	questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = dispatch => ({
	removeAnswers: () => dispatch(removeAnswers()),
	fetchQuestions: () => dispatch(fetchQuestions()),
	createQuestion: (data) => dispatch(createQuestion(data)),
	deleteQuestion: (id) => dispatch(deleteQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);