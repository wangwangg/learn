<template>
  <div id="app">
    <div class="container">
      <h1>父容器</h1>
      <span>{{ fullName }}</span>
      <span>num:{{ num }}</span>
      <br />
      <span>person.naem:{{ person.name }}</span>
      <br />
      <button @click="handleTap()">点击改变name</button>
      <button @click="parentNum++">点击改变传递给子组件的值</button>
      <span>{{ parentNum }}</span>
      <div ref="ppp"></div>
    </div>

    <SubPage1 :parentNum="parentNum" :name="person.name" />
    <!-- 传递异步获取的数据给子组件，可以先用v-if在子组件上判断是否渲染，只有在获取到异步的数据之后 才渲染 -->
    <SubPage2 :asyncData="asyncData" v-if="flage" />

    <!-- <SubPage3 /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import SubPage1 from "./components/ SubPage1";
import SubPage2 from "./components/SubPage2";
import SubPage3 from "./components/SubPage3";

export default {
  name: "App",
  components: {
    HelloWorld,
    SubPage1,
    SubPage2,
    SubPage3,
  },
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",
      num: 0,
      person: {
        name: "ww",
      },
      parentNum: 7,
      asyncData: "", //异步获取的数据
      flage: false,
    };
  },
  computed: {
    getName: function () {
      return this.person.name;
    },
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + " " + val;
    },
    num: function () {
      console.log(this.num);
    },

    // --------监听person里面的name的方法-------------
    // 方法1  deep: true
    person: {
      //监听person，当person里面的name改变时，有deep：true时可以监听到，但oldval和newval 是一样的
      handler(oldVal, newVal) {
        console.log(oldVal.name);
        console.log(newVal.name);
      },
      deep: true,
    },
    //方法2
    "person.name": {
      handler: (val, oldVal) => {
        console.log(val, oldVal, "方法2监听");
      },
    },
    //方法3 现将person里面的name用计算属性获取，然后监听该计算属性
    getName: function (oldVal, newVal) {
      console.log(oldVal, newVal, "方法3监听");
    },
  },
  created() {
    this.fullName = "aaa sss";

    this.$nextTick(() => {
      this.$refs.ppp.innerText = "钢铁的翅膀";
    });
  },
  mounted() {
    setTimeout(() => {
      this.asyncData = { items: [1, 2, 3] };
      this.flage = true;
    }, 2000);
    setTimeout(() => {
      this.asyncData = "hello";
      // this.flage = true;
    }, 4000);
  },
  methods: {
    handleTap() {
      this.firstName = "lll";
      this.num++;
      this.person.name = "pp";
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 500px;
  height: 300px;
  border: 1px solid skyblue;
}
</style>
