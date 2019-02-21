import React from 'react';
import LoginPage from '../components/Login/LoginPage';
import PostsPage from '../components/PostContainer/PostsPage';

const withAuthenticate = PostsPage => LoginPage => props => {
    if (props.loggedIn)
        return (
            <PostsPage />
        );
        return (
            <LoginPage />
        );
}
     


export default withAuthenticate(PostsPage)(LoginPage)