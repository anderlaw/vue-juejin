import Vue from 'vue'
import Router from 'vue-router'

import MainCompo from '@/pages/main'
import articleBox from '@/components/article-box'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainCompo,
      children:[
        { path:'/',component:articleBox },//热门文章
      ]
    }
  ]
})
