import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.props.question;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		
		return (e) => {
			// console.log(e.target.value)
			this.setState({ [field]: e.target.value })
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		
		this.props.action(this.state)
		.then(res => {
			// console.log(res);
			this.props.history.push(`/questions/${res.question._id}`);
		})
		// .then(err => {
		// 	console.log(err);
		// })
		this.props.hideForm();
	}

	render() {
		if ( !this.props.question ) {
			return null
		}
		return (
		<div className="question-pop-up">
			<div className="question-form-1">
			<div className="form-1-left">{this.props.formType}</div>
			<div className="form-1-right" onClick={this.props.hideForm}>
				<svg
				width="24px"
				height="24px"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				>
				<g
					id="small_close"
					className="icon_svg-stroke"
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					stroke="#666666"
					strokeWidth="1.5"
				>
					<path
					d="M12,6 L12,18"
					transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
					></path>
					<path
					d="M18,12 L6,12"
					transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
					></path>
				</g>
				</svg>
			</div>
			</div>

			<div className="question-form-2">
			<form onSubmit={this.handleSubmit}>
				<input
				id="form-2-title"
				type="title"
				placeholder="title"
				value={this.state.title}
				onChange={this.handleInput("title")}
				/>

				<input
				className="form-2-description"
				type="description"
				placeholder="description (Optional)"
				value={this.state.description}
				onChange={this.handleInput("description")}
				/>

				<input
				className="form-2-image"
				type="image_url"
				placeholder="image url (Optional)"
				value={this.state.image_url}
				onChange={this.handleInput("image_url")}
				/>

				<div className="form-3-cancel" onClick={this.props.hideForm}>
				cancel
				</div>
				<input
				className="form-3-submit"
				type="submit"
				value={this.props.formType}
				/>
			</form>
			</div>
		</div>
		);
	}
}

export default withRouter(QuestionForm);
