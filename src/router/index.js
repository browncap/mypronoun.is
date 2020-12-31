import Vue from 'vue'
import VueRouter from 'vue-router'
import Pronouns from '../views/Pronouns.vue'
import Donate from '../views/Donate.vue'
import Root from '../views/Root.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/:pronoun/:secondPronoun',
    name: 'Pronouns',
    component: Pronouns,
  },
  {
    path: '/:pronoun',
    name: 'Pronouns',
    component: Pronouns
  },
  {
    path: '*',
    name: 'Root',
    component: Root
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
