import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Início.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Início',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Início.vue')
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
    }
  },
  {
    path: '/maisinformacoes',
    name: 'Maisinformacoes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Maisinformacoes.vue')
    }
  }

]

const router = new VueRouter({
  routes,
  mode: "history" //remover o # da raiz do router do projeto
})

export default router
