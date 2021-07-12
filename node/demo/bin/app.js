const querystring = require('querystring')

const handleBlogRoute = require('../src/routes/blog')
const serverHandler = (req, res) => {
  //响应格式  返回的数据类型application/json
  res.setHeader('content-typr', 'application/json');

  //获取path的数据
  const url = req.url
  req.path = url.split('?')[0]

  //解析 query
  req.query = querystring.parse(url.split('?')[1])

  //博客相关的路由
  const blogData = handleBlogRoute(req, res)

  if (blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return;
  }

  //404
  res.writeHead(404, { 'content-type': 'text/plain' })
  res.write('404 Not Found')
  res.end()
}

module.exports = serverHandler