import Vue from 'vue'
import Router from 'vue-router'
import chooselogo from '@/pages/chooseLogo'
import login from '@/pages/login'
import game from '@/pages/game'
import newImg from '@/pages/newImg'
import imgadd from '@/pages/imgadd'



Vue.use(Router);


const router =  new Router({
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
});

let toURL = null;
router.beforeEach((to, from, next) => {
  if (toURL === to.path) {
    next()
  }
  if (to.path !== from.path) {
    toURL = to.path;
    router.replace(to.path);
    next()
  }
});

export default router
