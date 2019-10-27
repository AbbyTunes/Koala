import React from "react";
import { Link } from "react-router-dom";
import CreateQuestionContainer from "./create_question_container";
import QuestionPopUpStylesheet from "../../../stylesheets/question_pop_up.scss";

class QuestionPopUp extends React.Component {

	constructor(props) {
		super(props)
		this.state = { showForm: false }
		this.showForm = this.showForm.bind(this);
		this.hideForm = this.hideForm.bind(this);
	}

	showForm() {
		this.setState({ showForm: true })
	}

	hideForm() {
		this.setState({ showForm: false })
	}

	render() {
		return (
			// <div className="question-form">
			<div>
				<div id="ask-question-modal-button" onClick={this.showForm}>Add Question</div>

				{this.state.showForm ? (
					<div className="full-screen">
						<div className="modal" onClick={this.hideForm}></div>
						<CreateQuestionContainer />
					</div>
					) : (null)
				}
			</div>
		)
	}
}

export default QuestionPopUp;