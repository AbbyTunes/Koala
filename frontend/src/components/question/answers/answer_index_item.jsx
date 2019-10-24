import React from 'react';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            upvoted: false,
            downvoted: false
        }

        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
    }

    toggleUpvote() {
        this.state.upvoted ? this.setState({upvoted: false}) : this.setState({upvoted: true})
    }

    toggleDownvote() {
        this.state.downvoted ? this.setState({ downvoted: false }) : this.setState({ downvoted: true })
    }


    render() {
        // Add locale-specific relative date/time formatting rules
        TimeAgo.addLocale(en)
        const timeAgo = new TimeAgo('en-US');

        const svgUpvoteClass = 'svg-base svg-stroke' + (
            this.state.upvoted ? ' svg-fill' : ''
        );

        const svgDownvoteClass = 'svg-base svg-stroke' + (
            this.state.downvoted ? ' svg-fill' : ''
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
                <div className='answer-upvote'>
                    <span className='svg-icon'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className={svgUpvoteClass}>
                                <polygon points='12 4 3 15 9 15 9 20 15 20 15 15 21 15'></polygon>
                            </g>
                        </svg>
                    </span>
                    <div className='upvote-txt'>
                        Upvote
                    </div>
                    <div className='upvote-count'>
                        
                    </div>
                </div>
                <div className='answer-downvote'>
                    <span className='svg-icon'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g className={svgDownvoteClass}>
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