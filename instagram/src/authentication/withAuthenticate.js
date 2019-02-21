import React from 'react';
import PostsPage from '../components/PostContainer/PostsPage';
import Login from '../components/Login/Login';

const withAuthenticate = PostsPage => Login => props => {
        if (props.loggedIn)
        return(
            <PostsPage />
        );
        return (
            <Login />
        )
}
     


export default withAuthenticate(PostsPage)(Login)