<template>
  <div id="app">
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCar">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getStudent () {
      //请求的是8080 通过代理服务器（8080）转发到5000
      axios.get('http://localhost:8080/api1/students').then(res => {
        console.log(res);
      })
    },
    getCar () {
      axios.get('http://localhost:8080/api2/cars').then(res => {
        console.log(res);
      })
    }
  }

}
</script>

<style>
</style>
