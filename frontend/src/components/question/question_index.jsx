import React from 'react';
import QuestionIndexItem from './question_index_item';
// import QuestionCreateContainer from './question_create_container';

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
			<div className="question-frame">
				<div className="topic-frame">

				</div>
				<div className="question-middle">
					{/* <QuestionCreateContainer /> */}
					creating something here
					<ul>
						{questions}
					</ul> 
				</div>
				
			</div>
		)
	}
}

export default QuestionIndex;