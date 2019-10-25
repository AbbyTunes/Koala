import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileAnswerIndexItem from './profile_answer_index_item';

class ProfileAnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswers({ userId: this.props.profileId});
  }

  render() {
    const answers = this.props.answers.map((answer, idx) =>
      <ProfileAnswerIndexItem
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