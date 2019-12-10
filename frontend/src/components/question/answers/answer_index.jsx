import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import AnswerIndexItem from './question_answer_index_item';
import { fetchAnswers, updateAnswer, deleteAnswer } from '../../../actions/answer_actions';
import {} from '../../../stylesheets/question_answer_index.scss';

export default props => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [answers, setAnswers] = useState(props.question.answerIds);

  useEffect(() => {
    props.fetchQuestion();
  }, [match])

  // const [answers, setAnswers] = useState(null);

  // componentDidMount() {
  //   this.props.fetchAnswers({ questionId: this.props.question ? this.props.question._id : this.props.match.params.question_id })
  //     .then(answers => this.setState({ answers: answers.answers }));
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.answers.length !== this.props.answers.length) {
  //     this.props.fetchAnswers({ questionId: this.props.question ? this.props.question._id : this.props.match.params.question_id })
  //       .then(answers => this.setState({ answers: answers.answers }));
  //   }
  //   if (this.state.answers && this.state.answers[0]) {
  //     if (this.props.question._id !== this.state.answers[0].question._id) {
  //       this.props.fetchAnswers({ questionId: this.props.question ? this.props.question._id : this.props.match.params.question_id })
  //         .then(answers => this.setState({ answers: answers.answers }));
  //     }
  //   }
  // }

  let answersIndex = answers.map((answer, idx) =>
    <AnswerIndexItem
      key={`answer-${idx}`}
      answer={answer}
      currentUser={props.currentUser}
      childDeletion={props.childDeletion}
      updateAnswer={answer => dispatch(updateAnswer(answer))}
      deleteAnswer={id => dispatch(deleteAnswer(id))} />
  );

  return (<div className='question-answer-index-container'>
    <div className='answer-count'>
      {answersIndex.length} {answersIndex.length === 1 ? 'Answer' : 'Answers'}
    </div>
    {answersIndex.reverse()}
  </div>)
}