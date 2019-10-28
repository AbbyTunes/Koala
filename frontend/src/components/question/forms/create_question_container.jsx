import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionForm from './question_form';
import { createQuestion } from '../../../actions/question_actions';

const mapStateToProps = state => {
	const currentUser = state.session.user;
	const question = { title: '' };
	const formType = 'Add Question';

	return { question, formType, currentUser };
};

const mapDispatchToProps = (dispatch) => ({
	action: (question) => dispatch(createQuestion(question)),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(QuestionForm)
);
