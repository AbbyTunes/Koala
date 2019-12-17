import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AnswerIndexItem from './question_answer_index_item';
import { updateAnswer, deleteAnswer } from '../../../actions/answer_actions';
import {} from '../../../stylesheets/question_answer_index.scss';

export default props => {
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState(null);

  useEffect(() => setAnswers(props.answers), [props.answers]);

  let answersIndex;

  if (answers) {
    answersIndex = answers.map((answer, idx) =>
      <AnswerIndexItem
        key={`answer-${idx}`}
        answer={answer}
        currentUser={props.currentUser}
        updateQuestionShow={props.updateQuestionShow}
        updateAnswer={answer => dispatch(updateAnswer(answer))}
        deleteAnswer={id => dispatch(deleteAnswer(id))} />
    );
  } else {
    answersIndex = [];
  }

  answersIndex = answersIndex.reverse();

  return (<div className='question-answer-index-container'>
    <div className='answer-count'>
      {answersIndex.length} {answersIndex.length === 1 ? 'Answer' : 'Answers'}
    </div>
    {answersIndex}
  </div>)
}