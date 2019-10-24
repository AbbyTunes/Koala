import React from 'react';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

class AnswerIndexItem extends React.component {
    constructor(props) {
        super(props);

        this.state = {
            upvoted: false,
            downvoted: false
        }
    }



    render() {
        // Add locale-specific relative date/time formatting rules
        TimeAgo.addLocale(en)
        const timeAgo = new TimeAgo('en-US');
    
        return (<div className='answer-index-item-container'>
            <div class_name='answer-header'>
                <div className='answer-author'>
                    {answer.authorId}
                </div>
                <div className='answer-date'>
                    Answered {timeAgo.format(Date.now() - 60 * 1000, 'time')}
                </div>
            </div>
            <div className='answer-body'>
                {answer.description}
            </div>
            <div className='answer-footer'>
                <div className='answer-upvote'>
                    <span className='answer-upvote-icon'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g class='svg-base svg-stroke svg-fill'>
                                <polygon points='12 4 3 15 9 15 9 20 15 20 15 15 21 15'></polygon>
                            </g>
                        </svg>
                    </span>
                </div>
                <div className='answer-downvote'>
                    
                </div>
            </div>
        </div>);
    }
};

export default withRouter(AnswerIndexItem);