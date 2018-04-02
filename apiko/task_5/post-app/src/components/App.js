import React, { Component } from 'react';
import MoreButton from './MoreButton'
import PostList from './PostList'
import PostListItem from './PostListItem'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List app</h1>
       <PostList/>
      </div>
    );
  }
}

export default App;