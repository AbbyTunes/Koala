import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';

const mapStateToProps = state => {
	// const sessionId = state.session.id;
	// const users = state.entities.users;
	// const currentUser = users[sessionId];

	const question = { title: '' };
	const formType = 'Add Question';

	return { question, formType };
};

const mapDispatchToProps = (dispatch) => ({
	action: (question) => dispatch(createQuestion(question)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
