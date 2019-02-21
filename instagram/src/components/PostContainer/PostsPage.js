import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

import './PostsPage.css';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: dummyData,
        }
    }

    render() {
        return (
            <>
                <SearchBar />
                <div className="mainContainer">
                {this.state.posts.map((post) => (
                <PostContainer key={post.timestamp} post={post}/>
                ))}
                </div>
            </>
        )
    }
}


export default PostsPage