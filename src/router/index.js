import Vue from 'vue'
import Router from 'vue-router'
import chooselogo from '@/pages/chooseLogo'
import login from '@/pages/login'
import game from '@/pages/game'
import newImg from '@/pages/newImg'
import imgadd from '@/pages/imgadd'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chooselogo',
      component: chooselogo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/newImg',
      name: 'newImg',
      component: newImg
    },
    {
      path: '/imgadd',
      name: 'imgadd',
      component: imgadd
    }
  ]
})
