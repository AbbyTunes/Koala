import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditQuestionForm from './edit_question_form';
import { fetchQuestion, updateQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {

	const defaultQuestion = { title: '' };
	// debugger
	const questionId = ownProps.match.params.question_id;
	const question = state.entities.questions[questionId] || defaultQuestion;
	const formType = 'Update Question';

	return { question, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
		fetchQuestion: () => dispatch(fetchQuestion(questionId)),
		action: (question) => dispatch(updateQuestion(question))
	}
	
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm)
);