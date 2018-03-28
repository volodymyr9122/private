import React, {Component} from 'react'
import PostListItem from './PostListItem'
import MoreButton from './MoreButton'


class PostList extends React.Component {
constructor () {
    super ()
    this.state = {
        counter: 10}
    this.addPosts = this.addPosts.bind(this)
}
addPosts() {
  const {counter} = this.state
    console.log(counter)
    if(this.state.counter<100){
       this.setState((prevState)=>({
      counter: prevState.counter + 10
    }))
  }
}
render() {
const postElements = this.props.posts
.filter((post) => {
    return post.id <= this.state.counter
})
.map(post =>
<li key = {post.id}><PostListItem post = {post}/></li>
)
return (
  <ul>
    {postElements}
      <MoreButton onClick = {this.addPosts}></MoreButton>
  </ul>
    )
  }
}

export default PostList




