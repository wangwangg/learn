const Mock = require('mockjs')

var obj = Mock.mock({
  id: '@id()',
  username: '@cname()',
  date: '@date()',
  avatar: "@image('200x200','red','#fff','avatar')",
  description: '@paragraph()',
  ip: "@ip()",
  email: "@email()"
})
console.log(obj);
