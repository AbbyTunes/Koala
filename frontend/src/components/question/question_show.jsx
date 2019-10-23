import React from "react";

class QuestionShow extends React.Component {

	componentDidMount() {
		this.props.fetchQuestion()
	}
	render() {
		const {question} = this.props;
		if (question) {
			return (
				<div>
					title: {question.title}
					<br/>
					description: "{question.description}""
				</div>
			)
		} else {
			return null
		}	
	}
		
}

export default QuestionShow;