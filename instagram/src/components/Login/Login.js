import React from 'react';

import PostsPage from '../PostContainer/PostsPage';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = e => {
        e.preventDefault();
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.setState({ loggedIn: true })
        } else {
            this.setState({ loggedIn: false })
        }
    }

    render() {
        return (
            <>
                <img className="logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram Cursive Logo" />
                <form onSubmit={this.handleLogin}>
                    <input type="text" name="username" placeholder="Username"
                        onChange={this.handleInputChange} value={this.state.username} />
                    <input type="password" name="password" placeholder="Password"
                        onChange={this.handleInputChange} value={this.state.password} />
                    <button type="submit" onClick={this.handleLogin}>Login</button>
                </form>
            </>
        )
    }
}

export default Login