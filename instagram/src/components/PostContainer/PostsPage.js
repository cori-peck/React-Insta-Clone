import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

import './PostsPage.css';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
            post: [],
            filteredPost: []
        }
    }

    handleSearch = e => {
        const post = this.state.post.filter(filtered => {
            if (filtered.username.includes(e.target.value)) {
                console.log('Searching....')
            return filtered;
            }
        })
        this.setState({ filteredPost: post })
    }

    componentDidMount() {
        this.setState({ posts: dummyData})
      }

    render() {
        return (
            <>
                <SearchBar searchPost={this.handleSearch} />
                <div className="mainContainer">
                    {this.state.post.map(posts => 
                        <PostContainer key={posts.timestamp} posts={posts} 
                        post={this.state.filteredPost.length > 0 ? this.state.filteredPost : this.state.posts} />
                    )}
                </div>
            </>
        )
    }
}


export default PostsPage