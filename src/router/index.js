import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list/List.vue'
import Cart from '@/components/cart/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/list' },
    { path: '/list', component: List },
    { path: '/cart', component: Cart }
  ]
})
