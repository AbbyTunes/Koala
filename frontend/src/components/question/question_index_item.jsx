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
				</div>
				<div className="question-2"><Link to="/">{question.title}</Link></div>
				<div className="question-3">
					<div className="question-answer"><Link to="/">100 answers</Link> </div>
					<div className="question-1">
						. Last created { timeAgo.format(Date.now() - 60 * 1000, 'time') } ago 
					</div>
				</div>
				<ul className="question-4">
					<li>Follow</li> 
					<li>Share</li>
					<li>Comment</li>
				</ul>
			</div>
			<div className="question-right">
				<div className="question-hide"></div>
				<ul className="question-more">
					<li>downvote</li>
					<li>more</li>
				</ul>
			</div>
		</li>
	)
}

export default QuestionIndexItem;