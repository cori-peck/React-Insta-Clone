import React from 'react';

const CommentSection = props => {
    return (
        <>
            <p>{props.comments.username}</p>
            <p>{props.comments.text}</p>
            <form>
                <input type="text" placeholder="Add a comment..." />
            </form>
        </>
    )
}

export default CommentSection