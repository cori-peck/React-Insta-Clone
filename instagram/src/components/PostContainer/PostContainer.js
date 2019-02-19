import React from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <>
            <div className="postContainer">
                <div className="postHead">
                    <img className="profileImg" src={props.post.thumbnailUrl} alt="" />
                    <p className="username">{props.post.username}</p>
                </div>
            <div className="postPic">
                <img src={props.post.imageUrl} alt="" />
            </div>
            <div className="postFooter">
                <Icon.Heart className="commentIcons"/>
                <Icon.MessageCircle className="commentIcons"/>
                <p className="boldLikes">{props.post.likes} likes</p>
            </div>
            <div>
                <CommentSection comments={props.post.comments} />
            </div>
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