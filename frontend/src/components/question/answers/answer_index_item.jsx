import React from 'react';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

const AnswerIndexItem = ({ answer, deleteAnswer }) => {

    // Add locale-specific relative date/time formatting rules
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US');

    return (
        <li className="answer-item">
        <div className="answer-left">
            {/* <div>{answer.topics}</div> */}
            <div className="answer-title">{answer.title}</div>
            <div className="answer-time">Last created {timeAgo.format(Date.now() - 60 * 1000, 'time')} </div>
            <ul className="answer-option">
            <li>Answer</li>
            <li>Follow</li>
            <li>Share</li>
            </ul>
        </div>
        <div className="answer-right">
            <div className="answer-hide"></div>
            <div className="answer-more"></div>
        </div>
        </li>
    )
}

export default withRouter(AnswerIndexItem);