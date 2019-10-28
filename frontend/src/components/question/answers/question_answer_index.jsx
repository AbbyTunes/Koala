import React from 'react';
import { withRouter } from 'react-router-dom';
import AnswerIndexItem from './question_answer_index_item';

class AnswerIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAnswers({questionId: this.props.match.params.question_id});
    }

    render() {
        const answers = this.props.answers.map((answer, idx) => 
            <AnswerIndexItem
                key={`answer-${idx}`}
                answer={answer}
                {...this.props} />
        );
        
        return (<div className='question-answer-index-container'>
            <div className='answer-count'>
                {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
            </div>
            {answers.reverse()}
        </div>)
    }
}

export default withRouter(AnswerIndex);