//创建服务器
const http = require('http')

const PORT = 5000

const serverHandler = require('./app')

//http.createServer 创建一个服务器
const server = http.createServer(serverHandler)

server.listen(PORT, () => {
  console.log('server running ar port 5000...');
})