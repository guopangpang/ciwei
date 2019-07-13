<template>
  <div class="container">
    <div class="second_container">
      <img src="../src/logo_eight.png" class="header_logo_img">
      <div class="choose">
        <div class="title">
          <div class="title_left">
            <div class="game_master">GAME</div>
            <div class="game_master" style="margin-top: -0.4rem">MASTER</div>
            <div class="game_master_ch">游戏大咖</div>
          </div>
          <div class="title_right">
            <div class="number">NO.{{number}}</div>
            <div class="number_logo">L{{number}}满级</div>
          </div>
        </div>
        <div class="input_my_ifo">
          <div class="input_body">
            <span class="input_word_name">我的昵称</span>
            <input class="input_word" placeholder="昵称" v-model="my_name" />
            <span class="input_word_name">我的职位</span>
            <input class="input_word" placeholder="设计师" v-model="my_work"/>
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;width: 78%;margin: 0 11% 1rem">
          <div class="create_button" @click="goto_back()">返回</div>
          <div class="create_button" @click="goto_game()">完成</div>
        </div>

      </div>
      <div class="footer_info">
        <!--<div style="width: 100%">-->
          <!--<div class="footer_first">-->
            <!--<div class="start_game">START GAME</div>-->
            <!--<div class="shaoshao">-->
              <!--<div style="margin-top: .3rem">扫一扫</div>-->
              <!--<div style="margin-top: -0.2rem">变怪兽</div>-->
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
        number:'',
        my_work:'',
        my_name:''
      }
    },
    mounted(){
      // this.number = this.$route.query.num;
      this.number = localStorage.getItem('number')
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
          localStorage.setItem('my_work','设计师');
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 14vw);
    height: calc(100% - 10vw);
    padding: 5vw 7vw
  }
  .header_logo_img{
    display: block;
    width: 86vw;
    flex: .1 1 auto;
  }
  .choose{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: .3rem 0 0 0;
    border: 5px solid #000;
    flex: .5 1 auto;
    /*height: 65vh;*/
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
  .input_my_ifo{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../src/my_info.png") center no-repeat ;
    background-size: 100%;
    width: 62vw;
    height: 77vw;
    margin: -2vw auto 1.5vw;
    text-align: center;
  }
  .input_body{
    margin-right: 4px;
    margin-top: -10px;
    width: 38%;
  }
  .input_body input{
    border: none;
    border-left: 1px solid #000;
    outline:none;
    padding-left: 3px;
    width: 90%;
  }
  .input_word_name{
    font-size:.9rem;
    font-family: SourceHanSansSC-Bold;
  }
  .input_word{
    font-size: .8rem;
    font-family: SourceHanSansSC-Bold;
  }
  .create_button{
    border: 5px solid #000;
    width: 6rem;
    height: 2.8rem;
    line-height: 2.8rem;
    border-radius: 2.8rem;
    /*margin: 0 calc(50% - 4rem) 1rem;*/
    background-color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-family: SourceHanSansSC-Bold;
  }
  .footer_info{
    display: flex;
    width: 100%;
    height: 16.3vw;
    margin-top: 1vw;
    justify-content: space-between;
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
    /*width: 16.3vw;*/
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
