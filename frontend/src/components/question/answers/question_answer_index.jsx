import React from 'react';
import { withRouter } from 'react-router-dom';
import AnswerIndexItem from './question_answer_index_item';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: null
        }
    }

    componentDidMount() {
        this.props.fetchAnswers({questionId: this.props.question ? this.props.question._id : this.props.match.params.question_id})
            .then(answers => this.setState({answers: answers.answers}));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.answers.length !== this.props.answers.length) {
            this.props.fetchAnswers({ questionId: this.props.question ? this.props.question._id : this.props.match.params.question_id })
                .then(answers => this.setState({ answers: answers.answers })); 
        }
        // if (prevProps.location.pathname !== this.props.location.pathname) {
        //     this.props.fetchAnswers({ questionId: this.props.question ? this.props.question._id : this.props.match.params.question_id })
        //         .then(answers => this.setState({ answers: answers.answers }));
        // }
    }

    render() {
        let answers;

        if (this.state.answers) {
            answers = this.state.answers.map((answer, idx) => 
                <AnswerIndexItem
                    key={`answer-${idx}`}
                    answer={answer}
                    {...this.props} />
            );
        } else {
            answers = [];
        }
        
        return (<div className='question-answer-index-container'>
            <div className='answer-count'>
                {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
            </div>
            {answers.reverse()}
        </div>)
    }
}

export default withRouter(AnswerIndex);