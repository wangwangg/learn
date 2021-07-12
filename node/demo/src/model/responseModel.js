class BaseModel {
  constructor(data, message) {
    // data 为字符串
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }

    //为 对象类型
    if (data) {
      this.data = data
    }

    if (message) {
      this.message = message
    }
  }
}

//成功的模型
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = 0
  }
}

//失败的模型
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}