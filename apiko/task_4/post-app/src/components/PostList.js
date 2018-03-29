import React, {Component} from 'react'
import PostListItem from './PostListItem'
import MoreButton from './MoreButton'
import NoItemFound from './NoItemFound'

class PostList extends React.Component {
constructor (props) {
  super (props)
    this.state = {
        counter: 10,
        value: ''
    }
}
addPosts =()=> {
    if(this.state.counter<100){
       this.setState((prevState)=>({
      counter: prevState.counter + 10
    }))
  }
}
handleChange =(event)=> {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

render() {
let {value, counter} = this.state

const postElements = this.props.posts
 .filter((post) => {
    if(value ===''){
        return post.id <= counter
    }
    else {
      if(post.title.indexOf(value)>-1) {
          return post
      }
    }
})
.map(post =>
<li key = {post.id}><PostListItem post = {post}/></li>)

return (
  <React.Fragment>
     <form>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    {postElements.length === 0 && <NoItemFound/>}
    <h3>Posts loaded:{postElements.length}</h3>
    {postElements}
     {(postElements.length > 0 && postElements.length<100)  && <MoreButton onClick = {this.addPosts}></MoreButton>}
   </React.Fragment>
    )
  }
}

export default PostList




