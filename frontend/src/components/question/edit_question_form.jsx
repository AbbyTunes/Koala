import React from 'react';
import { withRouter } from 'react-router-dom';


class EditQuestionForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.props.question;
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.action(this.state)
			.then(() => this.props.history.push('/questions'));
	}

	render() {
		// const updateDate = Date.now();
		const { question, action, formType } = this.props;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="title"
						placeholder="title"
						value={this.state.title}
						onChange={this.handleInput('title')} />

					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}

export default withRouter(EditQuestionForm);
