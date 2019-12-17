import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { createAnswer } from '../../../actions/answer_actions';
import { } from '../../../stylesheets/question_answer_form.scss';

export default props => {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');

  let textarea = null;

  useEffect(() => changeTextarea(), [])

  const changeTextarea = () => {
    if (textarea) {
      textarea.style.height = 'auto';
      if (textarea.scrollHeight > 150) textarea.style.height = (textarea.scrollHeight + 16) + 'px';
    }
  }

  const handleChange = e => {
    changeTextarea();
    setBody(e.currentTarget.value);
  }

  const handleSubmit = () => {
    dispatch(createAnswer({
      question: props.questionId,
      description: body
    }));

    setBody('');
    props.answerSubmitted();
  }

  return (<div className='question-answer-form-container'>
    <div className='answer-header'>
      <Link className='answer-author-icon-link no-select'
        to={props.currentUser ? `/profile/${props.currentUser.id}` : ''}>
        <div className='answer-author-icon'></div>
      </Link>
      <div className='answer-author-date-container'>
        <Link className='answer-author-link'
          to={props.currentUser ? `/profile/${props.currentUser.id}` : ''}>
          <div className='answer-author'>
            {props.currentUser ? `${props.currentUser.firstName} ${props.currentUser.lastName}` : ''}
          </div>
        </Link>
      </div>
    </div>
    <textarea className='answer-input-txt'
      value={body}
      ref={ref => textarea = ref}
      onChange={e => handleChange(e)}
      placeholder='Write your answer' />
    <div className='answer-footer'>
      <button className='answer-input-submit'
        type='button'
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  </div>);
}