<template>
  <div class="container">
    <h1>组件1</h1>
    <h1>父组件传递的num：{{ parentNum }}</h1>
    <h1>父组件传递的name：{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "SubPage1",
  // props: {
  //   parentNum: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
  props: ["parentNum", "name"],
  data() {
    return {
      num: 2,
    };
  },
  created() {
    console.log(this.parentNum, "子组件");
  },
  mounted() {
    console.log(this.parentNum, "子组件");
  },
};
</script>


<style scoped>
.container {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>