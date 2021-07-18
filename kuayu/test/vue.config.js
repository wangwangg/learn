module.exports = {
  //开启代理服务器 代理服务器的端口与本地端口一致为8080，通过这个代理服务器将请求转发到5000
  //代理服务器8080 与请求服务器5000， 服务器之间不存在同源策略问题
  //本地端口 和代理服务器都是8080，所以不存在跨域，代理服务器将请求的数据返回给本地

  // 方式1
  // devServer: {
  //   proxy: 'http://localhost:5000',
  // },

  //方式2
  devServer: {
    proxy: {
      ///api1 请求前缀，有前缀则走代理 转发到5000
      '/api1': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api1': '' },
        ws: true, //用于支持websocket
        changeOrigin: true,
      },
      ///api2 请求前缀，有前缀则走代理 转发到5001
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/api2': '' },
        ws: true, //用于支持websocket
        changeOrigin: true,
      },
    },
  },
}
