import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion, deleteQuestion } from '../../actions/question_actions';
import QuestionShow from './question_show';
import QuestionShowStylesheet from '../../stylesheets/question_show.scss';

const mapStateToProps = (state, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	const question = state.entities.questions[questionId];
	const answersNum = state.entities.answers.length;
	return { question, answersNum }
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
		fetchQuestion: () => dispatch(fetchQuestion(questionId)),
		updateQuestion: () => dispatch(updateQuestion(questionId)),
		deleteQuestion: (id) => dispatch(deleteQuestion(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);