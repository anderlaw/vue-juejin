// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./main.css')
Vue.config.productionTip = false
//注册全局指令
Vue.directive('switchNav', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,binding) {
    let targetClass = binding.value;
    let sublings = el.querySelectorAll('.'+targetClass);
    el.addEventListener('click',function(event){
      let className = event.target.className;
      if(className.indexOf(targetClass) !== -1 ){
        //关闭所有
        sublings.forEach(element => {
          element.className = targetClass;
        });
        //打开自己
        event.target.className = targetClass+' active';
      }
    })
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
