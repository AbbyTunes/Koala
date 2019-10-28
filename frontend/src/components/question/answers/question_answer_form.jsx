import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: this.props.currentUser,
            body: ''
        }

        this.changeTextarea = this.changeTextarea.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.textarea) {
            this.textarea.style.height = 'auto';
        }
    }

    changeTextarea() {
        if (this.textarea) {
            this.textarea.style.height = 'auto';

            if (this.textarea.scrollHeight > 150) {
                this.textarea.style.height = (this.textarea.scrollHeight + 16) + 'px';
            }
        }
    }

    handleChange(field) {
        this.changeTextarea();
        
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit() {
        this.props.createAnswer({
            questionId: this.props.match.params.question_id,
            description: this.state.body
        })
    }

    render() {
        return (<div className='question-answer-form-container'>
            <div className='answer-header'>
                <Link className='answer-author-icon-link no-select'
                    to={this.state.author ? `/profile/${this.state.author.id}` : ''}>
                    <div className='answer-author-icon'></div>
                </Link>
                <div className='answer-author-date-container'>
                    <Link className='answer-author-link'
                        to={this.state.author ? `/profile/${this.state.author.id}` : ''}>
                        <div className='answer-author'>
                            {this.state.author ? `${this.state.author.firstName} ${this.state.author.lastName}` : ''}
                        </div>
                    </Link>
                </div>
            </div>
            <textarea className='answer-input-txt'
                value={this.state.body}
                ref={ref => this.textarea = ref}
                onChange={this.handleChange('body')}
                placeholder='Write your answer' />
            <div className='answer-footer'>
                <button className='answer-input-submit'
                    type='button'
                    onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        </div>);
    }
};

export default withRouter(AnswerIndexItem);