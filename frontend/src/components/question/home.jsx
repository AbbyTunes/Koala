import React from 'react';
import QuestionIndexItem from './question_index_item';

class Home extends React.Component {
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
		const questions = this.props.questions.reverse().slice(1, 6).map((question, idx) => {
			return <QuestionIndexItem
				key={`question-${idx}`}
				question={question}
				{...this.props}
			/>
		});

		return (
			<div className="question-frame">
				<div className="question-middle">
					<div className="new-question">Recommended questions for you</div>
					<ul>
						{questions}
					</ul>
				</div>
			</div>
		)
	}
}

export default Home;