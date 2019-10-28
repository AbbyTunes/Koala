import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndexItem extends React.Component {

	constructor(props) {
		super(props)
		this.deleteQuestion = this.deleteQuestion.bind(this);
	}

	deleteQuestion(e) {
		e.preventDefault();
		const questionId = this.props.question._id;
		this.props.deleteQuestion(questionId)
			.then()
	}

	render() {

		const { question, deleteQuestion } = this.props;
		const createDate = (new Date(question.createDate)).toLocaleDateString('en-US', {
			year: 'numeric', month: 'short', day: 'numeric'
		});
		// debugger
		return (
			<li className="question-item">
				<div className="question-left">

					<div className="question-1">
						Question added
						<div className="question-dot">·</div>
						<div className="question-topic">
							<Link to="/">topic_name_hard_code</Link>
							{/* <div>{question.topics}</div> */}
						</div>
						<div className="question-hide" onClick={this.deleteQuestion}>
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
								<g id="small_close" className="icon_svg-stroke" fill="none" fillRule="evenodd" strokeLinecap="round" stroke="#666666" strokeWidth="1.5">
									<path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
									<path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
								</g>
							</svg>
						</div>
					</div>
					<div className="question-2"><Link to={`/questions/${question._id}`}>{question.title}</Link></div>
					<div className="question-3">
						<div className="question-answer">
							<Link to="/"> answers</Link>
						</div>
						<div className="question-1">
							<div className="question-dot">·</div>
							Question added on {createDate}
						</div>
					</div>
					<div className="question-icon">
						<ul>
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
								<div className="question-icon-left">
									Answer
												<div className="question-dot">·</div>
									<div className="question-number">{}20</div>
								</div>
							</li>
							{/* <li>
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<g stroke="none" fill="none" fillRule="evenodd" strokeLinecap="round">
										<g id="follow" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5">
											<path d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5" id="lines"></path>
											<circle id="circle" cx="7.5" cy="17" r="2" className="icon_svg-fill" fill="none"></circle>
										</g>
									</g>
								</svg>
								<div className="question-icon-left">
									Follow
									<div className="question-dot">·</div>
									<div className="question-number">20{}</div>
								</div>
							</li>  */}
						</ul>
						<div className="question-icon-right">
							{/* <li>
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<g id="downvote" className="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" strokeWidth="1.5" fillRule="evenodd" strokeLinejoin="round">
										<polygon transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) " points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>
									</g>
								</svg>
							</li> */}
							{/* <div>
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<g id="overflow" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none" fillRule="evenodd">
										<path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path>
									</g>
								</svg>
							</div> */}
						</div>
					</div>
				</div>
			</li>
		)
	}

}

export default QuestionIndexItem;