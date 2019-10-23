import { connect } from 'react-redux';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import QuestionIndex from './question_index';

const mapStateToProps = state => ({
	questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = dispatch => ({
	fetchQuestions: () => dispatch(fetchQuestions()),
	deleteQuestion: (id) => dispatch(deleteQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);