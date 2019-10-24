import React from 'react';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            upvoteCount: 0,
            upvoted: false,
            downvoted: false
        }

        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
    }

    toggleUpvote() {
        if (this.state.upvoted) {
            this.setState({upvoted: false});
            this.setState({upvoteCount: this.state.upvoteCount - 1});
        } else {
            this.setState({upvoted: true});
            this.setState({upvoteCount: this.state.upvoteCount + 1});
        }
    }

    toggleDownvote() {
        if (this.state.downvoted) {
            this.setState({ downvoted: false });
        } else {
            this.setState({ downvoted: true });
        }
    }


    render() {
        // Add locale-specific relative date/time formatting rules
        TimeAgo.addLocale(en)
        const timeAgo = new TimeAgo('en-US');

        const upvoteClass = 'answer-upvote' + (
            this.state.upvoted ? ' active' : ''
        );

        const downvoteClass = 'answer-downvote' + (
            this.state.downvoted ? ' active' : ''
        );
    
        return (<div className='answer-index-item-container'>
            <div class_name='answer-header'>
                <div className='answer-author'>
                    {this.props.answer.authorId}
                </div>
                <div className='answer-date'>
                    Answered {timeAgo.format(Date.now() - 60 * 1000, 'time')}
                </div>
            </div>
            <div className='answer-body'>
                {this.props.answer.description}
            </div>
            <div className='answer-footer'>
                <div className={upvoteClass}
                    onClick={this.toggleUpvote}>
                    <span className='svg-icon'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className='svg-base svg-stroke svg-fill'>
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
                    <span className='svg-icon'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className='svg-base svg-stroke svg-fill'>
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