import React, {Component} from 'react'
import PostListItem from './PostListItem'
import MoreButton from './MoreButton'
import NoItemFound from './NoItemFound'
import logo from '../loader.gif'
//import data from '../data.json'

const API = 'https://jsonplaceholder.typicode.com/'
const fetchData = page =>
fetch(`${API}${page}`)
  .then(response => response.json())

class PostList extends React.Component {
constructor (props) {
  super (props)
    this.state = {
        posts:[],
        counter: 10,
        value: '',
        isLoading: true
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
componentDidMount(){

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(fetchData('posts'))
  }, 3000)
})
promise.then(posts => {
  this.setState({
    posts,
    isLoading: false
    })
  })
}
componentWillUnmount() {
    clearInterval(this.timerId);
  }
render() {
let {posts, value, counter, isLoading} = this.state

if(isLoading){
  return <img src={logo} alt="loading"/>
}


const postElements = posts
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
<PostListItem key={post.id}  post = {post}/>
)

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