import React from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

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

PostContainer.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired
    })
}

export default PostContainer