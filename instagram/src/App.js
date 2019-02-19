import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

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

            <SearchBar />
            <div className="mainContainer">
            {this.state.posts.map((post) => (
            <PostContainer key={post.timestamp} post={post}/>
            ))}
          </div>
      </div>
    );
  }
}

export default App;
