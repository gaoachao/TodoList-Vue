import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
	//将app组件放入容器中
  render: h => h(App),
}).$mount('#app')