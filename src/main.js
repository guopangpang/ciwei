// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './commen/styles/style.css'

Vue.config.productionTip = false;

// import audio from "./music/8916.mp3";
// Vue.prototype.clickButton = () => {
//   console.log(4444);
//   let buttonAudio = document.getElementById('buttonAudio');
//   buttonAudio.setAttribute('src',require('./music/8916.mp3'));
//   buttonAudio.play()
// };
// document.body.addEventListener('click',function( e ){
//   let event = e || window.event;
//   let target = event.target || event.srcElement;
//   let clickMusic = target.getAttribute('clickMusic');
//   if(clickMusic==='true') Vue.prototype.clickButton();
//   else return false;
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
