import React from 'react';
import { withRouter } from 'react-router-dom';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAnswers(this.props.match.params.question_id);
    }

    render() {
        const answers = this.props.answers.map((answer, idx) => 
            <AnswerIndexItem
                key={`answer-${idx}`}
                answer={answer}
                deleteAnswer={this.props.deleteAnswer} />
        );

        return (<div className='answer-index-container'>
            <div className='answer-count'>
                {answers.length} Answers
            </div>
            <div className='content-divider'></div>
            {answers}
        </div>)
    }
}

export default withRouter(AnswerIndex);