import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';

const CommentSection = props => {
    return (
        <>
            {props.comments.map(comment => {
                return(
                    <div className="comContainer" key={comment.text}>
                        <p className="comUsername">{comment.username}</p>
                        <p className="comText">{comment.text}</p>
                    </div>
                )
            })}
            <form>
                <input type="text" placeholder="Add a comment..." />
            </form>
        </>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired,
    }

export default CommentSection