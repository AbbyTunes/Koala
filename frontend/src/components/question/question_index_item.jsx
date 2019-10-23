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
				{/* <div>{question.topics}</div> */}
				<div className="question-title">{question.title}</div>
				<div className="question-time">Last created { timeAgo.format(Date.now() - 60 * 1000, 'time') } </div>
				<ul className="question-option">
					<li>Answer</li>
					<li>Follow</li> 
					<li>Share</li> 
				</ul>
			</div>
			<div className="question-right">
				<div className="question-hide"></div>
				<div className="question-more"></div>
			</div>
		</li>
	)
}

export default QuestionIndexItem;