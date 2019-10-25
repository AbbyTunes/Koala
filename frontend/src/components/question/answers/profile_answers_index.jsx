import React from 'react';
import { withRouter } from 'react-router-dom';
import AnswerIndexItem from './question_answer_index_item';

class ProfileAnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswers({ userId: this.props.profileId});
  }

  render() {
    const answers = this.props.answers.map((answer, idx) =>
      <AnswerIndexItem
        key={`answer-${idx}`}
        answer={answer}
        {...this.props} />
    );

    return (<div className='question-answer-index-container'>
      {/* need the question it is referencing here */}
      {answers}
    </div>)
  }
}

export default withRouter(ProfileAnswerIndex);