import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Game from '@/components/Game'
import UserInfo from '@/components/UserInfo'
import Course from '@/components/Course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'Home',
      component: Game
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
	{
      path: '/Course',
      name: 'Course',
      component: Course
    },
  ]
})
