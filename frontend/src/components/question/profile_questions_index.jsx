import React from 'react';
import QuestionIndexItem from './question_index_item';
// import QuestionCreateContainer from './question_create_container';

class ProfileQuestionIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const newQuestions = this.props.questions.filter(question => question.authorId === this.props.profileId)
    const questions = newQuestions.map((question, idx) => {
      return <QuestionIndexItem
        key={`question-${idx}`}
        question={question}
        deleteQuestion={this.props.deleteQuestion}
      />
    });

    return (
      <div className="profile-question-frame question-frame">
        <div className="profile-question-middle question-middle">
          {/* <div className="add-question">
						<QuestionCreateContainer />
					</div> */}

          <ul>
            {questions}
          </ul>
        </div>

      </div>
    )
  }
}

export default ProfileQuestionIndex;