import React from 'react';


const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        }

        render() {
            if (this.state.loggedIn) 
                return (
                <PostsPage />
                );
            return (
                <LoginPage />
            )
        }
    }

export default withAuthenticate