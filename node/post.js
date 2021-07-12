const http = require('http')

//处理post请求  
const server = http.createServer((req, res) => {
  //当请求为post请求时
  if (req.method === 'POST') {
    let postData = ''

    //流 stream   获取数据
    req.on('data', chunk => {
      postData += chunk.toString()
    })

    //数据接受完时
    req.on('end', () => {
      console.log(postData, "///postdata");
      //返回给客户端
      res.end('数据接受完毕')
    })

    console.log(req.headers['content-type'], "post data content type");
  }
})

server.listen(5000, () => {
  console.log("server running ar port 5000");
})