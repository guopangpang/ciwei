<template>
  <div id="app" @click="paly_music">
    <!--背景音乐-->
    <audio id="MusicPlay" loop="loop"
           src="/static/music/2177691016.mp3" v-show="music_play">
    </audio>
    <!--<div @click="paly_music">222</div>-->

    <!--按钮音效-->
    <!--<audio src="" id="buttonAudio"></audio>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      music_play:true,
      mus: ''
    }
  },
  mounted(){
    // this.music_play = false
  },
  methods:{
    paly_music(){
      var audio = document.getElementById("MusicPlay");
      audio.play();
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
