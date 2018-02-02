import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import tree from '@/components/tree'
import createcompany from '@/components/createcompany'
import updatecom from '@/components/updatecom'
import deletecom from '@/components/deletecom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tree',
      component: tree
    },
    {
      path: '/company/createcompany',
      name: 'create',
      component: createcompany
    },
    {
      path: '/company/:id/updatecom',
      name: 'updatecom',
      component: updatecom
    },
    {
      path: '/company/:id/deletecom',
      name: 'deletecom',
      component: deletecom
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/*',
      redirect: 'tree'
    }
  ]

})
