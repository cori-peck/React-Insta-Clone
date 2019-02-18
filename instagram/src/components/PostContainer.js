import React from 'react';

const PostContainer = props => {
    return (
        <>
            <div>
                <img src={props.post.thumbnail} alt="" />
                <p>{props.post.username}</p>
            </div>
            <div>
                <img src={props.post.imageUrl} alt="" />
            </div>
        </>

    )
}

export default PostContainer