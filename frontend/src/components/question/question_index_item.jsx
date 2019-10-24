import React from 'react';
import { Link } from 'react-router-dom';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const QuestionIndexItem = ({ question, deleteQuestion }) => {

	// Add locale-specific relative date/time formatting rules
	TimeAgo.addLocale(en)
	const timeAgo = new TimeAgo('en-US')

	return (
		<li className="question-item">
			<div className="question-left">
				
				<div className="question-1">
					Question added . 
					<div className="question-topic">
						<Link to="/">topic_name_hard_code</Link>
						{/* <div>{question.topics}</div> */}
					</div>
					<div className="question-hide">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<g id="small_close" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5">
								<path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
								<path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
							</g>
						</svg>
					</div>
				</div>
				<div className="question-2"><Link to="/">{question.title}</Link></div>
				<div className="question-3">
					<div className="question-answer"><Link to="/">100 answers</Link> </div>
					<div className="question-1">
						. Last created { timeAgo.format(Date.now() - 60 * 1000, 'time') } ago 
					</div>
				</div>
				<div className="question-4"> 
					<ul>
						<li>Follow</li> 
						<li>Share</li>
						<li>Comment</li>
					</ul>
					<ul className="question-more">
						<li>downvote</li>
						<li>more</li>
					</ul>
				</div>
			</div>
		</li>
	)
}

export default QuestionIndexItem;