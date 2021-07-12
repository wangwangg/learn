<template>
  <div class="container">
    <h1>组件2</h1>
    <span>{{ asyncData }}</span>
  </div>
</template>

<script>
export default {
  name: "SubPage2",
  props: ["asyncData"],
  data() {
    return {};
  },
  created() {
    console.log(this.asyncData, "asyncData--");
  },
  watch: {
    asyncData: function (oldVal, newVal) {
      console.log(oldVal, newVal);
    },
  },
};
</script>


<style scoped>
.container {
  width: 500px;
  height: 300px;
  border: 1px solid green;
}
</style>
