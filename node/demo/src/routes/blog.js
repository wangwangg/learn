const { SuccessModel } = require("../model/responseModel")
const { getList } = require("../controllers/blog")

//处理博客相关的路由
const handleBlogRoute = (req, res) => {
  //定义处理的逻辑
  const method = req.method

  if (method === "GET" && req.path === "/api/blog/list") {
    const name = req.query.name
    const age = req.query.age

    //通过url参数 查询数据库获取数据
    const listData = getList(name, age)

    //将拿到的数据返回 成功的返回类型
    return new SuccessModel(listData)

    // return {
    //   message: '获取list接口'
    // }
  }

  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      message: '创建新的blog'
    }
  }

}

module.exports = handleBlogRoute