import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'
import Ninjas from './Ninjas.vue'

//Global component
Vue.component('ninjas', Ninjas)

var app = new Vue({
  el: '#app',
  render: h => h(App)
});

var test1 = new Vue({
  el: '#test1',
  render: h => h(Test)
});
