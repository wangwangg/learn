const http = require('http');
const querystring = require('querystring')


//处理get请求  客户端向服务端获取数据
//http.createServer 创建一个服务器
const server = http.createServer((req, res) => {
  //获取请求的方法
  const method = req.method
  console.log(method, "methos");

  //获取请求的url（路由）
  const url = req.url
  console.log(url, "url");

  req.query = querystring.parse(url.split('?')[1])
  console.log(req.query, "req.query");

  //返回的数据
  res.end(
    JSON.stringify(req.query)
  )
})

//监听5000端口
server.listen(5000, () => {
  console.log("server running ar port 5000");
})