import React, { Component } from 'react';
import './App.css';

import withAuthenticate from './authentication/withAuthenticate';
import LoginPage from './components/Login/LoginPage';
import PostsPage from './components/PostContainer/PostsPage';


class App extends Component {

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
