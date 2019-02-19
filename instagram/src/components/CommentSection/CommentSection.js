import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <>
            {props.comments.map(comment => {
                return(
                    <div key={comment.text}>
                        <p>{comment.username}</p>
                        <p>{comment.text}</p>
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