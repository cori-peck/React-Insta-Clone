import React from 'react';
import * as Icon from 'react-feather';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <>
            <div>
                <img src={props.post.thumbnailUrl} alt="" />
                <p>{props.post.username}</p>
            </div>
            <div>
                <img src={props.post.imageUrl} alt="" />
            </div>
            <div>
                <Icon.Heart />
                <Icon.MessageCircle />
                <p>{props.post.likes} likes</p>
            </div>
            <div>
                <CommentSection comments={props.post.comments} />
            </div>
        </>

    )
}

export default PostContainer