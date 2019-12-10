import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from './answers/question_answer_form_container';

class QuestionIndexItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			answers: [],
			answerIcon: true,
			answerForm: false
		};

		this.toggleAnswer = this.toggleAnswer.bind(this);
		this.answerSubmitted = this.answerSubmitted.bind(this);
	}

	toggleAnswer() {
		if (!this.state.answerForm) this.setState({ answerForm: true });
	}

	componentDidMount() {
		this.props.fetchAnswers({ questionId: this.props.question._id })
			.then(answers => {
				this.setState({ answers: answers.answers });

				if (answers.answers.some(answer => answer.author._id === this.props.currentUser.id)) {
					this.setState({ answerIcon: false });
					return;
				}
			});
	}

	answerSubmitted() {
		this.setState({ answerIcon: false });
		this.setState({ answerForm: false });
	}

	render() {

		const { question } = this.props;

		// debugger;
		const createDate =  (new Date(question.createDate)).toLocaleDateString('en-US', {
			year: 'numeric', month: 'short', day: 'numeric'
		});
		const questionAuthor = (
			<div className="question-author">by <Link to={`/profile/${question.authorId._id}`}>
					{question.authorId.firstName} {question.authorId.lastName}
				</Link>
			</div>
		);

		let AnswerInfo;
		
		if (this.state.answers.length) {

			let answerArr = this.state.answers; 
			let sortedAnswerArr = answerArr.sort((a, b) => b.date - a.date);
			let lastAnswer = sortedAnswerArr[0];
			let lastAnswerAuthor = (
				<div className="question-author">
					<Link to={`/profile/${lastAnswer.author._id}`}>
						{lastAnswer.author.firstName} {lastAnswer.author.lastName}
					</Link>
				</div>
			)

			let answerDate = (new Date(lastAnswer.date)).toLocaleDateString('en-US', {
				year: 'numeric', month: 'short', day: 'numeric'
			});

			AnswerInfo = (
				<div className="question-1">
					<div className="question-dot">·</div>
					Last answered by {lastAnswerAuthor} {" "} on {" "} {answerDate} 
				</div>
			)
		} else {
			AnswerInfo = null;
		}

		return (
			<li className="question-item">
				<div className="question-left">

					<div className="question-1">
						Question added {questionAuthor} {" "} on {" "} {createDate}
					</div>
					<div className="question-2"><Link to={`/questions/${question._id}`}>{question.title}</Link></div>
					<div className="question-3">
						<div className="question-answer">
							<Link to={`/questions/${question._id}`}>{this.state.answers.length} answers</Link>
						</div>
						{ AnswerInfo }
					</div>
					<div className="question-icon">
						<ul>
							<li className={`answer-form-btn${this.state.answerForm ? ' active' : ''}${this.state.answerIcon ? '' : ' hidden'}`}
								onClick={this.toggleAnswer}>
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
									<g transform="translate(2.500000, 3.500000)">
										<g transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)">
											<path className='svg-base pen-body' d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" strokeLinecap="round" strokeLinejoin="round"></path>
										</g>
										<path className='svg-base border' d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" strokeLinecap="round" strokeLinejoin="round"></path>
									</g>
								</svg>
								<div className="question-left-icon">
									Answer
									<div className="question-dot">·</div>
									<div className="question-number">{this.state.answers.length}</div>
								</div>
							</li>
						</ul>
						<div className="question-icon-right">
						</div>
					</div>
					{this.state.answerForm ? <AnswerFormContainer question={question} answerSubmitted={this.answerSubmitted} /> : ''}
				</div>
			</li>
		)
	}

}

export default QuestionIndexItem;