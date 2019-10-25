import React from 'react';
import { withRouter } from 'react-router-dom';

class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.answer = Object.assign({}, this.props.answer);
        this.currentVoterIdx = -1;

        this.answer.voters.forEach((voter, idx) => {
            if (voter.id === this.props.currentUser._id) this.currentVoterIdx = idx;
        });

        if (this.currentVoterIdx === -1) {
            this.currentVoterIdx = this.answer.voters.length;
            this.answer.voters.push({
                id: this.props.currentUser._id,
                upvote: false,
                downvote: false
            });
        }

        this.state = {
            upvoteCount: this.props.answer.upvote,
            upvoted: this.answer.voters[this.currentVoterIdx].upvote,
            downvoted: this.answer.voters[this.currentVoterIdx].downvote,
            downvoteHover: false
        }

        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
        this.downvoteHover = this.downvoteHover.bind(this);
    }

    toggleUpvote() {
        if (this.state.upvoted) {
            this.setState({upvoted: false});
            this.setState({upvoteCount: this.state.upvoteCount - 1});
            this.answer.upvote -= 1;
            this.answer.voters[this.currentVoterIdx] = Object.assign(
                {}, this.answer.voters[this.currentVoterIdx], {upvote: false}
            );
        } else {
            this.setState({upvoted: true});
            this.setState({upvoteCount: this.state.upvoteCount + 1});
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

    downvoteHover(status) {
        status ? this.setState({downvoteHover: true}) : this.setState({downvoteHover: false})
    }


    render() {
        debugger;
        const date = (new Date(this.props.answer.date)).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
        
        const upvoteClass = 'answer-upvote' + (
            this.state.upvoted ? ' active' : ''
        );

        const downvoteClass = 'answer-downvote' + (
            this.state.downvoted ? ' active' : ''
        ) + (
            this.state.downvoteHover ? ' tooltip' : ''
        );
    
        return (<div className='answer-index-item-container'>
            <div className='content-divider'></div>
            <div className='answer-header'>
                <div className='answer-author'>
                    {this.props.answer.authorId}
                </div>
                <div className='answer-date'>
                    Answered {date}
                </div>
            </div>
            <div className='answer-body'>
                {this.props.answer.description}
            </div>
            <div className='answer-footer no-select'>
                <div className={upvoteClass}
                    onClick={this.toggleUpvote}>
                    <span className='svg-icon'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className='svg-base'>
                                <polygon points='12 4 3 15 9 15 9 20 15 20 15 15 21 15'></polygon>
                            </g>
                        </svg>
                    </span>
                    <div className='upvote-txt'>
                        Upvote
                    </div>
                    <div className='upvote-bullet'>
                        ·
                    </div>
                    <div className='upvote-count'>
                        {this.state.upvoteCount}
                    </div>
                </div>
                <div className={downvoteClass}
                    onClick={this.toggleDownvote}>
                    <span className='svg-icon'
                        onMouseEnter={() => this.downvoteHover(true)}
                        onMouseLeave={() => this.downvoteHover(false)}>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className='svg-base'>
                                <polygon transform='translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000)' points='12 4 3 15 9 15 9 20 15 20 15 15 21 15'></polygon>
                            </g>
                        </svg>
                    </span>
                </div>
            </div>
        </div>);
    }
};

export default withRouter(AnswerIndexItem);