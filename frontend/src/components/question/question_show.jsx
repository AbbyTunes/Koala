import React from "react";
import AnswerIndexContainer from './answers/question_answer_index_container';
import MoreDropdown from './forms/more_dropdown';
import { RECEIVE_ANSWERS } from "../../actions/answer_actions";

class QuestionShow extends React.Component {

	constructor(props) {
		super(props)
		// const author = this.props.fetchUser(this.props.question.authorId)
		// this.state = {
		// 	author: author,
		// 	editor: null
		// }
	}

	componentDidMount() {
		this.props.fetchQuestion()
	}
	render() {
		const { question, answersNum } = this.props;

		// this.props.fetchUser(question.authorId)
		// 	.then(user => this.setState({ author: user }));

		// const updateDate = (new Date(question.createDate)).toLocaleDateString('en-US', {
		// 	year: 'numeric', month: 'short', day: 'numeric'
		// });
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
							{/* <div className="show-editor">
								Last edited on {} by {}
							</div> */}
							<div className="question-icon">
								
								<ul className="question-left">
									<div className="question-3">
										
										
									</div>

									<li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
											<g id="answer" transform="translate(2.500000, 3.500000)" stroke="none" strokeWidth="1.5" fill="none" fillRule="evenodd">
												<g id="pen" transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)">
													<path d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" id="pen_body" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round"></path>
													<polygon id="pen_tip" className="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon>
												</g>
												<path d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" id="bg" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round"></path>
											</g>
										</svg>
										<div className="question-left-icon">
											Answer
											<div className="question-dot">·</div>
											<div className="question-number">{ answersNum }</div>
										</div>
									</li>

									{/* <li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
											<g id="comment" className="icon_svg-stroke icon_svg-fill" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd">
												<path d="M12.0711496,18.8605911 C16.1739904,18.8605911 19.5,15.7577921 19.5,11.9302955 C19.5,8.102799 16.1739904,5 12.0711496,5 C7.96830883,5 4.64229922,8.102799 4.64229922,11.9302955 C4.64229922,13.221057 5.02055525,14.429401 5.67929998,15.4641215 C5.99817082,15.9649865 4.1279592,18.5219189 4.56718515,18.9310749 C5.02745574,19.3598348 7.80252458,17.6358115 8.37002246,17.9406001 C9.45969688,18.5258363 10.7235179,18.8605911 12.0711496,18.8605911 Z"></path>
											</g>
										</svg>
										<div className="question-left-icon">
											Comment
											<div className="question-dot">·</div>
											<div className="question-number">20{}</div>
										</div>
									</li> */}
								</ul>

								{/* <li>
									<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<g stroke="none" fill="none" fillRule="evenodd" strokeLinecap="round">
											<g id="follow" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5">
												<path d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5" id="lines"></path>
												<circle id="circle" cx="7.5" cy="17" r="2" className="icon_svg-fill" fill="none"></circle>
											</g>
										</g>
									</svg>
									<div className="question-left-icon">
										Follow
											<div className="question-dot">·</div>
										<div className="question-number">20{}</div>
									</div>
								</li> */}

								<MoreDropdown />
							</div>
							
							<AnswerIndexContainer />
						</div>
						<div className="show-right">
							<div className="top-questions"></div>
							<div></div>
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