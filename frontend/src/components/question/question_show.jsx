import React from "react";
import AnswerIndexContainer from './answers/question_answer_index_container';

class QuestionShow extends React.Component {

	componentDidMount() {
		this.props.fetchQuestion()
	}
	render() {
		const {question} = this.props;
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
							<div className="show-description">{question.description}</div>
							
							<div className="question-icon">
								<ul>
									<li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g stroke="none" fill="none" fillRule="evenodd" strokeLinecap="round">
												<g id="follow" class="icon_svg-stroke" stroke="#666" stroke-width="1.5">
													<path d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5" id="lines"></path>
													<circle id="circle" cx="7.5" cy="17" r="2" class="icon_svg-fill" fill="none"></circle>
												</g>
											</g>
										</svg>
										<div className="question-icon-left">
											Follow
								<div className="question-dot">·</div>
											<div className="question-number">20{}</div>
										</div>

									</li>
									{/* <li>Share</li>
						<li>Comment</li> */}
								</ul>
								<div className="question-icon-right">
									<li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g id="downvote" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round">
												<polygon transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) " points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>
											</g>
										</svg>
									</li>
									<li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g id="overflow" class="icon_svg-stroke" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd">
												<path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path>
											</g>
										</svg>
									</li>

								</div>
							</div>
							
							<AnswerIndexContainer />
						</div>
						<div className="show-right">
							<div className="top-questions">Newest questions</div>
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