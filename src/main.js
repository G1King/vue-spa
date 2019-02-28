// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import ApiService from "@/service/api.service";
import filter from '@/common/filters/filter'; //过滤器
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './mintui/mint.ui';
import FastClick from 'fastclick';
Vue.config.productionTip = false
ApiService.init();
ApiService.interceptors(); //拦截器
filter.init();
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}
Vue.use(MintUI);
new Vue({
  router,
 render: h => h(App)
  
}).$mount('#app')
