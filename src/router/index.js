import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Work',
      name: 'Work',
      component: Work
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
