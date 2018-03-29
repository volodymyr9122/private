import React, { Component } from 'react';
import MoreButton from './MoreButton'
import PostList from './PostList'
import PostListItem from './PostListItem'
import posts from '../data.json'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List app</h1>
       <PostList posts = {posts}/>
      </div>
    );
  }
}

export default App;
 // <PostListItem post = {posts[0]}/>
//<MoreButton/>
       /* <header className="App-header">
       <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
*/

  /* <img src={logo} className="App-logo" alt="logo" />*/