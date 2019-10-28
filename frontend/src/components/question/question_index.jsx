import React from 'react';
import QuestionIndexItem from './question_index_item';
import CreateQuestionContainer from './forms/create_question_container';

class QuestionIndex extends React.Component {
	
	componentDidMount() {
		this.props.fetchQuestions();
	}

	render() {
		// const date = Date.now
		const questions = this.props.questions.map((question, idx) => {
			return <QuestionIndexItem 
						key={`question-${idx}`}
						question={question}
						deleteQuestion={this.props.deleteQuestion}
						/>
		});

		return (
			<div className="question-frame">
				<div className="topic-frame">
					<button className='answer-deletion-debugger'
						onClick={this.props.removeAnswers}>
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