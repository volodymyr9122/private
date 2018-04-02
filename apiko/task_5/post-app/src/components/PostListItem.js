import React, {Component} from 'react'

class PostListItem extends Component {
  constructor(props) {
    super(props)
    this. state = {
    isOpen: true
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return(
      this.props.id !== nextProps.id ||
      this.props.userId !== nextProps.userId ||
      this.props.name !== nextProps.name ||
      this.props.body !== nextProps.body
    )
  }
   render () {
    const {post} = this.props
    const body = this.state.isOpen && <section>{post.body}</section>
    return (
    <div>
        <h3>{post.userId}</h3>
        <h3>{post.id}</h3>

        <h3>
        {post.title}
        <button onClick = {this.handleClick}>
          {this.state.isOpen ? 'close post body' : 'open post body'}
        </button>
        </h3>

        {body}
    </div>
    )
  }
  handleClick = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
  }
}

export default PostListItem