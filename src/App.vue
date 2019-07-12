<template>
  <div id="app">
    <!--背景音乐-->
    <audio autoplay="autoplay"
           preload="auto" ref="MusicPlay"
           :src="mus" v-show="music_play">
    </audio>
    <div @click="paly_music">222</div>

    <!--按钮音效-->
    <!--<audio src="" id="buttonAudio"></audio>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      music_play:true,
      mus: require("./music/2177691016.mp3")
    }
  },
  mounted(){
    // this.music_play = false
  },
  methods:{
    paly_music(){
      this.$refs.MusicPlay.play();
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
