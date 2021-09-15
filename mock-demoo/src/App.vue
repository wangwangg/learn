<template>
  <div id="app"></div>
</template>

<script>
import api from "./../axios/api.js";
import axios from "axios";

import service from "./../axios/http.js"

export default {
  name: "App",
  components: {},
  mounted() {
    // this.getdata();
  },
  //使用fastmock网站 模拟数据
  created() {
   this.getdetail()
  },
  methods: {
   async getdetail(){
  const {userinfo:{username}}=  await service({
          url:'/test'
        })
console.log(username,"username");
        console.log(999);
    },



    getdata: async function () {
    await api.mockdata("/data/index").then(res=>{
      console.log(res,"res");
      // throw 'err'
    })
      console.log("7777");
    },

    getinfo(){
 const baseurl =
      "https://www.fastmock.site/mock/19baedd0843b7496ea4288893c38ae7d/api";
      console.log(axios.get(`${baseurl}/test`));
    axios.get(`${baseurl}/test`).then((res) => {
      console.log(res, "fastmock 获取的数据");
    });
    }
  },
};
</script>

<style>
</style>
