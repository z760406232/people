import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import * as echarts from 'echarts';
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.use(echarts);

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
// let AUTH_TOKEN = 123
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseURL = 'http://192.168.0.194:8080'
axios.defaults.baseURL = 'https://zongze.caobenxing.com/'
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
      