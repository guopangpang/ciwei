<template>
  <div class="container">
    <div class="second_container">
      <img src="../src/logo_eight.png" class="header_logo_img">
      <div class="choose">
        <div class="title">
          <div class="title_left">
            <!--<div class="game_master">GAME</div>-->
            <!--<div class="game_master" style="margin-top: -1.1vw">MASTER</div>-->
            <!--<div class="game_master_ch">游戏大咖</div>-->
            <img src="../src/bianzi/master.png" style="width: 14vw;">
          </div>
          <div class="title_right">
            <!--<div class="number">NO.{{number}}</div>-->
            <!--<div class="number_logo">L{{number}}满级</div>-->
            <img :src="no1" style="width: 22vw;margin-top: -1.5vw">
          </div>
        </div>
        <div class="bianzu">
          <img :src="show_bianzu1" @click="bianzu1">
          <img :src="show_bianzu2" @click="bianzu2">
          <img :src="show_bianzu3" @click="bianzu3">
        </div>
        <div style=" font-family: SourceHanSansSC-Bold;font-size: 2.6vw;text-align: center;margin-top: -1vw">选择我的段位</div>
        <div class="create_button" @click="goto_login()">
          <img src="../src/btn/start.png" style="width: 78%">
          <!--开始生产-->
        </div>
      </div>
      <div class="footer_info">
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
          number:1,
          no1:require('../src/bianzi/no1.png')
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
          this.no1 = require('../src/bianzi/no1.png');
          this.number = 1
        },
        bianzu2(){
          this.show_bianzu1 = require('../src/bianzi/bianzu1.png');
          this.show_bianzu2 = require('../src/bianzi/bianzu2_yellow.png');
          this.show_bianzu3 = require('../src/bianzi/bianzu3.png');
          localStorage.setItem('number',2);
          this.no1 = require('../src/bianzi/no2.png');
          this.number = 2
        },
        bianzu3(){
          this.show_bianzu1 = require('../src/bianzi/bianzu1.png');
          this.show_bianzu2 = require('../src/bianzi/bianzu2.png');
          this.show_bianzu3 = require('../src/bianzi/bianzu3_yellow.png');
          localStorage.setItem('number',3);
          this.no1 = require('../src/bianzi/no3.png');
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
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: space-around;*/
    width: 86vw;
    height:  calc(100vh - 8vw);
    padding: 4vw 7vw
  }
  .header_logo_img{
    display: block;
    width: 86vw;
    height: 20.79vw;
    /*flex: .1 0 auto;*/
  }
  .choose{
    height: calc(90vh - 37.09vw);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 3vw 0 0 0;
    border: 5px solid #000;
    border-radius: 5px;
    /*flex: 0.5 1 auto;*/
  }
  .title{
    display: flex;
    justify-content: space-between;
    width: calc(100% - 1.6rem);
    margin: 1.8vw .8rem 0;
  }
  .title_left{}
  .game_master{
    /*font-family: FF-DIN-Round-Pro-Bold;*/
  }
  .game_master_ch{
    /*font-family: SourceHanSansSC-Bold;*/
  }
  .title_right{}
  .number{
    /*font-family: FF-DIN-Round-Pro-Medium;*/
    font-size: 2.8rem;
    margin: -1.5vw -1.5vw -1.5vw 0;
  }
  .number_logo{
    text-align: right;
    /*font-family: SourceHanSansSC-Bold;*/
    font-size: .4rem;
  }
  .bianzu{
    text-align: center;
    margin-top: -4.5vw;
  }
  .bianzu img{
    margin: 1vw 0 0 0;
    width: 63vw;
  }
  .create_button{
    border: 5px solid #000;
    width: 36vw;
    height: 11vw;
    line-height: 13.5vw;
    border-radius: 10vw;
    margin:0 auto .8rem;
    background-color: #fff;
    text-align: center;
    font-size: 6.5vw;
    font-family: SourceHanSansSC-Bold;
  }
  .footer_info{
    display: flex;
    width: 86vw;
    margin-top: 2.5vw;
    justify-content: space-between;
    height: 16.3vw;
    /*flex: .2 0 auto;*/
  }
  .erweima_img{
    height: 100%
    /*margin-top: 1.5vw;*/
  }
</style>
