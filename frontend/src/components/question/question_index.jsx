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
				question={question}
				{...this.props}
				/>
		});

		return (
			<div className="question-frame">
				<div className="topic-frame">
					<button className='answer-creation-debugger'
						onClick={this.handleCreate}>
						Create All Answers
					</button>
					<button className='answer-deletion-debugger'
						onClick={this.props.deleteAnswers}>
						Delete All Answers
					</button>
				</div>
				<div className="question-middle">
					<div className="new-question">New Questions</div>
					<ul>
						{questions}
					</ul> 
				</div>
				
			</div>
		)
	}
}

export default QuestionIndex;