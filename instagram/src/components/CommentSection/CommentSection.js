import React from 'react';

const CommentSection = props => {
    return (
        <>
            {props.comments.map(comment => {
                return(
                    <div>
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

export default CommentSection