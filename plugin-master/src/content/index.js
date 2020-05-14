import Vue from 'vue'
const body = document.body; //获取body元素
body.setAttribute('id', 'head_wrapper') // 给body添加id=head_wrapper
const div = document.createElement('div')
div.setAttribute('id','custom_app')
document.querySelector('#head_wrapper').appendChild(div)


import { insertElementIcons } from '@/utils'
// 通过Chrome插件的API加载字体文件
insertElementIcons()



import ElementConfig from '@/config/element'
Vue.use(ElementConfig)



console.log('content=>index.js')
import './js/del_ad'    //加载去广告js


// import App from './App.vue' //可用的
// import Test from './components/test.vue' //可用的
// new Vue({
//   el: "#custom_app",
//   render: createElement => {
//     return createElement(App);
//   }
// });

