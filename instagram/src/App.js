import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
