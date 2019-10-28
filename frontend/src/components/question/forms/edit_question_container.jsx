import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionForm from './question_form';
import { fetchQuestion, updateQuestion } from '../../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {

	const currentUser = state.session.user;
	const defaultQuestion = { title: '' };
	const questionId = ownProps.match.params.question_id;
	
	const question = state.entities.questions[questionId] || defaultQuestion;
	const formType = 'Update Question';

	return { question, formType, currentUser };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
		fetchQuestion: () => dispatch(fetchQuestion(questionId)),
		action: (question) => dispatch(updateQuestion(question))
	}
};

class EditQuestionForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.props.question;
	}

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

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm)
);