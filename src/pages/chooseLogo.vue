<template>
  <div class="container">
    <div class="second_container">
      <img src="../src/logo_eight.png" class="header_logo_img">
      <div class="choose">
        <div class="title">
          <div class="title_left">
            <div class="game_master">GAME</div>
            <div class="game_master" style="margin-top: -0.2rem">MASTER</div>
            <div class="game_master_ch">游戏大咖</div>
          </div>
          <div class="title_right">
            <div class="number">NO.{{number}}</div>
            <div class="number_logo">L{{number}}满级</div>
          </div>
        </div>
        <div class="bianzu">
          <img :src="show_bianzu1" @click="bianzu1">
          <img :src="show_bianzu2" @click="bianzu2">
          <img :src="show_bianzu3" @click="bianzu3">
        </div>
        <div style="margin: .1rem 0; font-family: SourceHanSansSC-Bold;font-size: .8rem;text-align: center">选择我的段位</div>
        <div clickMusic='true' class="create_button" @click="goto_login()">开始生成</div>
      </div>
      <div class="footer_info">
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
        <img src="../src/foot_word.png" style="height: 100%">
        <img src="../src/test/chanquan.png" class="erweima_img">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "chooseLogo",
      data(){
        return{
          show_bianzu1:require('../src/bianzi/bianzu1_yellow.png'),
          show_bianzu2:require('../src/bianzi/bianzu2.png'),
          show_bianzu3:require('../src/bianzi/bianzu3.png'),
          number:1
        }
      },
      mounted(){
        localStorage.setItem('number',1);
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
          // this.clickButton();
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
    justify-content: space-around;
    width: calc(100% - 14vw);
    height: calc(100% - 10vw);
    padding: 5vw 7vw
  }
  .header_logo_img{
    display: block;
    width: 86vw;
    flex: .1 0 auto;
  }
  .choose{
    /*height: 65vh;*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: .3rem 0 0 0;
    border: 5px solid #000;
    flex: 0.5 1 auto;
  }
  .title{
    display: flex;
    justify-content: space-between;
    width: calc(100% - 1.6rem);
    margin: .4rem .8rem 0;
  }
  .title_left{}
  .game_master{
    font-family: FF-DIN-Round-Pro-Bold;
  }
  .game_master_ch{
    font-family: SourceHanSansSC-Bold;
  }
  .title_right{}
  .number{
    font-family: FF-DIN-Round-Pro-Medium;
    font-size: 2.8rem;
    margin: -.4rem 0 -.4rem 0;
  }
  .number_logo{
    text-align: right;
    font-family: SourceHanSansSC-Bold;
    font-size: .4rem;
  }
  .bianzu{
    text-align: center;
  }
  .bianzu img{
    margin: 3vw 0 0 0;
    width: 65vw;
  }
  .create_button{
    border: 5px solid #000;
    width: 8rem;
    height: 2.8rem;
    line-height: 2.8rem;
    border-radius: 2.8rem;
    margin:0 auto .8rem;
    background-color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-family: SourceHanSansSC-Bold;
  }
  .footer_info{
    display: flex;
    width: 100%;
    margin-top: 1vw;
    justify-content: space-between;
    height: 16.3vw;
    /*flex: .2 0 auto;*/
  }
  .footer_first{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%
  }
  .start_game{
    font-size: 10vw;
    font-family: FF-DIN-Round-Pro-Medium;
  }
  .shaoshao{
    /*margin: 0 0 0 .7rem;*/
    font-size: 3.8vw;
    font-family: SourceHanSansSC-Bold;
  }
  .erweima_img{
    height: 100%
    /*margin-top: 1.5vw;*/
  }
  .footer_second{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: -0.5rem;
  }
  .tuoluoguai{
    /*margin-right: .2vw;*/
    font-size: 6.8vw;
    font-family: SourceHanSansSC-Bold;
  }
  .wojiushi{
    font-size: 2.6vw;
    font-family: SourceHanSansSC-Bold;
  }

</style>
