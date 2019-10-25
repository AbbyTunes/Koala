import React from 'react';
import { withRouter } from 'react-router-dom';
import AnswerIndexItem from './user_answer_index_item';

class AnswerIndex extends React.Component {
    componentDidMount() {
        if (this.props.currentUser._id === parseInt(this.props.match.params.user_id)) {
            this.props.fetchAnswers({ currentUserId: true });
        } else {
            this.props.fetchAnswers({ userId: this.props.match.params.user_id });
        }
    }

    render() {
        const answers = this.props.answers.map((answer, idx) => 
            <AnswerIndexItem
                key={`answer-${idx}`}
                answer={answer}
                {...this.props} />
        );

        return (<div className='user-answer-index-container'>
            <div className='answer-count'>
                {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
            </div>
            {answers}
        </div>)
    }
}

export default withRouter(AnswerIndex);