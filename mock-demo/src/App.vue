<template>
  <div id="app"></div>
</template>

<script>
import mockjs from 'mockjs'

export default {
  name: 'App',
  components: {
  },
  created () {
    var Mock = require('mockjs')
    var name = Mock.mock('@cname')
    console.log(name)
  }
}
</script>

<style>
</style>
