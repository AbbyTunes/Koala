import React from "react";
import AnswerFormContainer from './answers/question_answer_form_container';
import AnswerIndexContainer from './answers/question_answer_index_container';
// import MoreDropdown from './forms/more_dropdown';
import QuestionEditPopUp from "./forms/question_edit_pop_up";
import { RECEIVE_ANSWERS } from "../../actions/answer_actions";

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answerIcon: true,
            answerForm: false
        }

        this.toggleAnswer = this.toggleAnswer.bind(this);
		this.childDeletion = this.childDeletion.bind(this);
		this.deleteQuestion = this.deleteQuestion.bind(this);
    }

    toggleAnswer() {
        if (!this.state.answerForm) this.setState({ answerForm: true });
    }

	componentDidMount() {
        this.props.fetchQuestion()
        this.props.fetchAnswers({ questionId: this.props.match.params.question_id })
            .then(answers => {
                answers.answers.forEach(answer => {
                    if (answer.authorId === this.props.currentUser.id) {
                        this.setState({ answerIcon: false });
                        return;
                    }
                })
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.answers && this.props.answers) {
            if (prevProps.answers.length !== this.props.answers.length) {
                this.props.answers.forEach(answer => {
                    if (answer.authorId === this.props.currentUser.id) {
                        this.setState({ answerIcon: false });
                        this.setState({ answerForm: false });
                        return;
                    } else {
                        this.setState({ answerIcon: true });
                        this.setState({ answerForm: false });
                    }
                });
            }
        }
    }

    childDeletion() {
        this.setState({ answerIcon: true });
	}

	deleteQuestion(e) {
		e.preventDefault();
		const questionId = this.props.question._id;
		this.props.deleteQuestion(questionId)
			.then(() => this.props.history.push('/questions'));
	}

	render() {
		const { question } = this.props;

		if (question) {
			return (
				<div className="show-frame">
					<div className="show-session">
						<div className="show-left">
							<div className="show-topic">
								<li>hardcode</li>
								<li>topics</li>
							</div>
							
							<div className="show-title">{question.title}</div>
							<div className="question-icon">
								
								<ul className="question-left">
									<li className={`answer-form-btn${this.state.answerForm ? ' active' : ''}${this.state.answerIcon ? '' : ' hidden'}`}
                                        onClick={this.toggleAnswer}>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
											<g transform="translate(2.500000, 3.500000)">
												<g transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)">
                                                    <path className='svg-base pen-body' d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    {/* <polygon className='svg-base pen-tip' transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon> */}
												</g>
                                                <path className='svg-base border' d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" strokeLinecap="round" strokeLinejoin="round"></path>
											</g>
										</svg>
										<div className="question-left-icon">
											Answer
											<div className="question-dot">·</div>
											<div className="question-number">{this.props.answers.length}</div>
										</div>
									</li>
									<QuestionEditPopUp />
									<li onClick={this.deleteQuestion}>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g id="small_close" className="icon_svg-stroke" fill="none" fillRule="evenodd" strokeLinecap="round" stroke="#666666" strokeWidth="1.5">
												<path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
												<path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
											</g>
										</svg>
										<div className="question-left-icon">
											Delete
										</div>
									</li>
									
								</ul>
								{/* <MoreDropdown deleteQuestion={deleteQuestion} /> */}								
							</div>
							{ this.state.answerForm ? <AnswerFormContainer /> : ''}
                            <AnswerIndexContainer childDeletion={this.childDeletion} />
						</div>
						<div className="show-right">
							{/* <div className="top-questions"></div> */}
						</div>

					</div>					
				</div>
			)
		} else {
			return null
		}	
	}
		
}

export default QuestionShow;