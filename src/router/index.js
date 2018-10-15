import Vue from 'vue'
import Router from 'vue-router'
import Section from '@/components/Section'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Section',
      component: Section
    }
  ]
})
