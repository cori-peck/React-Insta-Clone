import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

import PostsPage from './components/PostContainer/PostsPage';


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
        <PostsPage />
      </div>
    );
  }
}

export default App;
