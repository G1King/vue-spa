

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from '@/service/jwtService'
export const SPIC_BASEURL = process.env.BASE_URL;
const ApiService = {
init() {
  Vue.use(VueAxios, axios)
  Vue.axios.defaults.baseURL = SPIC_BASEURL;
 
},
interceptors(){
 // 请求拦截
 Vue.axios.interceptors.request.use(
   config => {
     // config.headers = {
     //     "token": JwtService.getToken()
     // }
       
     config.url = config.url + "?userId=" + 'faf2427b0a0e463a9bf33eb489de626a' + "&token=" + 'faf2427b0a0e463a9bf33eb489de626aC87E9D4937A78321D90BC84E3D96A389'

     return config;
   },
   error => {
     return Promise.reject(error);
   }
 );
 // 响应拦截
 Vue.axios.interceptors.response.use(
   response => {

     return response;
   },
   error => {
     // 错误提醒
     const {
       status
     } = error.response;

     if (status == 401) {
       alert('token过期, 请重新登录!');

     } else {
       console.log(error.response.data.message);
     }
     return Promise.reject(error);

   });
 // 返回出来
},
  get(url, params = {}){
  return Vue.axios.get(url, params).catch(error => {
    throw new Error(`[RWV] ApiService ${error}`);
  }).then((data) => {
    return data.data;
  });
},
 post(url, params = {}) {
  return Vue.axios.post(url, params);
}

}
 export default ApiService;

   


