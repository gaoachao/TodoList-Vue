/*
	main.js是整个文件的入口文件
*/

//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	//将app组件放入容器中
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el:'#app',
// 	//将app组件放入容器中
//   render: h => h(App),
// })

