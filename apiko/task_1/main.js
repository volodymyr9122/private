const $ = selector => document.querySelector(selector)

const removeElements = (parentNode) => {
    if (parentNode === null || parentNode === undefined) {
        return
    }
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild)
    }
}

const httpGetReq = async (URLreq) => {
  try {
    const response = await fetch(URLreq)
    const posts = await response.json()
    return posts
   }
    catch (err) {
    console.log(err)
  }
}

const mountPosts = (posts) => {
  const template = posts.map(post => `
<a href="index.html/posts?userId=${post.userId}" class = 'user'> ${post.userId ?'User ' + post.userId  : ''} </a></br>
<a href="index.html/posts/${post.id}" class = 'postDetails'> ${post.id ?'Post id ' + post.id  : ''} </a></br>
<h3> ${post.title ? 'Title: ' + post.title  : ''} </h3>
<p>${post.body}</p>
  `).join('')
    $('#result').innerHTML = template
}

const mountPostsComments = (posts) => {
    const template = posts.map(post => `
<h5> ${post.postId ?'Post id: ' + post.postId  : ''} </h5>
<p> ${post.id ?'Comment id: ' + post.id  : ''} </p>
<p> ${post.name ? 'Title: ' + post.name  : ''} </p>
<p> ${post.email ? 'Email: ' + post.email  : ''} </p>
<p>${post.body}</p>
     `).join('')
        let comments = document.createElement('div')
        comments.innerHTML = template
        $('#result').appendChild(comments)
}

const mountPostDetails = (posts) => {
    const {userId, id, title, body } = posts
    const template = `
<a href="index.html/posts?userId=${userId}" class = 'user'> ${userId ?'User ' + userId  : ''} </a></br>
<h4>${title}</h4>
<p>${body}</p>
<a href= "index.html/posts/${id}/comments" class="comments"> ${id ? 'Show comments '  : ''} </a>
`
    $('#result').innerHTML = template
}

const mountUser =  (posts) => {
  const template = posts.map(post => `
<h4> ${post.userId ?'User ' + post.userId  : ''} </h4>
<h4> ${post.id ?'Post number ' + post.id  : ''} </h4>
<h5> ${post.title ? 'Title: ' + post.title  : ''} </h5>
<p>${post.body}</p>
  `).join('')
        $('#result').innerHTML = template
}

$('#result').onclick = (e) => {
  if (e.target.tagName === 'A') {
    const href = e.target.getAttribute('href')
    const API_ENDPOINT = href.slice(11)
    const httpResponse = httpGetReq(`https://jsonplaceholder.typicode.com/${API_ENDPOINT}`)
    if (e.target.className === 'postDetails') {
      removeElements($('#result'))
       httpResponse.then(res => mountPostDetails(res))
    }
    if (e.target.className === 'user') {
      removeElements($('#result'))
      httpResponse.then(res => mountUser(res))
    }
    if (e.target.className === 'comments') {
      httpResponse.then(res => mountPostsComments(res))
    }
  }
    e.preventDefault()
}

window.onload = (e) => {
   httpGetReq('https://jsonplaceholder.typicode.com/posts').then(res => mountPosts(res))
}
