import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const [answer, setAnswer] = useState(props.answer);
  const [downvoteHover, setDownvoteHover] = useState(false);
  const [moreHover, setMoreHover] = useState(false);
  const [moreActive, setMoreActive] = useState(false);

  let voterIdx;
  
  if (answer.voters && !answer.voters.some((voter, idx) => {
    return props.currentUser.id === voter.id ? voterIdx = idx : false;
  })) {
    let answering = Object.assign({}, answer);
    voterIdx = answering.voters.length;
    answering.voters.push({ id: props.currentUser.id, upvote: false, downvote: false });
    props.updateAnswer(answering);
    setAnswer(answering);
  }

  const toggleUpvote = () => {
    let answering = Object.assign({}, answer);

    if (answering.voters[voterIdx].upvote) {
      answering.upvote--;
      answering.voters[voterIdx].upvote = false;
    } else {
      answering.upvote++;
      answering.voters[voterIdx].upvote = true;
    }

    props.updateAnswer(answering);
    setAnswer(answering);
  }

  const toggleDownvote = () => {
    let answering = Object.assign({}, answer);

    if (answering.voters[voterIdx].downvote) {
      answering.downvote--;
      answering.voters[voterIdx].downvote = false;
    } else {
      answering.downvote++;
      answering.voters[voterIdx].downvote = true;
    }

    props.updateAnswer(answering);
    setAnswer(answering);
  }

  const handleDelete = () => {
    toggleMore();
    props.deleteAnswer(answer._id);
    props.updateQuestionShow();
  }

  const toggleMore = () => moreActive ? setMoreActive(false) : setMoreActive(true);

  let author, description, upvoteCount, upvoted, downvoted, date;

  if (answer.voters) {
  
    author = answer.author;
    description = answer.description;
    upvoteCount = answer.upvote;
    upvoted = answer.voters[voterIdx].upvote;
    downvoted = answer.voters[voterIdx].downvote;
    date = (new Date(answer.date)).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }

  const upvoteClass = 'answer-upvote'
    + (upvoted ? ' active' : '');
  const downvoteClass = 'answer-downvote'
    + (downvoted ? ' active' : '')
    + (downvoteHover ? ' tooltip' : '');
  const moreClass = 'answer-more'
    + (moreHover ? ' tooltip' : '');

  return (<div className='answer-index-item-container'>
    <div className='content-divider'></div>
    <div className='answer-header'>
      <Link className='answer-author-icon-link no-select'
        to={author ? `/profile/${author._id}` : ''}>
        <div className='answer-author-icon'></div>
      </Link>
      <div className='answer-author-date-container'>
        <Link className='answer-author-link'
          to={author ? `/profile/${author._id}` : ''}>
          <div className='answer-author'>
            {author ? `${author.firstName} ${author.lastName}` : ''}
          </div>
        </Link>
        <div className='answer-date'>
          Answered {date}
        </div>
      </div>
    </div>
    <div className='answer-body'>
      {description}
    </div>
    <div className='answer-footer no-select'>
      <div className={upvoteClass}
        onClick={toggleUpvote}>
        <span className='svg-icon'>
          <svg width='24px' height='24px' viewBox='0 0 24 24'>
            <g className='svg-base'>
              <polygon points='12 4 3 15 9 15 9 20 15 20 15 15 21 15'></polygon>
            </g>
          </svg>
        </span>
        <div className='upvote-txt'>
          Upvote
        </div>
        <div className='upvote-bullet'>
          ·
        </div>
        <div className='upvote-count'>
          {upvoteCount}
        </div>
      </div>
      <div className='footer-right'>
        <div className={downvoteClass}
          onClick={toggleDownvote}>
          <span className='svg-icon'
            onMouseEnter={() => setDownvoteHover(true)}
            onMouseLeave={() => setDownvoteHover(false)}>
            <svg width='24px' height='24px' viewBox='0 0 24 24'>
              <g className='svg-base'>
                <polygon transform='translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000)' points='12 4 3 15 9 15 9 20 15 20 15 15 21 15' />
              </g>
            </svg>
          </span>
        </div>
        {props.currentUser.id === author._id ? <div className={moreClass}>
          <span className='svg-icon'
            onMouseEnter={() => setMoreHover(true)}
            onMouseLeave={() => setMoreHover(false)}
            onClick={toggleMore}>
            <svg width='24px' height='24px' viewBox='0 0 24 24'>
              <g className='svg-base'>
                <path d='M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z' />
              </g>
            </svg>
          </span>
          <div className='more-dropdown-container'
            hidden={!moreActive}>
            <div className='option-container'
              onClick={handleDelete}>
              Delete Answer
            </div>
          </div>
        </div> : ''}
      </div>
    </div>
  </div>);
}