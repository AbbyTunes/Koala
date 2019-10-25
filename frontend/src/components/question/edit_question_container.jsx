import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { fetchQuestion, updateQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
	// const sessionId = state.session.id;
	// const users = state.entities.users;
	// const currentUser = users[sessionId];

	const defaultQuestion = { title: '' };

	debugger;
	const questionId = ownProps.match.params.question_id;
	const question = state.questions[questionId] || defaultQuestion;

	const formType = 'Save';

	return { question, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
		fetchQuestion: () => dispatch(fetchQuestion(questionId)),
		action: (question) => dispatch(updateQuestion(question))
	}
	
};

class EditQuestionForm extends React.Component {

	componentDidMount() {
		this.props.fetchQuestion();
	}

	componentDidUpdate(prevProps) {
		const questionId = this.props.match.params.question_id
		if (prevProps.match.params.question_id != questionId) {
			this.props.fetchQuestion(questionId);
		}
	}

	render() {
		const { question, action, formType } = this.props;

		return (
			<QuestionForm
				question={question}
				action={action}
				formType={formType}
				/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);