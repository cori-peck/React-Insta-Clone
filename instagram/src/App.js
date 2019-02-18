import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';

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
        {this.state.posts.map((post) => (
           <PostContainer post={post}/>
        ))}
      </div>
    );
  }
}

export default App;
