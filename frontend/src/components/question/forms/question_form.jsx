import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.props.question;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.action(this.state);
		this.props.hideForm()
		this.props.history.push('/questions');
	}

	render() {
		if ( !this.props.question ) {
			return null
		}
		return (
			<div className="question-pop-up">
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

export default withRouter(QuestionForm);
