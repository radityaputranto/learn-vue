<template>
  <div id="app">
    <!-- header -->
    <app-header></app-header>

    <h1>{{ msg }}</h1>

    <!-- Component -->
    <ninjas></ninjas>
    <hr />
    <!-- local component -->
    <h3>App H3</h3>
    <employee></employee>

    <!-- tes branch -->
    <h1>Branch Development</h1>

    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
//Local Component

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Employee from "./Employee.vue";
//Vue.component("employee", Employee);

export default {
  components: {
    employee: Employee,
    "app-header": Header,
    "app-footer": Footer
  },
  //name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
