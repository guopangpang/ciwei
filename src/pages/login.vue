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
            <span class="input_word">我的昵称</span>
            <input placeholder="昵称" v-model="my_name"/>
            <span class="input_word">我的职位</span>
            <input  placeholder="设计师" v-model="my_work"/>
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;width: 70%;margin: 0 15% 1rem">
          <div class="create_button" @click="goto_back()">返回</div>
          <div class="create_button" @click="goto_game()">完成</div>
        </div>

      </div>
      <div class="footer_info">
        <div style="width: 100%">
          <div class="footer_first">
            <div class="start_game">START GAME</div>
            <div class="shaoshao">
              <div style="margin-top: .3rem">扫一扫</div>
              <div style="margin-top: -0.2rem">变怪兽</div>
            </div>
          </div>
          <div class="footer_second">
            <div class="tuoluoguai">我的陀螺怪</div>
            <div class="wojiushi">
              <div style="margin-top: 0">我就是 [XXX 品牌设计师]</div>
              <div style="margin-top: -0.2rem">我擅长 [各种花式设计稿]</div>
            </div>
          </div>
        </div>
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
      this.number = this.$route.query.num;
    },
    methods:{
      goto_game(){
        console.log(this.my_name,this.my_work);
        this.$router.push({path:'/game',query:{num:this.number,my_name:this.my_name,my_work:this.my_work}})
      },
      goto_back(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 100vw;
    height: 99.5vh;
    background-color: yellow;
  }
  .second_container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 2.4rem);
    height: calc(100% - 2.4rem);
    padding: 1.2rem
  }
  .header_logo_img{
    display: block;
    width: 100%;
  }
  .choose{
    margin: 1.2rem 0 0 0;
    border: 4px solid #000;
  }
  .title{
    display: flex;
    justify-content: space-between;
    width: calc(100% - 1.6rem);
    margin: .8rem;
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
    font-size: 1.8rem;
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
    width: 60%;
    height: 280px;
    margin: -15px 20% 10px;
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
  .input_word{
    font-size: .9rem;
    font-family: SourceHanSansSC-Bold;
  }
  .create_button{
    border: 3px solid #000;
    width: 6rem;
    height: 2.8rem;
    line-height: 2.8rem;
    border-radius: 1.4rem;
    /*margin: 0 calc(50% - 4rem) 1rem;*/
    background-color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-family: SourceHanSansSC-Bold;
  }
  .footer_info{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .footer_first{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%
  }
  .start_game{
    font-size: 9.5vw;
    font-family: FF-DIN-Round-Pro-Medium;
  }
  .shaoshao{
    /*margin: 0 0 0 .7rem;*/
    font-size: 3.8vw;
    font-family: SourceHanSansSC-Bold;
  }
  .erweima_img{
    width: 21vw;
  }
  .footer_second{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%
  }
  .tuoluoguai{
    /*margin-right: .2vw;*/
    font-size: 6.6vw;
    font-family: SourceHanSansSC-Bold;
  }
  .wojiushi{
    font-size: 2.6vw;
    font-family: SourceHanSansSC-Bold;
  }
</style>
