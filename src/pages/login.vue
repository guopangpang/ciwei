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
        <div class="input_my_ifo">
          <div class="input_body">
            <div class="input_word_name">我的昵称</div>
            <input class="input_word" placeholder="昵称" v-model="my_name" ref="inputVal" />
            <div class="input_word_name">我的职位</div>
            <input class="input_word" placeholder="设计湿" v-model="my_work"/>
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;width: 66%;margin: 0 17% 1rem">
          <div class="create_button" @click="goto_back()">返回</div>
          <div class="create_button" @click="goto_game()">完成</div>
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
        number:'',
        my_work:'',
        my_name:'',
        no1:require('../src/bianzi/no1.png')
      }
    },
    mounted(){
      // this.number = this.$route.query.num;
      this.number = localStorage.getItem('number');
      if(this.number ==1){
        this.no1 = require('../src/bianzi/no1.png')
      }else if(this.number ==2){
        this.no1 = require('../src/bianzi/no2.png')
      }else if(this.number ==3){
        this.no1 = require('../src/bianzi/no3.png')
      }
      this.$refs.inputVal.focus();
    },
    methods:{
      goto_game(){
        // console.log(this.my_name,this.my_work);
        if(this.my_name === ''){
          localStorage.setItem('my_name','陀螺怪');
        }else{
          localStorage.setItem('my_name',this.my_name);
        }

        if(this.my_work === ''){
          localStorage.setItem('my_work','设计湿');
        }else{
          localStorage.setItem('my_work',this.my_work);
        }

        this.$router.push({path:'/game',query:{num:this.number,my_name:this.my_name,my_work:this.my_work}})
      },
      goto_back(){
        this.$router.push({path:'/chooselogo'})
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
    /*justify-content: space-between;*/
    width: 86vw;
    height:  calc(100vh - 8vw);
    padding: 4vw 7vw
  }
  .header_logo_img{
    display: block;
    width: 86vw;
    height: 20.79vw;
    /*flex: .1 1 auto;*/
  }
  .choose{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 3vw 0 0 0;
    border: 5px solid #000;
    border-radius: 5px;
    /*flex: .5 1 auto;*/
    height: calc(90vh - 37.09vw);
  }
  .title{
    display: flex;
    justify-content: space-between;
    width: calc(100% - 1.6rem);
    margin: 2.1vw .8rem 0;
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
    margin: -1.5vw -1.5vw -1.5vw 0;
  }
  .number_logo{
    text-align: right;
    font-family: SourceHanSansSC-Bold;
    font-size: .4rem;
  }
  .input_my_ifo{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../src/my_info.png") center no-repeat ;
    background-size: 94%;
    width: 60vw;
    height: 76vw;
    margin: 0 auto 1.5vw;
    text-align: center;
  }
  .input_body{
    margin-left: 4vw;
    margin-top: -1.5vw;
    width: 34%;
  }
  .input_body input{
    border: none;
    /*border-left: 1px solid #000;*/
    outline:none;
    padding-left: 0.3vw;
    width: 90%;
    caret-color:#000;
  }
  .input_word_name{
    margin-left: -4vw;
    margin-top: -1.2vw;
    margin-bottom: -1.2vw;
    font-size:3.7vw;
    font-family: SourceHanSansSC-Bold;
  }
  .input_word{
    font-size: 3.7vw;
    /*height: 3.5vw;*/
    font-family: SourceHanSansSC-Bold;
  }
  .create_button{
    border: 5px solid #000;
    width: 22vw;
    height: 11vw;
    line-height: 11vw;
    border-radius: 10vw;
    /*margin: 0 calc(50% - 4rem) 1rem;*/
    background-color: #fff;
    text-align: center;
    font-size: 6.5vw;
    font-family: SourceHanSansSC-Bold;
  }
  .footer_info{
    display: flex;
    width: 100%;
    height: 16.3vw;
    margin-top: 2.5vw;
    justify-content: space-between;
  }
  .erweima_img{
    /*width: 16.3vw;*/
    height: 100%
    /*margin-top: 1.5vw;*/
  }
</style>
