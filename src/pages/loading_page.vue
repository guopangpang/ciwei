<template>
  <div class="loading_page">
    <div style="display: flex;justify-content: space-around;align-items: center;flex-direction: column;margin: 40vw auto;">
      <img src="../src/logo_big.png" style="width: 50vw">
      <!--<div style="margin-top: 10vw;margin-bottom: -1.5vw; font-family: SourceHanSansSC-Light;font-size: 3.8vw">游戏加载中</div>-->
      <!--<div style="margin-bottom: -3vw; font-family: SourceHanSansSC-Light">...</div>-->
      <img src="../src/game_load.png" style="margin-top: 10vw;width: 25vw">
      <img src="../src/loading.gif" style="margin-top: 2vw;width: 60vw;">
    </div>
    <div style="position: fixed;bottom: 4vw;text-align: center;width: 100vw;font-size: 2.6vw;font-family: FF-DIN-Round-Pro-Medium">Copy right by HEDGEHOG DESIGN</div>
  </div>
</template>

<script>
    export default {
      name: "loading_page",
      mounted(){
        setTimeout(()=>{
          this.$router.push({path:'/chooseLogo'})
        },3000)
      }
    }
</script>

<style scoped>
  .loading_page{
    position: fixed;
    top: 0;
    left: 0;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    width: 100vw;
    height: 100vh;
    background-color: #fff100;
  }
</style>
