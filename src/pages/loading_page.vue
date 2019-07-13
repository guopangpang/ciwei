<template>
  <div class="loading_page">
    <div style="display: flex;justify-content: space-around;align-items: center;flex-direction: column;margin: 40vw auto;">
      <img src="../src/logo_big.png" style="width: 50vw">
      <span style="margin-top: 6vw;">游戏加载中</span>
      <span>......</span>
      <img src="../src/loading.gif" style="margin-top: 2vw;width: 60vw;">
    </div>
    <div style="position: fixed;bottom: 4vw;text-align: center;width: 100vw;font-size: .6rem">Copy right by HEDGEHOG DESIGN</div>
  </div>
</template>

<script>
    export default {
      name: "loading_page",
      mounted(){
        setTimeout(()=>{
          this.$router.push({path:'chooseLogo'})
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
