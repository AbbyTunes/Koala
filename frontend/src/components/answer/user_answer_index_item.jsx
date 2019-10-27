import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.answer = Object.assign({}, this.props.answer);
        this.currentVoterIdx = -1;

        this.answer.voters.forEach((voter, idx) => {
            if (voter.id === this.props.currentUser.id) this.currentVoterIdx = idx;
        });

        if (this.currentVoterIdx === -1) {
            this.currentVoterIdx = this.answer.voters.length;
            this.answer.voters.push({
                id: this.props.currentUser.id,
                upvote: false,
                downvote: false
            });
        }

        this.state = {
            questionTitle: '',
            author: null,
            upvoteCount: this.props.answer.upvote,
            upvoted: this.answer.voters[this.currentVoterIdx].upvote,
            downvoted: this.answer.voters[this.currentVoterIdx].downvote,
            upvoteHover: false,
            moreHover: false,
            moreActive: false
        }

        this.props.fetchUser(this.answer.authorId)
            .then(user => this.setState({ author: user.user }));

        this.props.fetchQuestion(this.answer.questionId)
            .then(question => this.setState({ questionTitle: question.question.title }));

        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
        this.toggleMore = this.toggleMore.bind(this);
        this.upvoteHover = this.upvoteHover.bind(this);
        this.moreHover = this.moreHover.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.answer.authorId)
            .then(user => this.setState({ author: user.user }));
        
        this.props.fetchQuestion(this.answer.questionId)
            .then(question => this.setState({ questionTitle: question.question.title }));
    }

    toggleUpvote() {
        if (this.state.upvoted) {
            this.setState({ upvoted: false });
            this.setState({ upvoteCount: this.state.upvoteCount - 1 });
            this.answer.upvote -= 1;
            this.answer.voters[this.currentVoterIdx] = Object.assign(
                {}, this.answer.voters[this.currentVoterIdx], { upvote: false }
            );
        } else {
            this.setState({ upvoted: true });
            this.setState({ upvoteCount: this.state.upvoteCount + 1 });
            this.answer.upvote += 1;
            this.answer.voters[this.currentVoterIdx] = Object.assign(
                {}, this.answer.voters[this.currentVoterIdx], { upvote: true }
            );
        }

        this.props.updateAnswer(this.answer);
    }

    toggleDownvote() {
        if (this.state.downvoted) {
            this.setState({ downvoted: false });
            this.answer.voters[this.currentVoterIdx] = Object.assign(
                {}, this.answer.voters[this.currentVoterIdx], { downvote: false }
            );
        } else {
            this.setState({ downvoted: true });
            this.answer.voters[this.currentVoterIdx] = Object.assign(
                {}, this.answer.voters[this.currentVoterIdx], { downvote: true }
            );
        }

        this.props.updateAnswer(this.answer);
    }

    toggleMore() {
        this.state.moreActive ? this.setState({ moreActive: false }) : this.setState({ moreActive: true })
    }

    upvoteHover(status) {
        status ? this.setState({ upvoteHover: true }) : this.setState({ upvoteHover: false })
    }

    moreHover(status) {
        status ? this.setState({ moreHover: true }) : this.setState({ moreHover: false })
    }


    render() {
        const date = (new Date(this.props.answer.date)).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
        });

        const upvoteClass = 'answer-upvote' + (
            this.state.upvoted ? ' active' : ''
        ) + (
            this.state.upvoteHover ? ' tooltip' : ''
        );

        const moreClass = 'answer-more' + (
            this.state.moreHover ? ' tooltip' : ''
        );

        return (<div className='answer-index-item-container'>
            <div className='content-divider'></div>
            <div className='question-title'>
                {this.state.questionTitle}
            </div>
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
                    <div className='answer-date'>
                        Answered {date}
                    </div>
                </div>
            </div>
            <div className='answer-body'>
                {this.props.answer.description}
            </div>
            <div className='answer-footer no-select'>
                <div className={upvoteClass}
                    onClick={this.toggleUpvote}>
                    <span className='svg-icon'
                        onMouseEnter={() => this.upvoteHover(true)}
                        onMouseLeave={() => this.upvoteHover(false)}>
                        <svg width='20px' height='20px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className='svg-base'>
                                <polygon points='12 4 3 15 9 15 9 20 15 20 15 15 21 15'></polygon>
                            </g>
                        </svg>
                    </span>
                    <div className='upvote-count'>
                        {this.state.upvoteCount}
                    </div>
                </div>
                <div className={moreClass}>
                    <span className='svg-icon'
                        onMouseEnter={() => this.moreHover(true)}
                        onMouseLeave={() => this.moreHover(false)}
                        onClick={this.toggleMore}>
                        <svg width='20px' height='20px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className='svg-base'>
                                <path d='M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z'></path>
                            </g>
                        </svg>
                    </span>
                    <div className='more-dropdown-container'
                        hidden={!this.state.moreActive}>
                        <div className='option-container'
                            onClick={this.toggleDownvote}>
                            {this.state.downvoted ? 'Undo' : ''} Downvote
                        </div>
                        <div className='option-container'>
                            Downvote Question
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
};

export default withRouter(AnswerIndexItem);