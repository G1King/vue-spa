
import Vue from 'vue'
import {
  SPIC_BASE
} from '@/service/api.js'
//错误过滤
const ErrorFilter = errorValue => {
  return `${errorValue[0]}`;
};
//图片过滤
const ImageFilter = value => {


  return value;
}
const filterUtils = {
  init() {
    Vue.filter("error", ErrorFilter);
    Vue.filter('imageFile', ImageFilter)
  }
}
export default filterUtils;