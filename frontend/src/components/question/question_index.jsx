import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {
	componentDidMount() {
		this.props.fetchQuestions();
	}

	render() {
		const questions = this.props.questions.map((question, idx) => {
			return <QuestionIndexItem 
						key={`question-${idx}`}
						question={question}
						deleteQuestion={this.props.deleteQuestion}
						/>
		});

		return (
			<ul className="question-frame">
				{questions}
			</ul>
		)
	}
}

export default QuestionIndex;