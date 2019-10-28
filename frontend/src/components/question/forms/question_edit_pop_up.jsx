import React from "react";
// import { Link } from "react-router-dom";
import EditQuestionContainer from "./edit_question_container";
import QuestionPopUpStylesheet from "../../../stylesheets/question_pop_up.scss";

class QuestionEditPopUp extends React.Component {

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
			<div>
				<li className="question-menu-edit" onClick={this.showForm}>Edit Question</li>

				{this.state.showForm ? (
					<div>
						<div className="modal" onClick={this.hideForm}></div>
						<EditQuestionContainer hideForm={this.hideForm} />
					</div>
				) : (null)
				}
			</div>
		)
	}
}

export default QuestionEditPopUp;