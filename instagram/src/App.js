import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

import withAuthenticate from './authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate;

class App extends Component {
 
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
