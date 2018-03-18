const $ = selector => document.querySelector(selector)

const reloadFactory = () => ({
    removeElements: (parentNode) => {
      if(parentNode === null || parentNode ===undefined){
    return
      }
    while(parentNode.firstChild){
      parentNode.removeChild(parentNode.firstChild)
    }
  }
})
const reloadInstance = Object.create(reloadFactory())

const fetchUsers = async (URLreq) => {
    try {
        const response = await fetch(URLreq)
        const posts = await response.json()
        const template = await posts.map(post => `
    <a href="index.html/posts?userId=${post.userId}">${post.userId ? ` User: ${post.userId} ` : ``}</a></br>
    <a href= "index.html/comments?postId=${post.id}">postId: ${post.id}</a>
    <h3>${post.title ? `Title: "${post.title}"` : ``}</h3>
    <h3>${post.name ? `Name: "${post.name}"` : ``}</h3>
    <p>${post.email ? `Email: "${post.email}"` : ``}</p>
    <p>${post.body}</p>
  `).join('')

        $('#result').innerHTML = template
    } catch (err) {
        console.log(err)
    }
}

fetchUsers('https://jsonplaceholder.typicode.com/posts')

$('#result').onclick = (e) => {
  if (e.target.tagName === 'A') {
    const href = e.target.getAttribute('href').slice(11)
    reloadInstance.removeElements($('#result'))
    fetchUsers(`https://jsonplaceholder.typicode.com/${href}`)
  }
    e.preventDefault()
}

