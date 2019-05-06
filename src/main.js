import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
	mode: 'history',
	routes: routers
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')

