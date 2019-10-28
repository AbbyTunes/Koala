import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion, deleteQuestion } from '../../actions/question_actions';
import { fetchAnswers } from '../../actions/answer_actions';
import QuestionShow from './question_show';
import QuestionShowStylesheet from '../../stylesheets/question_show.scss';

const mapStateToProps = (state, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
        currentUser: state.session.user,
        question: state.entities.questions[questionId],
        answers: state.entities.answers
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
		fetchQuestion: () => dispatch(fetchQuestion(questionId)),
		updateQuestion: () => dispatch(updateQuestion(questionId)),
        deleteQuestion: (id) => dispatch(deleteQuestion(id)),
        fetchAnswers: optionId => dispatch(fetchAnswers(optionId))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);