import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import './CommentSection.css';

const CommentSection = props => {
    const timeStamp = Moment().startOf('hour').fromNow();
    return (
        <div>
            {props.comments.map(comment => {
                return(
                    <div className="comContainer" key={comment.text}>
                        <p className="comUsername">{comment.username}</p>
                        <p className="comText">{comment.text}</p>
                    </div>
                )
            })}
            <p className="time">{timeStamp}</p>
            <form>
                <input type="text" placeholder="Add a comment..." />
            </form>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired,
    }

export default CommentSection