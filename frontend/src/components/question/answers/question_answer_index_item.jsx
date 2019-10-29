import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: null,
            downvoteHover: false,
            moreHover: false,
            moreActive: false
        }
        
        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
        this.downvoteHover = this.downvoteHover.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleMore = this.toggleMore.bind(this);
        this.moreHover = this.moreHover.bind(this);
    }

    componentDidMount() {
        this._mounted = true;

        if (this._mounted) {
            this.setState({ answer: this.props.answer })
            this.currentVoterIdx = -1;
    
            if (this.state.answer) {
                this.state.answer.voters.forEach((voter, idx) => {
                    if (voter.id === this.props.currentUser.id) this.currentVoterIdx = idx;
                });
        
                if (this.currentVoterIdx === -1) {
                    this.currentVoterIdx = this.state.answer.voters.length;
        
                    let answer = Object.assign({}, this.state.answer);
                    answer.voters.push({
                        id: this.props.currentUser.id,
                        upvote: false,
                        downvote: false,
                    });
        
                    this.setState({answer});
                }
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this._mounted) {
            if (this.currentVoterIdx === -1 || prevProps.answer._id !== this.state.answer_id) {
                this.currentVoterIdx = -1;
    
                this.state.answer.voters.forEach((voter, idx) => {
                    if (voter.id === this.props.currentUser.id) this.currentVoterIdx = idx;
                });
    
                if (this.currentVoterIdx === -1) {
                    this.currentVoterIdx = this.state.answer.voters.length;
    
                    let answer = Object.assign({}, this.state.answer);
                    answer.voters.push({
                        id: this.props.currentUser.id,
                        upvote: false,
                        downvote: false,
                    });
    
                    this.setState({ answer });
                }
            }
        }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    toggleUpvote() {
        let answer = Object.assign({}, this.state.answer);

        if (answer.voters[this.currentVoterIdx].upvote) {
            answer.upvote -= 1;
            answer.voters[this.currentVoterIdx].upvote = false;
        } else {
            answer.upvote += 1;
            answer.voters[this.currentVoterIdx].upvote = true;
        }

        this.setState({answer});
        this.props.updateAnswer(answer);
    }

    toggleDownvote() {
        let answer = Object.assign({}, this.state.answer);

        if (answer.voters[this.currentVoterIdx].downvote) {
            answer.downvote -= 1;
            answer.voters[this.currentVoterIdx].downvote = false;
        } else {
            answer.downvote += 1;
            answer.voters[this.currentVoterIdx].downvote = true;
        }

        this.setState({ answer })

        this.props.updateAnswer(this.state.answer);
    }

    handleDelete() {
        this.toggleMore();
        this.props.deleteAnswer(this.state.answer._id);
        this.props.childDeletion();
    }

    downvoteHover(status) {
        status ? this.setState({downvoteHover: true}) : this.setState({downvoteHover: false})
    }

    toggleMore() {
        this.state.moreActive ? this.setState({ moreActive: false }) : this.setState({ moreActive: true })
    }

    moreHover(status) {
        status ? this.setState({ moreHover: true }) : this.setState({ moreHover: false })
    }


    render() {
        let author, description, upvoteCount, upvoted, downvoted, date

        if (this.state.answer && this.currentVoterIdx !== -1) {
            author = this.state.answer.author;
            description = this.state.answer.description;
            upvoteCount = this.state.answer.upvote;
            upvoted = this.state.answer.voters[this.currentVoterIdx].upvote;
            downvoted = this.state.answer.voters[this.currentVoterIdx].downvote;
            date = (new Date(this.state.answer.date)).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
            });
        } else {
            this.currentVoterIdx = -1;
            this.props.answer.voters.forEach((voter, idx) => {
                if (voter.id === this.props.currentUser.id) this.currentVoterIdx = idx;
            });
            if (this.currentVoterIdx === -1) {
                this.currentVoterIdx = this.props.answer.voters.length

                let answer = Object.assign({}, this.props.answer);
                answer.voters.push({
                    id: this.props.currentUser.id,
                    upvote: false,
                    downvote: false,
                });

                this.props.updateAnswer(answer);
            };

            author = this.props.answer.author;
            description = this.props.answer.description;
            upvoteCount = this.props.answer.upvote;
            upvoted = this.props.answer.voters[this.currentVoterIdx].upvote;
            downvoted = this.props.answer.voters[this.currentVoterIdx].downvote;
            date = (new Date(this.props.answer.date)).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
            });
        }

        const upvoteClass = 'answer-upvote' + (
            upvoted ? ' active' : ''
        );

        const downvoteClass = 'answer-downvote' + (
            downvoted ? ' active' : ''
        ) + (
            this.state.downvoteHover ? ' tooltip' : ''
        );

        const moreClass = 'answer-more' + (
            this.state.moreHover ? ' tooltip' : ''
        );
    
        return (<div className='answer-index-item-container'>
            <div className='content-divider'></div>
            <div className='answer-header'>
                <Link className='answer-author-icon-link no-select'
                    to={author ? `/profile/${author._id}` : ''}>
                    <div className='answer-author-icon'></div>
                </Link>
                <div className='answer-author-date-container'>
                    <Link className='answer-author-link'
                        to={author ? `/profile/${author._id}` : ''}>
                        <div className='answer-author'>
                            {author ? `${author.firstName} ${author.lastName}` : ''}
                        </div>
                    </Link>
                    <div className='answer-date'>
                        Answered {date}
                    </div>
                </div>
            </div>
            <div className='answer-body'>
                {description}
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
                        {upvoteCount}
                    </div>
                </div>
                <div className='footer-right'>
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
                    <div className={moreClass}>
                        <span className='svg-icon'
                            onMouseEnter={() => this.moreHover(true)}
                            onMouseLeave={() => this.moreHover(false)}
                            onClick={this.toggleMore}>
                            <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                                <g className='svg-base'>
                                    <path d='M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z'></path>
                                </g>
                            </svg>
                        </span>
                        <div className='more-dropdown-container'
                            hidden={!this.state.moreActive}>
                            <div className='option-container'
                                onClick={this.handleDelete}>
                                Delete Answer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
};

export default withRouter(AnswerIndexItem);