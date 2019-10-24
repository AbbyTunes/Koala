import React from "react";
import AnswerIndexContainer from './answers/answer_index_container';

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
					description: "{question.description}"
					<AnswerIndexContainer />
				</div>
			)
		} else {
			return null
		}	
	}
		
}

export default QuestionShow;