const http = require('http')
const { config } = require('dotenv')
config()
const getWeathearData = require('./controller');
const PORT = process.env.PORT || 3000


http.createServer((req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, NodeJS!')
}).listen(PORT, () =>{
   getWeathearData(process.argv[2], process.argv[3]/* = new Date()*/)
   console.log(`Listening port ${PORT}..., date ${process.argv[3]}`)
})


