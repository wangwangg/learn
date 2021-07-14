<template>
  <div id="app"></div>
</template>

<script>
import api from "./../axios/api.js";
import axios from "axios";

export default {
  name: "App",
  components: {},
  mounted() {
    this.getdata();
  },
  methods: {
    getdata: function () {
      api.mockdata("/data/index").then((res) => {
        console.log(res);
        this.dataShow = res.data;
      });
    },
  },

  //使用fastmock网站 模拟数据
  created() {
    const baseurl =
      "https://www.fastmock.site/mock/19baedd0843b7496ea4288893c38ae7d/api";
    axios.get(`${baseurl}/test`).then((res) => {
      console.log(res, "fastmock 获取的数据");
    });
    const baseurl =
      "https://www.fastmock.site/mock/19baedd0843b7496ea4288893c38ae7d/api";
    axios.get(`${baseurl}/test`).then((res) => {
      console.log(res, "fastmock 获取的数据");
    });
    const baseurl =
      "https://www.fastmock.site/mock/19baedd0843b7496ea4288893c38ae7d/api";
    axios.get(`${baseurl}/test`).then((res) => {
      console.log(res, "fastmock 获取的数据");
    });
  },
};
</script>

<style>
</style>
