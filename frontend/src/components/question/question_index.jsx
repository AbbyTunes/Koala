import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {
	constructor(props) {
		super(props);
		this.handleCreate = this.handleCreate.bind(this);
	}
	
	componentDidMount() {
		this.props.fetchQuestions();
	}

	handleCreate() {
		this.props.questions.forEach(question => {
			this.props.createAnswer({
				question: question._id,
				description: question.title
			})
		})
	}

	render() {
		// const date = Date.now
		const questions = this.props.questions.map((question, idx) => {
			return <QuestionIndexItem 
				key={`question-${idx}`}
				currentUser={this.props.currentUser}
				question={question}
				fetchQuestion={this.props.fetchQuestion}
			/>
		});

		return (
			<div className="question-frame">
				<div className="question-middle">
					<div className="new-question">New Questions</div>
					<ul>
						{questions.reverse()}
					</ul> 
				</div>
			</div>
		)
	}
}

export default QuestionIndex;