import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion } from '../../actions/question_actions';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return { question: state.entities.questions[questionId] }
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
		fetchQuestion: () => dispatch(fetchQuestion(questionId)),
		updateQuestion: () => dispatch(updateQuestion(questionId))
	}
	
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);