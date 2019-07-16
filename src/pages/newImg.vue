<template>
  <div class="container">
    <div class="second_container">
      <div class="fenxiang_tiile">
        <img src="../src/logo.png">
        <div style="display: flex">
          <div style="margin-right:-2.7vw; line-height: 1rem;width: 46px;font-family: SourceHanSansSC-Bold;">分享圈子</div>
          <img src="../src/up.png">
        </div>
      </div>
      <img src="../src/person/1.png" style="width: 70vw;margin-top: -5vw">
      <img src="../src/foot_wor_fenxiang.png" style="width: 92%;">
      <!--<div class="footer_info">-->
        <!--<div class="my_tuoluo">分享我的陀螺怪专属海报</div>-->
        <!--<div style="width: 100%">-->
          <!--<div class="footer_first">-->
            <!--<div class="start_game">START GAME</div>-->
            <!--<div class="shaoshao">-->
              <!--<div style="margin-top: .3rem">扫一扫</div>-->
              <!--<div style="margin-top: -0.4rem">变怪兽</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="footer_second">-->
            <!--<div class="tuoluoguai">我的陀螺怪</div>-->
            <!--<div class="wojiushi">-->
              <!--<div style="margin-top: 0">我就是 [XXX 品牌设计师]</div>-->
              <!--<div style="margin-top: -0.2rem">我擅长 [各种花式设计稿]</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "newImg",
    data(){
      return{
        show_bianzu1:require('../src/bianzi/bianzu1_yellow.png'),
        show_bianzu2:require('../src/bianzi/bianzu2.png'),
        show_bianzu3:require('../src/bianzi/bianzu3.png'),
        number:1
      }
    },
    mounted(){

    },
    methods:{
      bianzu1(){
        this.show_bianzu1 = require('../src/bianzi/bianzu1_yellow.png');
        this.show_bianzu2 = require('../src/bianzi/bianzu2.png');
        this.show_bianzu3 = require('../src/bianzi/bianzu3.png');
        localStorage.setItem('number',1);
        this.number = 1
      },
      bianzu2(){
        this.show_bianzu1 = require('../src/bianzi/bianzu1.png');
        this.show_bianzu2 = require('../src/bianzi/bianzu2_yellow.png');
        this.show_bianzu3 = require('../src/bianzi/bianzu3.png');
        localStorage.setItem('number',2);
        this.number = 2
      },
      bianzu3(){
        this.show_bianzu1 = require('../src/bianzi/bianzu1.png');
        this.show_bianzu2 = require('../src/bianzi/bianzu2.png');
        this.show_bianzu3 = require('../src/bianzi/bianzu3_yellow.png');
        localStorage.setItem('number',3);
        this.number = 3
      },
      goto_login(){
        this.$router.push({path:'/login',query:{num:this.number}})
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 100vw;
    height: 100vh;
    background-color: #fff100;
  }
  .second_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    padding: 1rem
  }
  .fenxiang_tiile{
    display: flex;
    width: 92%;
    margin: 2vw 4% 0;
    justify-content: space-between;
  }
  .fenxiang_tiile img{
    height: 10vw;
  }

  .bianzu img{
    margin: .6rem 0 0 0;
    width: 72%;
  }
  .footer_info{
    /*display: flex;*/
    width: 100%;
    /*justify-content: space-between;*/
  }
  .my_tuoluo{
    margin-bottom: -2vw;
    text-align: center;
    font-size: 8.2vw;
    font-family: SourceHanSansSC-Bold;
  }
  .footer_first{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
  }
  .start_game{
    font-size: 12vw;
    font-family: FF-DIN-Round-Pro-Medium;
  }
  .shaoshao{
    font-size: 4.5vw;
    font-family: SourceHanSansSC-Bold;
  }
  .footer_second{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: -0.5rem;
  }
  .tuoluoguai{
    /*margin-right: .2vw;*/
    font-size: 9.2vw;
    font-family: SourceHanSansSC-Bold;
  }
  .wojiushi{
    font-size: 3.9vw;
    font-family: SourceHanSansSC-Bold;
  }
</style>
