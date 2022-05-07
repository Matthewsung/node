const http = require('http');
const server = http.createServer((req, res) => {
  res.write('<h1>hello world</h1>')
  res.write('<p>hello server</p>')
  res.end('<p>hellow end</p>')
})
  .listen(8080)

server.on('listening',()=>{
  console.log('8080에서 대기중')
})
server.on('error', error=>{
  console.log(error)
})