import React from 'react';
import QuestionIndexItem from './question_index_item';

class ProfileQuestionIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const newQuestions = this.props.questions.filter(question => question.authorId._id === this.props.profileId)
    const questions = newQuestions.map((question, idx) => {
      return <QuestionIndexItem
        key={`question-${idx}`}
        currentUser={this.props.currentUser}
        question={question}
        fetchQuestion={this.props.fetchQuestion}
      />
    });

    return (
      <div className="profile-question-frame question-frame">
        <div className="profile-question-middle question-middle">
          <ul>
            {questions}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProfileQuestionIndex;